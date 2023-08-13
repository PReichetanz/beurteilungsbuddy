import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RatingButton from "./RatingButton"; // Update the path to the actual location of the component

const mockHandleClick = jest.fn();

describe("RatingButton Component", () => {
  test("displays the component correctly with selected rating", () => {
    const selectedRating = 3;
    const buttonRating = 3;
    const buttonText = "3";

    render(
      <RatingButton
        selectedrating={selectedRating}
        buttonrating={buttonRating}
        handleClick={mockHandleClick}
      >
        {buttonText}
      </RatingButton>
    );

    const ratingButtonElement = screen.getByRole("button", {
      name: buttonText,
    });

    expect(ratingButtonElement).toBeInTheDocument();
    expect(ratingButtonElement).toHaveStyle(
      "background: var(--color-button-hover)"
    );
  });

  test("displays the component correctly with unselected rating", () => {
    const selectedRating = 2;
    const buttonRating = 3;
    const buttonText = "3";

    render(
      <RatingButton
        selectedrating={selectedRating}
        buttonrating={buttonRating}
        handleClick={mockHandleClick}
      >
        {buttonText}
      </RatingButton>
    );

    const ratingButtonElement = screen.getByRole("button", {
      name: buttonText,
    });

    expect(ratingButtonElement).toBeInTheDocument();
    expect(ratingButtonElement).toHaveStyle("background: var(--color-button)");
  });

  test("calls the handleClick function with correct rating when clicked", async () => {
    const user = userEvent.setup();
    const selectedRating = 2;
    const buttonRating = 3;
    const buttonText = "3";

    render(
      <RatingButton
        selectedrating={selectedRating}
        buttonrating={buttonRating}
        handleClick={mockHandleClick}
      >
        {buttonText}
      </RatingButton>
    );

    const ratingButtonElement = screen.getByRole("button", {
      name: buttonText,
    });

    await user.click(ratingButtonElement);

    expect(mockHandleClick).toHaveBeenCalledWith(buttonRating);
  });
});
