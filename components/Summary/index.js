import styled from "styled-components";
import { getTextToCopy } from "../utils/helper";
import Button from "../Button/Button";
import CopyButton from "../CopyButton/CopyButton";

export default function Summary({ selectedEvaluations, onReset }) {
  return (
    <section>
      <h2>Zusammenfassung</h2>
      {selectedEvaluations.map((evaluation) => (
        <p key={`${evaluation.name}`}>{evaluation.selectedDescription}</p>
      ))}
      <ButtonSection>
        <ResetButton type="button" onClick={onReset}>
          Zurücksetzen
        </ResetButton>
        <CopyButton copyText={getTextToCopy(name, selectedEvaluations)} />
      </ButtonSection>
    </section>
  );
}

const ButtonSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding-inline: 1rem;
`;

const ResetButton = styled(Button)`
  max-width: 30%;
`;
