class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational: boolean = true
  ) {
    super(message);
    this.statusCode;
    this.isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
