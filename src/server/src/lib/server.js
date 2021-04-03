import express from "express";
import { getRoutes } from "../routes";

/**
 * Starts an instance of the express server & mounts it to the '/api' endpoint
 * @param {*} port port for the server. @default process.env.PORT
 * @returns Promise which resolves with the express server
 */
export function startServer({ port = process.env.PORT } = {}) {
  const app = express();

  // mount entire app to the '/api' route
  app.use("/api", getRoutes());

  // generic error handler
  app.use(errorMiddleware);

  // start express app & resolve the promise with the express server
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.info(`Listening on port ${server.address().port}`);

      // turn `server.close` into a promise API
      const originalClose = server.close.bind(server);
      server.close = () => {
        return new Promise((resolveClose) => {
          originalClose(resolveClose);
        });
      };

      // ensure server is properly closed when program exits
      setupCloseOnExit(server);

      // resolve the promise with the express server
      resolve(server);
    });
  });
}

function errorMiddleware(error, req, res, next) {
  if (res.headersSent) {
    next(error);
  } else {
    console.log(error);
    res.status(500);
    res.json({
      message: error.message,
      ...(process.env.NODE_ENV === "production"
        ? null
        : { stack: error.stack }),
    });
  }
}

function setupCloseOnExit(server) {
  async function exitHandler(options = {}) {
    await server
      .close()
      .then(() => {
        console.info("Server successfully closed");
      })
      .catch((e) => {
        console.warn("Something went wrong closing the server", e.stack);
      });

    if (options.exit) {
      process.exit;
    }
  }

  // do something when app is closing
  process.on("exit", exitHandler);
  // catches ctrl+c event
  process.on("SIGINT", exitHandler.bind(null, { exit: true }));
  // catches "kill pid" (ex: nodemon restart)
  process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
  process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));
  // catches uncaught exceptions
  process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
}
