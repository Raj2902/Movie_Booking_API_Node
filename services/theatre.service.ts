import mongoose from "mongoose";
import type { theatreInterface } from "../interface/theatre.interface.ts";
import { Theatre } from "../models/theatre.model.ts";
import { AppError } from "../utils/AppError.ts";

/**
 * Create a theatre
 * @param body the request body of the theatre data to create
 * @returns the newly created theatre
 */
export const createTheatreServc = async (body: theatreInterface) => {
  const theatre = await Theatre.create(body);
  return theatre;
};

/**
 * Helps get all the theaters
 * @returns all the theatres
 */
export const getAllTheatresServc = async () => {
  const theatre = await Theatre.find({}).populate("movies");

  if (!theatre) {
    throw new AppError("No theatres found", 404);
  }

  return theatre;
};

/**
 * Get a specific threatre by its id.
 * @param id the unique id to identify the theatre
 * @returns the specific theatre associated with the id
 */
export const getTheatreServc = async (id: mongoose.Types.ObjectId) => {
  // validate id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid theatre id", 400);
  }

  const theatre = await Theatre.findById(id).populate("movies");

  if (!theatre) {
    throw new AppError("Theatre not found", 404);
  }

  return theatre;
};

/**
 * Delete a theatre as the specific theatre id provided
 * @param id the unique id to identify the theatre
 * @returns the deleted theatre
 */
export const deleteTheatreServc = async (id: mongoose.Types.ObjectId) => {
  // validate id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid theatre id", 400);
  }

  const theatre = await Theatre.findByIdAndDelete(id).populate("movies");

  if (!theatre) {
    throw new AppError("Theatre not found", 404);
  }

  return theatre;
};

/**
 * Update a theatre based on specific theatre id, can be upated prtially as well as completely
 * @param id Unique theatre id
 * @param updateData the data that we need to update in the theatre
 * @returns
 */
export const updateTheatreServc = async (
  id: mongoose.Types.ObjectId,
  updateData: theatreInterface,
) => {
  // validate id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid theatre id", 400);
  }

  const theatre = await Theatre.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  }).populate("movies");

  if (!theatre) {
    throw new AppError("Theatre not found", 404);
  }

  return theatre;
};
