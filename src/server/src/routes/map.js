import express from "express";

/**
 * A function to get all map related routes
 * @returns express router with registered map routes
 */
export function getMapRoutes() {
  const router = express.Router();

  // add more map endpoints here
  router.get("/", getAllMaps);

  return router;
}

/**
 * Endpoint to get all maps
 * GET /api/maps
 * @param {*} req request
 * @param {*} res response
 */
async function getAllMaps(req, res) {
  console.log("GET /api/maps");
  res.send("GET /api/maps successful");
}
