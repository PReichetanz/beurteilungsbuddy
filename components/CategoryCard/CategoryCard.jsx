import styled from "styled-components";
import Rating from "../Rating/Rating";
import { replaceName } from "../utils/helper";

export default function CategoryCard({
  category,
  name,
  gender,
  evaluationsOfSelectedCategory,
  handleRatingClick,
  handleEvaluationClick,
}) {
  return (
    <fieldset>
      <legend>{category.name}</legend>
      <Rating
        selectedrating={evaluationsOfSelectedCategory.selectedMark}
        onRatingClick={handleRatingClick}
        categoryName={category.name}
      />

      {category.valuations.map((valuation, key) =>
        valuation.mark === evaluationsOfSelectedCategory.selectedMark
          ? valuation.descriptions.map((description) => (
              <EvaluationButton
                key={`${description}-${key}`}
                type="button"
                onClick={() =>
                  handleEvaluationClick(
                    replaceName(description, name, gender),
                    category.name
                  )
                }
                isActive={
                  evaluationsOfSelectedCategory.selectedDescription ===
                  replaceName(description, name, gender)
                    ? true
                    : false
                }
              >
                {replaceName(description, name, gender)}
              </EvaluationButton>
            ))
          : ""
      )}
    </fieldset>
  );
}

const EvaluationButton = styled.button`
  background: inherit;
  color: inherit;
  border: none;
  font-weight: ${(props) => (props.isActive ? "800" : "400")};
  &:hover {
    font-weight: 800;
  }
`;
