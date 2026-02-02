import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.ts";
import {
  createMovieServc,
  deleteMovieById,
  getMovieById,
} from "../services/movie.service.ts";

/**
 * Creates a new movie record.
 *
 * @param req - Express request object containing movie details in the request body.
 * @param res - Express response object used to return the operation result.
 *
 * @returns JSON response with the created movie on success,
 *          or an error message on failure.
 */

export const createMovie = asyncHandler(async (req: Request, res: Response) => {
  const movie = await createMovieServc(req);

  return res.status(201).json({
    success: true,
    error: {},
    data: movie,
    message: "Movie created successfully",
  });
});

export const deleteMovie = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = await deleteMovieById((id || "") as string);

  return res.status(200).json({
    success: true,
    error: {},
    data: movie,
    message: "Movie deleted successfully",
  });
});

export const getMovie = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = await getMovieById((id || "") as string);

  res.status(200).json({
    success: true,
    data: movie,
    message: "Successfully fetched movie details",
  });
});
