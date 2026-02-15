import {
  createTheatre,
  deleteTheatre,
  getAllTheatres,
  getTheatre,
} from "../controllers/theatre.controller.ts";
import express from "express";
const router = express.Router();

//CREATE
router.post("/", createTheatre);

//READ
router.get("/:id", getTheatre);
router.get("/", getAllTheatres);

//UPDATE

//DELETE
router.delete("/:id", deleteTheatre);

export const theatreRouter = router;
