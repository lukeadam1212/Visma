import React from "react";
import styled from "styled-components";

// style
const StyledHomePage = styled.main`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: #9ca0b1;
  }

  .wrapper {
    text-align: center;
    h1 {
      color: #fff;
      font-size: 92px;
      font-weight: 700;
      background: linear-gradient(
        to right,
        #095fab 10%,
        #25abe8 50%,
        #57d75b 60%
      );
      background-size: auto auto;
      background-clip: border-box;
      background-size: 200% auto;
      color: #fff;
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textclip 1.5s linear infinite;
      display: inline-block;
    }
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

export const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="wrapper">
        <h1>C.reate L.ist F.ilter</h1>
        <h2>Jokes</h2>
      </div>
    </StyledHomePage>
  );
};
