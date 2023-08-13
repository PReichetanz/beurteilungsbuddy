import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryCard from "./CategoryCard";

const mockHandleRatingClick = jest.fn();
const mockHandleEvaluationClick = jest.fn();

const mockCategory = {
  name: "Category Name",
  valuations: [
    {
      mark: 5,
      descriptions: ["Description 1", "Description 2"],
    },
    {
      mark: 4,
      descriptions: ["Description 3", "Description 4"],
    },
  ],
};

const mockName = "John Doe";
const mockGender = "male";

const mockEvaluationsOfSelectedCategory = {
  selectedMark: 5,
  selectedDescription: "Description 1",
};

describe("CategoryCard Component", () => {
  test("displays the category name and active evaluation description", () => {
    render(
      <CategoryCard
        category={mockCategory}
        name={mockName}
        gender={mockGender}
        evaluationsOfSelectedCategory={mockEvaluationsOfSelectedCategory}
        handleRatingClick={mockHandleRatingClick}
        handleEvaluationClick={mockHandleEvaluationClick}
      />
    );

    const categoryNameElement = screen.getByText(mockCategory.name);
    expect(categoryNameElement).toBeInTheDocument();

    const activeDescriptionElement = screen.getByRole("button", {
      name: mockEvaluationsOfSelectedCategory.selectedDescription,
    });

    expect(activeDescriptionElement).toBeInTheDocument();
  });

  test("calls handleEvaluationClick when an evaluation button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <CategoryCard
        category={mockCategory}
        name={mockName}
        gender={mockGender}
        evaluationsOfSelectedCategory={mockEvaluationsOfSelectedCategory}
        handleRatingClick={mockHandleRatingClick}
        handleEvaluationClick={mockHandleEvaluationClick}
      />
    );

    const evaluationButtonElement = screen.getByRole("button", {
      name: /Description 2/i,
    });
    await user.click(evaluationButtonElement);

    expect(mockHandleEvaluationClick).toHaveBeenCalledWith(
      "Description 2",
      mockCategory.name
    );
  });

  test("calls handleRatingClick when a rating button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <CategoryCard
        category={mockCategory}
        name={mockName}
        gender={mockGender}
        evaluationsOfSelectedCategory={mockEvaluationsOfSelectedCategory}
        handleRatingClick={mockHandleRatingClick}
        handleEvaluationClick={mockHandleEvaluationClick}
      />
    );

    const ratingButtonElement = screen.getByRole("button", { name: /4/i });
    await user.click(ratingButtonElement);

    expect(mockHandleRatingClick).toHaveBeenCalledWith(4, mockCategory.name);
  });
});
