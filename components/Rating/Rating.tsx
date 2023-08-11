import React from "react";
import styled from "styled-components";
import RatingButton from "../RatingButton/RatingButton";

type RatingProps = {
  selectedrating: number;
  onRatingClick: (rate: number) => void;
};

export default function Rating({
  selectedrating,
  onRatingClick,
}: RatingProps): JSX.Element {
  function handleClick(rating: number) {
    onRatingClick(rating);
  }

  return (
    <RatingContainer>
      <RatingButton
        handleClick={handleClick}
        selectedrating={selectedrating}
        buttonrating={5}
      >
        5
      </RatingButton>
      <RatingButton
        handleClick={handleClick}
        selectedrating={selectedrating}
        buttonrating={4}
      >
        4
      </RatingButton>
      <RatingButton
        handleClick={handleClick}
        selectedrating={selectedrating}
        buttonrating={3}
      >
        3
      </RatingButton>
      <RatingButton
        handleClick={handleClick}
        selectedrating={selectedrating}
        buttonrating={2}
      >
        2
      </RatingButton>
      <RatingButton
        handleClick={handleClick}
        selectedrating={selectedrating}
        buttonrating={1}
      >
        1
      </RatingButton>
    </RatingContainer>
  );
}

interface RatingButton {
  selectedrating: number;
}

const RatingContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: var(--color-background-dark);
`;
