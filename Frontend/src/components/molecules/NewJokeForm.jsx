import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../atoms/Button";

const StyledForm = styled.form`
  width: 40rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  z-index: 1;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  .form-field {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 1.3rem;
  }
  input {
    margin: 1rem 0;
    height: 2rem;
    border-radius: 0.4rem;
    border: 1px solid black;
    outline: none;
    padding-left: 1rem;
  }

  button {
    height: 2rem;
    width: 14rem;
    margin: 0 auto;
    margin-top: 3rem;
    cursor: pointer;
  }
`;
const NewJokeForm = () => {
  // hooks
  // state
  const [id, setId] = useState(0);
  const [joke, setJoke] = useState("");
  const [punchline, setPunchline] = useState("");

  // side effect
  useEffect(() => {
    setId(Math.floor(Math.random() * 99));
  }, []);

  // custom function

  const JOKES_ENDPOINT = "http://localhost:5000/api/jokes";

  const postJoke = async (e) => {
    e.preventDefault();

    let newJoke = {
      id: id,
      joke: joke,
      punchline: punchline,
    };

    await axios
      .post(JOKES_ENDPOINT, newJoke)
      .then((res) => {
        setJoke(joke);
        setPunchline(punchline);
        prompt("New joke added");
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <StyledForm onSubmit={postJoke}>
        <div className="form-field">
          <label>Joke</label>
          <input
            placeholder="new joke"
            value={joke}
            onInput={(e) => setJoke(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Punchline</label>
          <input
            placeholder="punchline"
            value={punchline}
            onInput={(e) => setPunchline(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          text="Submit"
          action={() => console.log("new Joke button pressed")}
        />
      </StyledForm>
    </>
  );
};

export default NewJokeForm;
