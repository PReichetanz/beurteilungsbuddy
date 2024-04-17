import GlobalStyle from "../styles";
import { useState } from "react";
import { useImmer } from "use-immer";
import { AppProps } from "next/app";
import defaultCategories from "../components/utils/defaultCategories";

interface Category {
  name: string;
  selectedMark: number | null;
  selectedDescription: string | null;
}

const initialCategories: Category[] = defaultCategories.map((category) => ({
  name: category.name,
  selectedMark: null,
  selectedDescription: null,
}));

export default function App({ Component, pageProps }) {
  const [studentName, setStudentName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [selectedEvaluations, updateSelectedEvaluations] =
    useImmer<Category[]>(initialCategories);
  const [isSummaryChosen, setIsSummaryChosen] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSummaryChosen(true);
  };

  const handleReset = () => {
    setStudentName("");
    setGender("");
    updateSelectedEvaluations(initialCategories);
    setIsSummaryChosen(false);
  };

  const handleStudentNameChange = (newName: string) => {
    setStudentName(newName);
  };

  const handleGenderChange = (newGender: string) => {
    setGender(newGender);
  };

  const handleRatingChange = (rating: number, categoryToUpdate: string) => {
    updateSelectedEvaluations((draft) => {
      const category = draft.find(
        (category) => category.name === categoryToUpdate
      );
      category.selectedMark = rating;
    });
  };

  const handleEvaluationChange = (
    description: string,
    categoryToUpdate: string
  ) => {
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
