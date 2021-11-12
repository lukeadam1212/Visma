import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// image
import logo from "../../assets/images/logo.jpg";

const StyledHeader = styled.header`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
  img {
    height: 2rem;
  }
  .nav {
    list-style: none;
    display: flex;
    a {
      text-decoration: none;
      color: white;
      margin: 0 2rem;
      :hover {
        color: orangered;
      }
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header-left">
        <img src={logo} alt="" />
      </div>
      <nav className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-jokes">All Jokes</Link>
        </li>
        <li>
          <Link to="/post-joke">Post a Joke</Link>
        </li>
        <li>
          <Link to="/filter-jokes">Filter Jokes</Link>
        </li>
        <li>
          <Link to="/single-joke">Single Joke</Link>
        </li>
      </nav>
    </StyledHeader>
  );
};
