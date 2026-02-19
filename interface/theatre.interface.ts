import type mongoose from "mongoose";

export interface theatreInterface {
  name: string;
  description: string;
  city: string;
  pincode: number;
  address: string;
  movie: mongoose.Schema.Types.ObjectId[];
}

export interface theatreQueryInterface {
  name?: string;
  city?: string;
  pincode?: number;
  address?: string;
}
