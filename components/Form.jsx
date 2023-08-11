import { useState } from "react";
import styled from "styled-components";
import defaultCategories from "./utils/defaultCategories";
import Rating from "./Rating/Rating";

export default function EvaluationForm() {
  const [name, setName] = useState("");
  const [groupWorkRating, setGroupWorkRating] = useState("");
  const [selectedGroupWorkDescription, setSelectedGroupWorkDescription] =
    useState("");

  const handleName = (name) => {
    setName(name);
  };

  function replaceName(description) {
    return description.replace("X", name);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.name.value;

    setName("");
    setGroupWorkRating("");
    setSelectedGroupWorkDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={(event) => handleName(event.currentTarget.value)}
        value={name}
      />
      {defaultCategories.map((category) => (
        <fieldset key={category.name}>
          <legend>{category.name}</legend>
          <Rating
            selectedrating={groupWorkRating}
            onRatingClick={setGroupWorkRating}
          />

          {category.valuations.map((valuation, key) =>
            valuation.mark === groupWorkRating
              ? valuation.descriptions.map((description) => (
                  <EvaluationButton
                    key={`${description}-${key}`}
                    type="button"
                    onClick={() =>
                      setSelectedGroupWorkDescription(replaceName(description))
                    }
                    isActive={
                      selectedGroupWorkDescription === replaceName(description)
                        ? true
                        : false
                    }
                  >
                    {replaceName(description)}
                  </EvaluationButton>
                ))
              : ""
          )}
        </fieldset>
      ))}
      <button type="submit">Submit</button>
    </form>
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
