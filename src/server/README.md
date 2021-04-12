# Valo-Lineups Server

## Endpoints

All endpoints are read-only endpoints (`GET` requests only), for now we do not need to support user requests to update database values.

All endpoints will begin with the `/api` prefix.

### Maps

| Endpoint                | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `/maps`                 | Gets all maps                                  |
| `/maps/{mapID}`         | Gets a single map corresponding to the `mapID` |
| `/maps/{mapID}/regions` | Gets all the regions of a map                  |

### Agents

| Endpoint                      | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| `/agents`                     | Gets all agents                                    |
| `/agents/{agentID}`           | Gets a single agent corresponding to the `agentID` |
| `/agents/{agentID}/abilities` | Gets all the abilities of an agent                 |

### Abilities

| Endpoint                 | Description                                             | Required Params |
| ------------------------ | ------------------------------------------------------- | --------------- |
| `/abilities`             | Gets all abilities corresponding to the `agentID` param | `agentID`       |
| `/abilities/{abilityID}` | Gets a single ability corresponding to the `abilityID`  |                 |

### Markers

| Endpoint              | Description                                                                                                                                                           | Required Params    | Optional Params         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------- |
| `/markers`            | Gets all markers corresponding to the `mapID` & `agentID` params. Only returns core marker data (`markerID`, start, end, `mapID`, `agentID`, `abilityID`, `regionID`) | `mapID`, `agentID` | `abilityID`, `regionID` |
| `/markers/{markerID}` | Gets a single marker corresponding to the `markerID`. Gets the full marker info.                                                                                      |                    |                         |

---

## Getting Started

Clone & run `npm install` or `yarn` to download the necessary dependencies

### Initializing the database

TODO

### Hosting the database locally

- Run `npm run dbon` or `yarn dbon` to begin hosting

### Hosting a local server

- Run `npm run start` or `yarn start` to begin hosting on port 3001
- Navigate to `localhost:3001/api`

### Making changes

This project uses `nodemon` to allow for reactive updates whenever project files are changed. Once a server is hosted, there should be no need to kill the process until you're done!
