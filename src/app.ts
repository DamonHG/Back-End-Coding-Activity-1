// import the express application and type definition
import express, { Express } from "express";

import { playerPerformanceRating, Player, samplePlayers, findPlayer} from "./services/playerService";

// initialize the express application
const app: Express = express();

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}


// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

/**
 * Health check endpoint that returns server status information
 * @returns JSON response with server health metrics
 */
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

app.get("/api/v1/players", (req, res) => {
    res.json({
        "count" : Array.length,
        "data" : samplePlayers
    });
    //res.json(length, samplePlayers);
});

app.get("/api/v1/players/:id", (req, res) => {
    const id = req.params.id || "404 not found."
});

app.get("/api/v1/players/:id/rating", (req, res) => {
    const id = req.params.id || "404 not found."

    const calledPlayer: Player | undefined = findPlayer(id)
    const playerPerformance: number = playerPerformanceRating(calledPlayer);
});


// export app and server for testing
export default app;