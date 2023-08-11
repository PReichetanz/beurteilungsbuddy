import { useState } from "react";
import styled from "styled-components";
import { useImmer } from "use-immer";
import defaultCategories from "../utils/defaultCategories";
import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../Button/Button";
import Summary from "../Summary";

const initialCategories = defaultCategories.map((category) => ({
  name: category.name,
  selectedMark: null,
  selectedDescription: null,
}));

export default function EvaluationForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [selectedEvaluations, updateSelectedEvaluations] =
    useImmer(initialCategories);
  const [isSummaryChosen, setIsSummaryChosen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSummaryChosen(true);
  };

  const handleReset = () => {
    setName("");
    setGender("");
    updateSelectedEvaluations(initialCategories);
    setIsSummaryChosen(false);
  };

  const handleRatingChange = (rating, categoryToUpdate) => {
    updateSelectedEvaluations((draft) => {
      const category = draft.find(
        (category) => category.name === categoryToUpdate
      );
      category.selectedMark = rating;
    });
  };

  const handleEvaluationChange = (description, categoryToUpdate) => {
    updateSelectedEvaluations((draft) => {
      const category = draft.find(
        (category) => category.name === categoryToUpdate
      );
      category.selectedDescription = description;
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <GeneralInfoContainer>
          <legend>Allgemeine Daten</legend>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(event) => setName(event.currentTarget.value)}
            value={name}
          />
          <label htmlFor="male">männlich</label>
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            onChange={(event) => setGender(event.target.value)}
          />
          <label htmlFor="female">weiblich</label>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            onChange={(event) => setGender(event.target.value)}
          />
        </GeneralInfoContainer>
        {defaultCategories.map((category) => (
          <CategoryCard
            key={category.name}
            category={category}
            name={name}
            gender={gender}
            evaluationsOfSelectedCategory={selectedEvaluations.find(
              (evaluation) => evaluation.name === category.name
            )}
            handleRatingClick={handleRatingChange}
            handleEvaluationClick={handleEvaluationChange}
          />
        ))}
        <Button type="submit">Zusammenfassen</Button>
      </Form>

      {isSummaryChosen && (
        <Summary
          selectedEvaluations={selectedEvaluations}
          onReset={handleReset}
        />
      )}
    </>
  );
}

const Form = styled.form`
  background: var(--color-background-light);
  color: var(--color-text-dark);
  border: 1px solid var(--color-stroke);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const GeneralInfoContainer = styled.fieldset`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;
