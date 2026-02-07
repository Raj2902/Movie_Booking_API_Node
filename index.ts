import express from "express";
import "dotenv/config";
const app = express(); //express app object
import mongoose from "mongoose";
// import { Movie } from "./models/movie.model.ts";
import { movieRouter } from "./routes/movie.routes.ts";
import { baseRoute } from "./libs/constants.ts";
import { errorHandler } from "./middlewares/errorHandler.ts";

//configuring incoming body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//defining the routes
app.use(`${baseRoute}/movies`, movieRouter);

//sort of a testing api that the apis of the server are working
app.get("/home", (req, res) => {
  console.log("Hitting/home");
  return res.json({ sucess: true, message: "Fetched home" });
});

//the global error handler must come after all the routes
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  //this callback gets executed, once we successfully start the server on the given port
  console.log(`Server started on Port ${process.env.PORT}`);

  mongoose
    .connect(process.env.DB_URL as string) //connects to the mongo server
    .then(async () => {
      console.log("Connected!");
    })
    .catch((err) => console.log(err));
});
