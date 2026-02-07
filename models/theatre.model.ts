import mongoose from "mongoose";
import { theatreSchema } from "../Schemas/theatre.schema.js";

export const Theatre = mongoose.model("Movie", theatreSchema);
