// import the express application and type definition
import express, { Express } from "express";

// initialize the express application
const app: Express = express();

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

export interface Player {
    id: number;
    name: string;
    wins: number;
    losses: number;
    totalScore: number;
}

let samplePlayers =
    [
    {
        id: 1, name: "ShadowStrike", wins: 15, losses: 5, totalScore: 28500,
    },
    {
        id: 2, name: "NoobMaster", wins: 3, losses: 12, totalScore: 4200,
    },
    {
        id: 3, name: "ProGamer99", wins: 0, losses: 0, totalScore: 0
    }    
    ];

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

// export app and server for testing
export default app;