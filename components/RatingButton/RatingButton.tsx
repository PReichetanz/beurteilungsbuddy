import React from "react";
import type { ReactNode } from "react";
import styled from "styled-components";

type RatingButtonProps = {
  children: ReactNode;
  handleClick: (rating: number) => void;
  selectedrating: number;
  buttonrating: number;
};

export default function RatingButton({
  children,
  handleClick,
  selectedrating,
  buttonrating,
}: RatingButtonProps): JSX.Element {
  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    handleClick(buttonrating);
  }
  return (
    <StyledRatingButton
      onClick={(event) => handleButtonClick(event)}
      selectedrating={selectedrating}
      buttonrating={buttonrating}
    >
      {children}
    </StyledRatingButton>
  );
}

interface StylingProps {
  selectedrating: number;
  buttonrating: number;
}

const StyledRatingButton = styled.button.attrs<StylingProps>((props) => ({
  selectedrating: props.selectedrating,
  buttonrating: props.buttonrating,
}))`
  background: ${(props: StylingProps) =>
    props.selectedrating === props.buttonrating
      ? "var(--color-button-hover)"
      : "var(--color-button)"};
  border-radius: 50%;
  border: 1px solid var(--color-stroke);
  font-weight: 700;
  padding: 0.5rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  &:hover {
    background: var(--color-button-hover);
  }
`;
