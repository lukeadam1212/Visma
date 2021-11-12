import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #ff9900;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        {new Date().getFullYear()} &copy; All rights reserved &nbsp;
        <span>WebDev I'm</span>
      </p>
    </StyledFooter>
  );
};
