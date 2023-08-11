import styled from "styled-components";
import Rating from "../Rating/Rating";
import { replaceName } from "../utils/helper";

export default function CategoryCard({
  category,
  name,
  gender,
  rating,
  onChangeRating,
  selectedDescription,
  onChangeDescription,
}) {
  return (
    <fieldset>
      <legend>{category.name}</legend>
      <Rating selectedrating={rating} onRatingClick={onChangeRating} />

      {category.valuations.map((valuation, key) =>
        valuation.mark === rating
          ? valuation.descriptions.map((description) => (
              <EvaluationButton
                key={`${description}-${key}`}
                type="button"
                onClick={() =>
                  onChangeDescription(replaceName(description, name, gender))
                }
                isActive={
                  selectedDescription === replaceName(description, name, gender)
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
