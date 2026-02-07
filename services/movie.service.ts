import { Movie } from "../models/movie.model.ts";
import { AppError } from "../utils/AppError.ts";
import mongoose from "mongoose";
import type { Request } from "express";
import type { MovieInterface } from "../interface/movie.interface.js";

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

export const updateMovieSrvc = async (
  id: string,
  updateData: MovieInterface,
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid movie id", 400);
  }

  const movie = await Movie.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

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

export const fetchMovies = async (name?: string) => {
  let query: { name?: RegExp } = {};
  if (name) {
    query.name = new RegExp(name, "i");
  }
  const movies = await Movie.find(query);
  if (!movies) {
    throw new AppError("No movie found", 404);
  }
  return movies;
};
