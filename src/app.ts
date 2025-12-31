// src/app.ts
import express from "express";

const app = express();

// built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

export default app;
