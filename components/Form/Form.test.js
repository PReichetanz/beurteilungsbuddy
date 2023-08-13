import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form.jsx";
import defaultCategories from "../utils/defaultCategories.js";

const exampleSelectedEvaluations = [
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

describe("Form component", () => {
  // Display the correct things at the beginning
  // Current problem: exampleSelectedEvaluations.find() does not work
  // properly when given to the CategoryCard and then to the
  // Rating component

  test.skip("renders all elements of the general information fieldset", () => {
    render(<Form selectedEvaluations={exampleSelectedEvaluations} />);
    const generalInformationLegend = screen.getByText(/Allgemeine Daten/i);
    const studentNameInput = screen.getByLabelText(/Name:/i);
    const maleGenderInput = screen.getByLabelText(/männlich/i);
    const femaleGenderInput = screen.getByLabelText(/weiblich/i);

    expect(generalInformationLegend).toBeInTheDocument();
    expect(studentNameInput).toBeInTheDocument();
    expect(maleGenderInput).toBeInTheDocument();
    expect(femaleGenderInput).toBeInTheDocument();
  });

  test.skip("renders the correct number of categories", () => {
    render(<Form selectedEvaluations={exampleSelectedEvaluations} />);

    const categoryCards = screen.getAllByTestId(/category-card/i);

    expect(categoryCards).toHaveLength(defaultCategories.length);
  });

  test.skip("renders the 'Zusammenfassen' button", () => {
    render(<Form selectedEvaluations={exampleSelectedEvaluations} />);

    const submitButton = screen.getByRole("button", {
      name: /Zusammenfassen/i,
    });

    expect(submitButton).toBeInTheDocument();
  });

  // Submitting the form and checking following steps

  test.skip("submits only with name and gender chosen", async () => {
    const mockedSubmit = jest.fn((event) => event.preventDefault());
    const user = userEvent.setup();

    render(
      <Form
        selectedEvaluations={exampleSelectedEvaluations}
        handleSubmit={mockedSubmit}
      />
    );
    const submitButton = screen.getByRole("button", {
      name: /Zusammenfassen/i,
    });

    await user.click(submitButton);

    expect(mockedSubmit).not.toHaveBeenCalled();

    const studentNameInput = screen.getByLabelText(/Name:/i);
    const maleGenderInput = screen.getByLabelText(/männlich/i);

    await user.type(studentNameInput, "Max");
    await user.click(maleGenderInput);

    await user.click(submitButton);

    expect(mockedSubmit).toHaveBeenCalled();
  });
});
