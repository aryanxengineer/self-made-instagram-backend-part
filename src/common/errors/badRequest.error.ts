// src/common/errors/badRequest.error.ts

import { AppError } from "./base.error.js";

export class BadRequestError extends AppError {
  statusCode = 400;
  code = "BAD_REQUEST";

  constructor(
    message = "Invalid request payload",
    details?: unknown
  ) {
    super(message, details);
  }
}
