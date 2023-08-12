import styled from "styled-components";
import { getTextToCopy } from "../utils/helper";
import Button from "../Button/Button";
import CopyButton from "../CopyButton/CopyButton";

export default function Summary({ selectedEvaluations, onReset, studentName }) {
  return (
    <SummaryContainer>
      <h2>Zusammenfassung</h2>
      {selectedEvaluations.map((evaluation) => (
        <p key={`${evaluation.name}`}>{evaluation.selectedDescription}</p>
      ))}
      <ButtonSection>
        <ResetButton type="button" onClick={onReset}>
          Zurücksetzen
        </ResetButton>
        <CopyButton
          copyText={getTextToCopy(studentName, selectedEvaluations)}
        />
      </ButtonSection>
    </SummaryContainer>
  );
}

const ButtonSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding-inline: 0.5rem;
  align-items: stretch;
`;

const ResetButton = styled(Button)`
  max-width: 40%;
`;

const SummaryContainer = styled.section`
  max-width: 90vw;
`;
