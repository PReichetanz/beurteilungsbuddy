import styled from "styled-components";
import Form from "../components/Form/Form";

export default function HomePage({
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
}): JSX.Element {
  return (
    <PageContainer>
      <Header>
        <h1>Beurteilungsbuddy</h1>
      </Header>
      <Main>
        <Form
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
      </Main>
      <footer></footer>
    </PageContainer>
  );
}

const Header = styled.header`
  text-align: center;
  background-color: var(--color-background-dark);
  color: var(--color-text-white);
  width: 100%;
  margin-bottom: 0.2rem;
`;

const Main = styled.main`
  grid-row: 2 / 3;
  height: auto;
  overflow-y: auto;
`;

const PageContainer = styled.div`
  height: 100vh;
  max-width: 1100px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
`;
