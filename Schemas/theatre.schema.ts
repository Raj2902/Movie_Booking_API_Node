import mongoose from "mongoose";
const { Schema } = mongoose;

export const theatreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 5,
    },
    description: String,
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    address: String,
    movies: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Movie",
      default: [],
    },
  },
  { timestamps: true },
);
