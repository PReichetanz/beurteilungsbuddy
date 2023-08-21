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
          <NameContainer>
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
          </NameContainer>
          <GenderContainer>
            <label htmlFor="male">
              männlich (er/ihm)
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                onChange={(event) => handleGenderChange(event.target.value)}
                required
              />
            </label>
            <label htmlFor="female">
              weiblich (sie/ihr)
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                onChange={(event) => handleGenderChange(event.target.value)}
                required
              />
            </label>
          </GenderContainer>
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
  min-width: 375px;
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

const GenderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const GeneralInfoContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: 700;
`;

const NameContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;
