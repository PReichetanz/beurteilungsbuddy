import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Summary from "./index";

const mockSelectedEvaluations = [
  {
    name: "Arbeiten in der Gruppe",
    selectedMark: 2,
    selectedDescription: "Max arbeitete produktiv in einer Gruppe mit.",
  },
  {
    name: "Arbeitsweise",
    selectedMark: 1,
    selectedDescription: "Neue Aufträge ging Max rasch und zielstrebig an.",
  },
];

const mockOnReset = jest.fn();
const mockStudentName = "Max";

describe("Summary Component", () => {
  test("displays the component correctly with selected evaluations", () => {
    render(
      <Summary
        selectedEvaluations={mockSelectedEvaluations}
        onReset={mockOnReset}
        studentName={mockStudentName}
      />
    );

    // Check if the title is displayed
    const titleElement = screen.getByRole("heading", {
      name: /Zusammenfassung/i,
    });
    expect(titleElement).toBeInTheDocument();

    // Check if each selected evaluation description is displayed
    mockSelectedEvaluations.forEach((evaluation) => {
      const descriptionElement = screen.getByText(
        evaluation.selectedDescription
      );
      expect(descriptionElement).toBeInTheDocument();
    });

    // Check if the reset button is displayed
    const resetButtonElement = screen.getByRole("button", {
      name: /zurücksetzen/i,
    });
    expect(resetButtonElement).toBeInTheDocument();

    // Check if the copy button is displayed with the correct text
    const copyButtonElement = screen.getByText("Beurteilungen kopieren");
    expect(copyButtonElement).toBeInTheDocument();
  });

  test("calls the onReset function when reset button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Summary
        selectedEvaluations={mockSelectedEvaluations}
        onReset={mockOnReset}
        studentName={mockStudentName}
      />
    );

    const resetButtonElement = screen.getByTestId(/reset-button/i);
    await user.click(resetButtonElement);

    expect(mockOnReset).toHaveBeenCalled();
  });
});
