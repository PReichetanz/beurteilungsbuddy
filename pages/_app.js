import GlobalStyle from "../styles";
import { useState } from "react";
import { useImmer } from "use-immer";
import defaultCategories from "../components/utils/defaultCategories";

const initialCategories = defaultCategories.map((category) => ({
  name: category.name,
  selectedMark: null,
  selectedDescription: null,
}));

export default function App({ Component, pageProps }) {
  const [studentName, setStudentName] = useState("");
  const [gender, setGender] = useState("");
  const [selectedEvaluations, updateSelectedEvaluations] =
    useImmer(initialCategories);
  const [isSummaryChosen, setIsSummaryChosen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSummaryChosen(true);
  };

  const handleReset = () => {
    setStudentName("");
    setGender("");
    updateSelectedEvaluations(initialCategories);
    setIsSummaryChosen(false);
  };

  const handleStudentNameChange = (newName) => {
    setStudentName(newName);
  };

  const handleGenderChange = (newGender) => {
    setGender(newGender);
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
      <GlobalStyle />
      <Component
        {...pageProps}
        studentName={studentName}
        gender={gender}
        isSummaryChosen={isSummaryChosen}
        selectedEvaluations={selectedEvaluations}
        handleStudentNameChange={handleStudentNameChange}
        handleGenderChange={handleGenderChange}
        handleRatingChange={handleRatingChange}
        handleEvaluationChange={handleEvaluationChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </>
  );
}
