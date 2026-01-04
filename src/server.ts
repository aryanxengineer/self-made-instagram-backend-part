// src/server.ts
import app from "./app.js";
import { createServer } from "node:http";
import { PORT } from "./config/env.js";
import connectMongo from "./config/mongodb.js";
import client from "./config/redis.js";

const httpServer = createServer(app);

const startServer = async () => {
  await connectMongo();
  client.connect();

  httpServer.listen(PORT, () => {
    console.log(`[SERVER] Running on port ${PORT}`);
  });
};


startServer();
