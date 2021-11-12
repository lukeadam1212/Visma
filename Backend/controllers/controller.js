import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import Joke from "./models/jokeModel.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

module.exports.get;
