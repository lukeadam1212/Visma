import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../components/atoms/Button";

const StyledAllJokesPage = styled.main`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .top {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50;
    left: 50;
    padding: 2rem;
    color: #91919133;
    width: 20rem;
    height: 2rem;
    z-index: 1;
    opacity: 0.2;
    h1 {
      font-size: 20rem;
      z-index: 1;
    }
  }
  .button-container {
    z-index: 3;
  }
  table {
    width: 55rem;
    height: 50vh;
    th {
      font-size: 2rem;
      opacity: 0.4;
    }
    tr {
      height: 3rem;
      .orange {
        color: orange;
      }
    }
  }
`;

const AllJokesPage = () => {
  // hooks
  // state

  const [jokes, setJokes] = useState([]);

  // side effects
  const listAllJokes = () => {
    axios
      .get("http://localhost:5000/api/jokes")
      .then((res) => setJokes(res.data));
  };
  return (
    <StyledAllJokesPage>
      <div className="top">
        <h1>All Jokes</h1>
      </div>
      <div className="button-container">
        <Button action={listAllJokes} text="Show me all jokes" type="submit" />
      </div>
      <table>
        <thead>
          <tr>
            <th>JOKE</th>
            <th>PUNCHLINE</th>
          </tr>
        </thead>
        {jokes.map((joke) => (
          <tbody key={joke._id}>
            <tr>
              <td style={{ textAlign: "left" }} className="orange">
                {joke.joke}
              </td>
              <td style={{ textAlign: "right" }}>{joke.punchline}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </StyledAllJokesPage>
  );
};

export default AllJokesPage;
