import { useState } from "react";
import styled from "styled-components";
import { useImmer } from "use-immer";
import defaultCategories from "./utils/defaultCategories";
import CategoryCard from "./CategoryCard/CategoryCard";

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

  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setGender("");
    updateSelectedEvaluations(initialCategories);
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
    <form onSubmit={handleSubmit}>
      <fieldset>
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
      </fieldset>
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
      <button type="submit">Submit</button>
    </form>
  );
}
