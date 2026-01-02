// src/server.ts
import app from "./app.js";
import { createServer } from "node:http";
import { PORT } from "./config/env.js";

const httpServer = createServer(app);


httpServer.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT} 🚀`);
});