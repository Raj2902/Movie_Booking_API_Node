import type { theatreInterface } from "../interface/theatre.interface.ts";
import { Theatre } from "../models/theatre.model.ts";
export const createTheatreServc = async (body: theatreInterface) => {
  const theatre = await Theatre.create(body);
  return theatre;
};
