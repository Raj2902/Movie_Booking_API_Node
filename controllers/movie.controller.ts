import { Movie } from "../models/movie.model.ts";
import type { Request, Response } from "express";

/**
 * Creates a new movie record.
 *
 * @param req - Express request object containing movie details in the request body.
 * @param res - Express response object used to return the operation result.
 *
 * @returns JSON response with the created movie on success,
 *          or an error message on failure.
 */

export const createMovie = async (req: Request, res: Response) => {
  try {
    const movie = await Movie.create(req.body);
    return res.status(201).json({
      success: true,
      error: {},
      data: movie,
      message: "Movie created successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: err,
      data: {},
      message: "Something went wrong",
    });
  }
};
