// src/app.ts
import express from "express";
import {
  applyCors,
  applyHelmet,
  applyMongoSanitize,
} from "@/middlewares/security.middleware.js";
import { globalRateLimiter } from "@/middlewares/rateLimit.middleware.js";
import { httpLogger } from "@/middlewares/httpLogger.middleware.js";
import globalErrorHandler from "@/middlewares/error.middleware.js";

const app = express();

// 1️⃣ Security first
applyHelmet(app);
applyCors(app);
applyMongoSanitize(app);

// 2️⃣ Rate limiting
app.use(globalRateLimiter);

// 3️⃣ Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4️⃣ Logging
app.use(httpLogger);

// 5️⃣ Routes
// app.use("/api/v1/auth", authRoutes);

// 6️⃣ Error handler (last)
app.use(globalErrorHandler);

export default app;
