import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const mockHandleStudentNameChange = jest.fn();
const mockHandleGenderChange = jest.fn();
const mockHandleRatingChange = jest.fn();
const mockHandleEvaluationChange = jest.fn();
const mockHandleSubmit = jest.fn((event) => event.preventDefault());
const mockHandleReset = jest.fn();

const mockStudentName = "John Doe";
const mockGender = "male";
const mockIsSummaryChosen = true;

const mockSelectedEvaluations = [
  {
    name: "Arbeitsweise",
    selectedMark: 5,
    selectedDescription: "Description 1",
  },
  // ... other mock evaluations
];

describe("Form Component", () => {
  test("displays the form with general information and category cards", () => {
    render(
      <Form
        studentName={mockStudentName}
        gender={mockGender}
        isSummaryChosen={mockIsSummaryChosen}
        selectedEvaluations={mockSelectedEvaluations}
        handleStudentNameChange={mockHandleStudentNameChange}
        handleGenderChange={mockHandleGenderChange}
        handleRatingChange={mockHandleRatingChange}
        handleEvaluationChange={mockHandleEvaluationChange}
        handleSubmit={mockHandleSubmit}
        handleReset={mockHandleReset}
      />
    );

    const nameInput = screen.getByLabelText("Name:");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue(mockStudentName);

    const maleRadioButton = screen.getByLabelText("männlich");
    expect(maleRadioButton).toBeInTheDocument();
    expect(maleRadioButton).toHaveAttribute("value", "male");

    const femaleRadioButton = screen.getByLabelText("weiblich");
    expect(femaleRadioButton).toBeInTheDocument();
    expect(femaleRadioButton).toHaveAttribute("value", "female");

    const categoryCards = screen.getAllByTestId(/category-card/i);
    expect(categoryCards).toHaveLength(mockSelectedEvaluations.length);
  });

  test("calls handleSubmit only with name and gender chosen", async () => {
    const user = userEvent.setup();
    render(
      <Form
        studentName={mockStudentName}
        gender={mockGender}
        isSummaryChosen={mockIsSummaryChosen}
        selectedEvaluations={mockSelectedEvaluations}
        handleStudentNameChange={mockHandleStudentNameChange}
        handleGenderChange={mockHandleGenderChange}
        handleRatingChange={mockHandleRatingChange}
        handleEvaluationChange={mockHandleEvaluationChange}
        handleSubmit={mockHandleSubmit}
        handleReset={mockHandleReset}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: /Zusammenfassen/i,
    });
    await user.click(submitButton);

    expect(mockHandleSubmit).not.toHaveBeenCalled();

    const studentNameInput = screen.getByLabelText(/Name:/i);
    const maleGenderInput = screen.getByLabelText(/männlich/i);

    await user.type(studentNameInput, "Max");
    await user.click(maleGenderInput);

    await user.click(submitButton);

    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  test.todo(
    "calls handleSubmit only when at least one description is selected"
  );
});
