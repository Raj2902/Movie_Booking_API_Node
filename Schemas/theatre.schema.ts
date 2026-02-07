import mongoose from "mongoose";
const { Schema } = mongoose;

export const theatreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
  },
  { timestamps: true },
);
