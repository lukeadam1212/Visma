import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// style
const StyledInput = styled.input`
  height: 2rem;
  width: 20rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.6rem;
  border: none;
  padding-left: 1rem;
  z-index: 4;
  margin: 1rem 0;
  ::placeholder {
    color: #ccba8d;
  }
`;

const Input = ({ placeholder, type, action }) => {
  return (
    <StyledInput placeholder={placeholder} type={type} onChange={action} />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.func,
};

export default Input;
