import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovie,
  getMovies,
  updateMovie,
} from "../controllers/movie.controller.ts";
const router = express.Router();

router.get("/:id", getMovie);
router.get("/", getMovies);
router.post("/", createMovie);
router.delete("/:id", deleteMovie);
router.put("/:id", updateMovie);
router.patch("/:id", updateMovie);

export const movieRouter = router;
