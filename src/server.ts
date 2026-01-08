// src/server.ts
import app from "./app.js";
import { createServer } from "node:http";
import { PORT } from "./config/env.js";
import connectMongo from "./config/mongodb.js";
import { logger } from "@/logger/index.js";

const httpServer = createServer(app);

const startServer = async () => {
  await connectMongo();

  httpServer.listen(PORT, () => {
    logger.info(`[SERVER] Running on port ${PORT}`);
  });
};

startServer();

export default httpServer;
