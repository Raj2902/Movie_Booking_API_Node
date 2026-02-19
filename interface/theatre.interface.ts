import type mongoose from "mongoose";

export interface theatreInterface {
  name: string;
  description: string;
  city: string;
  pincode: number;
  address: string;
  movie: mongoose.Schema.Types.ObjectId[];
}

export interface theatreFilters {
  name?: string;
  city?: string;
  pincode?: string;
  address?: string;
}

export type theatreQueryInterface = theatreFilters & {
  limit?: number;
  page?: number;
};
