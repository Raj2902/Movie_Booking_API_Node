import express from "express";
import "dotenv/config";
const app = express(); //express app object
import mongoose from "mongoose";
// import { Movie } from "./models/movie.model.ts";
import { movieRouter } from "./routes/movie.routes.ts";
import { baseRoute } from "./libs/constants.ts";
import { errorHandler } from "./middlewares/errorHandler.ts";
import { theatreRouter } from "./routes/theatre.route.ts";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./libs/swagger.ts";

// Swagger configuration

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//configuring incoming body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//defining the routes
app.use(`${baseRoute}/movies`, movieRouter);
app.use(`${baseRoute}/theatres`, theatreRouter);

//sort of a testing api that the apis of the server are working
app.get("/home", (req, res) => {
  console.log("Hitting/home");
  return res.json({ sucess: true, message: "Fetched home" });
});

//the global error handler must come after all the routes
app.use(errorHandler);

async function startServer() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("Connected to DB");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();
