import {
  createTheatre,
  deleteTheatre,
  getAllTheatres,
  getTheatre,
  updateTheatre,
} from "../controllers/theatre.controller.ts";
import express from "express";
const router = express.Router();

/**
 * @openapi
 * /mba/api/v1/theatres:
 *   post:
 *     tags:
 *       - Theatres
 *     description: Create a new theatre.
 *     requestBody:
 *       description: Data needed to create a new theatre.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Theatre"
 *     responses:
 *       201:
 *         description: Returns a theatre with specified id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Theatre'
 */
router.post("/", createTheatre);

/**
 * @openapi
 * /mba/api/v1/theatres/{id}:
 *   get:
 *     tags:
 *       - Theatres
 *     description: Get a specific theatre based on the id of the theatre provided.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id of the theatre to get
 *     responses:
 *       200:
 *         description: Returns a specific theatre based on the theatre id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Theatre'
 */
router.get("/:id", getTheatre);

/**
 * @openapi
 * /mba/api/v1/theatres:
 *   get:
 *     tags:
 *       - Theatres
 *     description: Get all the theatres.
 *     responses:
 *       200:
 *         description: Returns the list of all the theatres.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Theatre'
 */
router.get("/", getAllTheatres);

/**
 * @openapi
 * /mba/api/v1/theatres/{id}:
 *   put:
 *     tags:
 *       - Theatres
 *     description: Update a specific theatre based on the id of the theatre provided.
 *     requestBody:
 *       description: Data needed to update a new theatre.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Theatre"
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Numeric ID of the theatre to update
 *     responses:
 *       200:
 *         description: Returns the updated theatre based on the theatre id provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Theatre'
 */
router.put("/:id", updateTheatre);

/**
 * @openapi
 * /mba/api/v1/theatres/{id}:
 *   patch:
 *     tags:
 *       - Theatres
 *     description: Update a specific theatre based on the id of the theatre provided.
 *     requestBody:
 *       description: Data needed to update a new theatre you can add one or more field its a patch request.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Theatre"
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Numeric ID of the theatre to update
 *     responses:
 *       200:
 *         description: Returns the updated theatre based on the theatre id provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Theatre'
 */
router.patch("/:id", updateTheatre);

/**
 * @openapi
 * /mba/api/v1/theatres/{id}:
 *   delete:
 *     tags:
 *       - Theatres
 *     description: Delete a specific theatre based on the id of the theatre provided.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Numeric ID of the theatre to delete
 *     responses:
 *       200:
 *         description: Returns the deleted theatre based on the theatre id provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Theatre'
 */
router.delete("/:id", deleteTheatre);

export const theatreRouter = router;
