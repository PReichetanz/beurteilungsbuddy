import type { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode;
};

const Button = styled.button<ButtonProps>`
  background: var(--color-button);
  border-radius: 0.5rem;
  border: 1px solid var(--color-stroke);
  font-weight: 700;
  padding: 0.5rem;
  width: 90%;
  margin: auto;
  &:hover {
    background: var(--color-button-hover);
  }
`;

export default Button;
