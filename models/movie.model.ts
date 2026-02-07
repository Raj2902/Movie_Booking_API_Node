import mongoose from "mongoose";
import { movieSchema } from "../Schemas/movie.schema.ts";

export const Movie = mongoose.model("Movie", movieSchema);
