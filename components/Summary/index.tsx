import styled from "styled-components";
import { getTextToCopy } from "../utils/helper";
import Button from "../Button/Button";
import CopyButton from "../CopyButton/CopyButton";

interface Evaluation {
  name: string;
  selectedDescription: string | null;
}

interface SummaryProps {
  selectedEvaluations: Evaluation[];
  onReset: () => void;
  studentName: string;
}

export default function Summary({
  selectedEvaluations,
  onReset,
  studentName,
}: SummaryProps) {
  const evalutionsWithSelectedDescriptions = selectedEvaluations.filter(
    (evaluation) => evaluation.selectedDescription !== null
  );
  return (
    <SummaryContainer>
      <h2>Zusammenfassung</h2>
      {evalutionsWithSelectedDescriptions.map((evaluation) => (
        <p key={`${evaluation.name}`}>{evaluation.selectedDescription}</p>
      ))}
      <ButtonSection>
        <ResetButton type="button" onClick={onReset} data-testid="reset-button">
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
  align-self: auto;
`;

const ResetButton = styled(Button)`
  max-width: 40%;
`;

const SummaryContainer = styled.section`
  max-width: 70%;
  margin-bottom: 1rem;
  padding-inline: 1rem;
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 900px) {
    max-width: 90%;
  }
`;
