import { Movie } from "../models/movie.model.ts";
import { AppError } from "../utils/AppError.ts";
import mongoose from "mongoose";
import type { Request } from "express";
import type { MovieInterface } from "../interface/movie.interface.js";

/**
 * Get a specific movie by its id
 * @param id the unique id to identify the movie
 * @returns the movie with the specific id
 */
export const getMovieById = async (id: mongoose.Types.ObjectId) => {
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

/**
 * Helps to update a movie with specified id
 * @param id the unique id to identify the movie
 * @param updateData the data the needs to be updated
 * @returns the updated movie
 */
export const updateMovieSrvc = async (
  id: mongoose.Types.ObjectId,
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

/**
 * Helps to delete a movie with specified id
 * @param id the unique id to identify the movie
 * @returns the deleted movie
 */
export const deleteMovieById = async (id: mongoose.Types.ObjectId) => {
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

/**
 * Create a new movie
 * @param req the request object
 * @returns the new movie created
 */
export const createMovieServc = async (req: Request) => {
  const movie = await Movie.create(req.body);
  return movie;
};

/**
 * Get all the movies, movies can be filtered on names of the movies
 * @param name the name of the movie to search
 * @returns all the movies
 */
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
