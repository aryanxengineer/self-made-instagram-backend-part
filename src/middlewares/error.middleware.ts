import type { NextFunction, Request, Response } from "express";
import ApiError from "@/utils/ApiError.js";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  // Default values of statusCode and message
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // Log full error (later → Winston / Datadog)
  console.error({
    name: err.name,
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};

export default globalErrorHandler;