import mongoose from "mongoose";
const { Schema } = mongoose;

/**
 * Define the schema of the movie resource to be stored in the db
 */

const movieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    casts: {
      type: [String],
      required: true,
    },
    trailerUrl: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
      default: "English",
    },
    releaseDate: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    releaseStatus: {
      type: String,
      required: true,
      default: "RELEASED",
    },
  },
  { timestamps: true },
);

export const Movie = mongoose.model("Movie", movieSchema);
