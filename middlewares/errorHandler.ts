// middlewares/errorHandler.ts
import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.ts";
import mongoose from "mongoose";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      success: false,
      error: Object.values(err.errors).map((e) => e.message),
      data: {},
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: { message: err.message },
      data: {},
    });
  }

  // fallback for unknown errors
  return res.status(500).json({
    message: err.message || "Internal Server Error",
  });
};
