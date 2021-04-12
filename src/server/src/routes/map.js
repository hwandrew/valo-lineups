import express from "express";
import { DatabaseClient } from "../database/databaseClient";

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
  // instantiate new database client
  let db = new DatabaseClient();
  console.log("GET /api/maps");

  // interface with client to query for maps
  db.getAllMaps().then(function(result) {
    res.status(200).json({
      status: 200,
      message: "success",
      data: result
    });
  });
}
