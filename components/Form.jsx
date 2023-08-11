import { useState } from "react";
import styled from "styled-components";
import defaultCategories from "./utils/defaultCategories";
import CategoryCard from "./CategoryCard/CategoryCard";

export default function EvaluationForm() {
  const [name, setName] = useState("");
  const [groupWorkRating, setGroupWorkRating] = useState("");
  const [selectedGroupWorkDescription, setSelectedGroupWorkDescription] =
    useState("");

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
        onChange={(event) => setName(event.currentTarget.value)}
        value={name}
      />
      {defaultCategories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          name={name}
          rating={groupWorkRating}
          onChangeRating={setGroupWorkRating}
          selectedDescription={selectedGroupWorkDescription}
          onChangeDescription={setSelectedGroupWorkDescription}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
