import express from "express";
import "dotenv/config";
const app = express(); //express app object
import mongoose from "mongoose";

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
    .then(() => console.log("Connected!"))
    .catch((err) => console.log(err));
});
