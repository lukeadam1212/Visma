import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import Joke from "./models/jokeModel.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//! middle wares

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

//! Connecting Mongoose
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log(`Connected to mongodb`.cyan);
    //starting server
    app.listen(PORT, () => console.log(`server is running on ${PORT}`.rainbow));
  })
  .catch((err) => console.log(err));

//! routes
app.get("/", (req, res) => res.send(`API is running...`));

// GET all jokes
app.get("/api/jokes", (req, res) => {
  Joke.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//GET: get single joke based on id
app.get("/api/jokes/:id", (req, res) => {
  const jokeId = req.params.id;

  Joke.findById(jokeId)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//POST: add single joke to DB
app.post(`/api/jokes`, (req, res) => {
  const joke = new Joke(req.body);
  console.log(joke);
  joke
    .save()
    .then((data) => res.json({ message: `New joke added` }))
    .catch((err) => console.log(err));
});
