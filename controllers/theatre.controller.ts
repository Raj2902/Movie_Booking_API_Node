import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.ts";
import {
  createTheatreServc,
  deleteTheatreServc,
  getAllTheatresServc,
  getTheatreServc,
} from "../services/theatre.service.ts";
import type { theatreInterface } from "../interface/theatre.interface.ts";
import type mongoose from "mongoose";

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

export const getTheatre = asyncHandler(
  async (req: Request<{ id: mongoose.Types.ObjectId }>, res: Response) => {
    const { id } = req.params;
    const theatre = await getTheatreServc(id);
    return res.status(200).json({
      sucess: true,
      data: theatre,
      message: "Theatre fetched successfully",
      error: {},
    });
  },
);

export const getAllTheatres = asyncHandler(
  async (req: Request, res: Response) => {
    const theatre = await getAllTheatresServc();
    return res.status(200).json({
      sucess: true,
      data: theatre,
      message: "Theatres fetched successfully",
      error: {},
    });
  },
);

export const deleteTheatre = asyncHandler(
  async (req: Request<{ id: mongoose.Types.ObjectId }>, res: Response) => {
    const { id } = req.params;
    const theatre = await deleteTheatreServc(id);
    return res.status(200).json({
      sucess: true,
      data: theatre,
      message: "Theatre deleted successfully",
      error: {},
    });
  },
);
