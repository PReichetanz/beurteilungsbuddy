import { render, screen } from "@testing-library/react";
import Form from "./Form.jsx";
import defaultCategories from "../utils/defaultCategories.js";

describe("Form component", () => {
  // Display the correct things at the beginning

  test("renders all elements of the general information fieldset", () => {
    render(<Form />);
    const generalInformationLegend = screen.getByText(/Allgemeine Daten/i);
    const studentNameInput = screen.getByLabelText(/Name:/i);
    const maleGenderInput = screen.getByLabelText(/männlich/i);
    const femaleGenderInput = screen.getByLabelText(/weiblich/i);

    expect(generalInformationLegend).toBeInTheDocument();
    expect(studentNameInput).toBeInTheDocument();
    expect(maleGenderInput).toBeInTheDocument();
    expect(femaleGenderInput).toBeInTheDocument();
  });

  test("renders the correct number of categories", () => {
    render(<Form />);

    const categoryCards = screen.getAllByTestId("category-card");

    expect(categoryCards).toHaveLength(defaultCategories.length);
  });

  test("renders the 'Zusammenfassen' button", () => {
    render(<Form />);

    const submitButton = screen.getByRole("button", {
      name: /Zusammenfassen/i,
    });

    expect(submitButton).toBeInTheDocument();
  });

  // Submitting the form and checking following steps

  test.skip("cannot be submitted without a name and gender chosen", () => {});
});
