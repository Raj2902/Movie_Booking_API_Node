import mongoose from "mongoose";
import { theatreSchema } from "../Schemas/theatre.schema.ts";

export const Theatre = mongoose.model("Theatre", theatreSchema);
