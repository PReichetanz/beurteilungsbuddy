import styled from "styled-components";
import defaultCategories from "../utils/defaultCategories";
import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../Button/Button";
import Summary from "../Summary";

export default function EvaluationForm({
  studentName,
  gender,
  isSummaryChosen,
  selectedEvaluations,
  handleStudentNameChange,
  handleGenderChange,
  handleRatingChange,
  handleEvaluationChange,
  handleSubmit,
  handleReset,
}) {
  return (
    <FormContainer>
      <Form aria-label="Daten für Beurteilung eingeben" onSubmit={handleSubmit}>
        <GeneralInfoContainer>
          <legend>Allgemeine Daten</legend>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(event) =>
              handleStudentNameChange(event.currentTarget.value)
            }
            value={studentName}
            required
          />
          <label htmlFor="male">männlich</label>
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            onChange={(event) => handleGenderChange(event.target.value)}
            required
          />
          <label htmlFor="female">weiblich</label>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            onChange={(event) => handleGenderChange(event.target.value)}
            required
          />
        </GeneralInfoContainer>
        {defaultCategories.map((category) => (
          <CategoryCard
            key={category.name}
            category={category}
            name={studentName}
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
          studentName={studentName}
        />
      )}
    </FormContainer>
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
  max-width: 500px;
  flex: 1;
`;

const FormContainer = styled.article`
  min-width: 375px;
  height: 100%;
  display: grid;
  justify-items: center;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

const GeneralInfoContainer = styled.fieldset`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;
