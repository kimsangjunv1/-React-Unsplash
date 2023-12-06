import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: ${(props) => props.color || props.color};
  background: white;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}
`;

const Button = ({ children, color, primary }) => {
  return (
    <StyledButton color={color} primary={primary}>
      {children}
    </StyledButton>
  );
};

export default Button;
