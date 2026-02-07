import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.ts";
import {
  createMovieServc,
  deleteMovieById,
  fetchMovies,
  getMovieById,
  updateMovieSrvc,
} from "../services/movie.service.ts";
import type { MovieId, MovieInterface } from "../interface/movie.interface.js";

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

export const deleteMovie = asyncHandler(
  async (req: Request<MovieId, {}, {}>, res: Response) => {
    const { id } = req.params;
    const movie = await deleteMovieById(id);

    return res.status(200).json({
      success: true,
      error: {},
      data: movie,
      message: "Movie deleted successfully",
    });
  },
);

export const getMovie = asyncHandler(
  async (req: Request<MovieId, {}, {}>, res: Response) => {
    const { id } = req.params;
    const movie = await getMovieById(id);

    res.status(200).json({
      success: true,
      data: movie,
      message: "Successfully fetched movie details",
    });
  },
);

export const getMovies = asyncHandler(
  async (req: Request<{}, {}, {}, { name?: string }>, res: Response) => {
    const { name } = req.query;
    const movies = await fetchMovies(name);
    return res.status(200).json({
      sucess: true,
      data: movies,
      message: "Movies fetched successfully",
      error: {},
    });
  },
);

export const updateMovie = asyncHandler(
  async (req: Request<MovieId, {}, MovieInterface>, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    const movie = await updateMovieSrvc(id, body);
    res.status(200).json({
      success: true,
      data: movie,
      message: "Movie Updated Successfully.",
    });
  },
);
