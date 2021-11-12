import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// style
const StyledButton = styled.button`
  width: 15rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.4);
  color: #000000;
  border: 1px solid white;
  cursor: pointer;
  z-index: 5;
  :hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
  }
`;

const Button = ({ action, text, type }) => {
  return (
    <StyledButton onClick={action} type={type}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Button;
