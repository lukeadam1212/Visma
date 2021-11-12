import mongoose from "mongoose";
const { Schema } = mongoose;

const jokeSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  joke: {
    type: String,
    required: true,
  },
  punchline: {
    type: String,
    required: true,
  },
});

const Joke = mongoose.model("Joke", jokeSchema);
export default Joke;
