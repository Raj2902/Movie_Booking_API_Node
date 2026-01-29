import express from "express";
import { createMovie } from "../controllers/movie.controller.ts";
const router = express.Router();

// define the home page route
router.post("/", createMovie);

export const movieRouter = router;
