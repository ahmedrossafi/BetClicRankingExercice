import express, { Request, Response } from "express";

import * as playerController from "./controllers/playerController";
import * as dotenv from 'dotenv';
// Our Express APP config
var app = express();
app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.set("port", process.env.PORT || 3000);
dotenv.config();
// API Endpoints
//app.get("/", (req: Request, res: Response) => res.send("hi"));

// API Endpoints
app.get("/players", playerController.getAllPlayers);
app.get("/sortedPlayers", playerController.getPlayersSortedByPoints);
app.get("/player/:id", playerController.getPlayer);
app.post("/player", playerController.addPlayer);
app.put("/player/:id", playerController.updatePlayer);
app.delete("/player/:id", playerController.deletePlayer);
app.delete("/deletePlayers", playerController.deletePlayers);
const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});

module.exports = app;