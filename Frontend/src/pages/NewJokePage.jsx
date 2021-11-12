import React from "react";
import styled from "styled-components";
import NewJokeForm from "../components/molecules/NewJokeForm";

// style
const StyledNewJokePage = styled.main`
  height: 90vh;
  display: flex;
  align-items: center;
  .bg-text {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50;
    left: 27%;

    color: #91919155;
    width: 90vh;
    height: 2rem;
    z-index: 1;
    opacity: 0.2;
    h2 {
      font-size: 20rem;
    }
  }
`;

const NewJokePage = () => {
  return (
    <StyledNewJokePage>
      <div className="bg-text">
        <h2>Add new joke</h2>
      </div>
      <NewJokeForm />
    </StyledNewJokePage>
  );
};

export default NewJokePage;
