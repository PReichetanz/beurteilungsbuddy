import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Rating from "./Rating"; // Update the path to the actual location of the component

const mockOnRatingClick = jest.fn();

describe("Rating Component", () => {
  test("displays the component with correct styling for rating 3", () => {
    const selectedRating = 3;
    const categoryName = "Category";
    const buttonRating = 3;

    render(
      <Rating
        selectedrating={selectedRating}
        onRatingClick={mockOnRatingClick}
        categoryName={categoryName}
      />
    );

    // Check for the correct numbers of rating buttons
    const allRatingButtons = screen.getAllByRole("button");

    expect(allRatingButtons).toHaveLength(5);

    // Check for the selected rating button
    const highlightedRatingButton = screen.getByRole("button", { name: /3/i });

    expect(highlightedRatingButton).toHaveStyle(
      "background: var(--color-button-hover)"
    );

    // check for the correct number of not selected rating buttons
    const notSelectedRatingButtons = screen.getAllByRole("button", {
      name: /(?!3)\d+/i,
    });

    expect(notSelectedRatingButtons).toHaveLength(4);
  });

  test("calls the onRatingClick function with correct rating and category name when a button is clicked", async () => {
    const user = userEvent.setup();
    const selectedRating = 3;
    const categoryName = "Category";
    const buttonRating = 5;

    render(
      <Rating
        selectedrating={selectedRating}
        onRatingClick={mockOnRatingClick}
        categoryName={categoryName}
      />
    );

    const ratingButtonElement = screen.getByText(buttonRating.toString());

    await user.click(ratingButtonElement);

    expect(mockOnRatingClick).toHaveBeenCalledWith(buttonRating, categoryName);
  });
});
