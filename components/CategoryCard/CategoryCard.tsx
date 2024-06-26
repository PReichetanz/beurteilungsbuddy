import styled from "styled-components";
import Rating from "../Rating/Rating";
import { replaceName } from "../utils/helper";

interface Category {
  name: string;
  valuations: Array<{
    mark: number;
    descriptions: string[];
  }>;
}

interface CategoryEvaluation {
  selectedMark: number;
  selectedDescription: string | null;
}

interface CategoryCardProps {
  category: Category;
  name: string;
  gender: string;
  evaluationsOfSelectedCategory: CategoryEvaluation;
  handleRatingClick: (rate: number, categoryName: string) => void;
  handleEvaluationClick: (description: string, categoryName: string) => void;
}

export default function CategoryCard({
  category,
  name,
  gender,
  evaluationsOfSelectedCategory,
  handleRatingClick,
  handleEvaluationClick,
}: CategoryCardProps) {
  if (!evaluationsOfSelectedCategory) {
    return; // Handle the case when evaluationsOfSelectedCategory is not available
  }
  return (
    <fieldset data-testid={`category-card ${category.name}`}>
      <Legend>{category.name}</Legend>
      <Rating
        selectedrating={evaluationsOfSelectedCategory.selectedMark}
        onRatingClick={handleRatingClick}
        categoryName={category.name}
      />
      <EvaluationContainer>
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
                  $isactive={
                    evaluationsOfSelectedCategory.selectedDescription ===
                    replaceName(description, name, gender)
                      ? "true"
                      : "false"
                  }
                >
                  {replaceName(description, name, gender)}
                </EvaluationButton>
              ))
            : ""
        )}
      </EvaluationContainer>
    </fieldset>
  );
}

const EvaluationButton = styled.button<{ $isactive: string }>`
  background: inherit;
  color: inherit;
  border: none;
  font-weight: ${(props) => (props.$isactive === "true" ? "800" : "400")};
  &:hover {
    font-weight: 800;
  }
`;

const EvaluationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Legend = styled.legend`
  font-weight: 700;
`;
