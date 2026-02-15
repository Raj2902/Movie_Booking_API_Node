import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovie,
  getMovies,
  updateMovie,
} from "../controllers/movie.controller.ts";
const router = express.Router();

/**
 * @openapi
 * /mba/api/v1/movies/{id}:
 *   get:
 *     tags:
 *       - Movies
 *     description: Get a specific movie based on the id of the movie provided.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the movie to get
 *     responses:
 *       200:
 *         description: Returns a specific movie based on the movie id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.get("/:id", getMovie);

/**
 * @openapi
 * /mba/api/v1/movies:
 *   get:
 *     tags:
 *       - Movies
 *     description: Get all the movies.
 *     responses:
 *       200:
 *         description: Returns the list of all the movies.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.get("/", getMovies);

/**
 * @openapi
 * /mba/api/v1/movies:
 *   post:
 *     tags:
 *       - Movies
 *     description: Create a new movie.
 *     requestBody:
 *       description: Data needed to create a new movie.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Movie"
 *     responses:
 *       201:
 *         description: Returns a movie with specified id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.post("/", createMovie);

/**
 * @openapi
 * /mba/api/v1/movies/{id}:
 *   delete:
 *     tags:
 *       - Movies
 *     description: Delete a specific movie based on the id of the movie provided.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the movie to delete
 *     responses:
 *       200:
 *         description: Returns the deleted movie based on the movie id provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.delete("/:id", deleteMovie);

/**
 * @openapi
 * /mba/api/v1/movies/{id}:
 *   put:
 *     tags:
 *       - Movies
 *     description: Update a specific movie based on the id of the movie provided.
 *     requestBody:
 *       description: Data needed to update a new movie.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Movie"
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the movie to update
 *     responses:
 *       200:
 *         description: Returns the updated movie based on the movie id provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.put("/:id", updateMovie);

/**
 * @openapi
 * /mba/api/v1/movies/{id}:
 *   patch:
 *     tags:
 *       - Movies
 *     description: Update a specific movie based on the id of the movie provided.
 *     requestBody:
 *       description: Data needed to update a new movie you can add one or more field its a patch request.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Movie"
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the movie to update
 *     responses:
 *       200:
 *         description: Returns the updated movie based on the movie id provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.patch("/:id", updateMovie);

export const movieRouter = router;
