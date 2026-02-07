import { createTheatre } from "../controllers/theatre.controller.ts";
import express from "express";
const router = express.Router();

router.post("/", createTheatre);

export const theatreRouter = router;
