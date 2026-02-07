import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.ts";
import { createTheatreServc } from "../services/theatre.service.ts";
import type { theatreInterface } from "../interface/theatre.interface.ts";

export const createTheatre = asyncHandler(
  async (req: Request<{}, {}, theatreInterface>, res: Response) => {
    const { body } = req;
    const theatre = await createTheatreServc(body);
    return res.status(201).json({
      sucess: true,
      data: theatre,
      message: "Theatre created successfully",
      error: {},
    });
  },
);
