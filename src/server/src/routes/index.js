import express from "express";

// import all routes
import { getMapRoutes } from "./map";

export function getRoutes() {
  const router = express.Router();

  // add more endpoints here
  router.use("/maps", getMapRoutes());

  return router;
}
