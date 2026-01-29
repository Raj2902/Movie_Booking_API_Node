import express from "express";
import "dotenv/config";
const app = express(); //express app object
import mongoose from "mongoose";
// import { Movie } from "./models/movie.model.ts";

//configuring incoming body request
app.use(express.json());

app.get("/home", (req, res) => {
  console.log("Hitting/home");
  return res.json({ sucess: true, message: "Fetched home" });
});

app.listen(process.env.PORT, () => {
  //this callback gets executed, once we successfully start the server on the given port
  console.log(`Server started on Port ${process.env.PORT}`);

  mongoose
    .connect(process.env.DB_URL as string) //connects to the mongo server
    .then(async () => {
      console.log("Connected!");
      // await Movie.create({
      //   name: "Inception",
      //   description:
      //     "A skilled thief who steals secrets through dream-sharing technology is given a chance to erase his criminal past by planting an idea into a target's subconscious.",
      //   casts: [
      //     "Leonardo DiCaprio",
      //     "Joseph Gordon-Levitt",
      //     "Elliot Page",
      //     "Tom Hardy",
      //     "Ken Watanabe",
      //   ],
      //   trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      //   language: "English",
      //   releaseDate: "2010-07-16",
      //   director: "Christopher Nolan",
      //   releaseStatus: "RELEASED",
      // });
    })
    .catch((err) => console.log(err));
});
