import { Movie } from "../models/movie.model.ts";
import { AppError } from "../utils/AppError.ts";
import mongoose from "mongoose";
import type { Request } from "express";

export const getMovieById = async (id: string) => {
  // validate id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid movie id", 400);
  }

  const movie = await Movie.findById(id);

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  return movie;
};

export const deleteMovieById = async (id: string) => {
  //validate id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid movie id", 400);
  }
  const movie = await Movie.findByIdAndDelete(id);

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  return movie;
};

export const createMovieServc = async (req: Request) => {
  const movie = await Movie.create(req.body);

  if (!movie) {
    throw new AppError("Unable to create a new movie", 400);
  }

  return movie;
};
