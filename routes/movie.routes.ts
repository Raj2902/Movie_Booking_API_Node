import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovie,
} from "../controllers/movie.controller.ts";
const router = express.Router();

router.get("/:id", getMovie);
router.post("/", createMovie);
router.delete("/:id", deleteMovie);

export const movieRouter = router;
