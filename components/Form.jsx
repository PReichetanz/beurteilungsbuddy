import { useState } from "react";
import styled from "styled-components";
import defaultCategories from "./utils/defaultCategories";
import CategoryCard from "./CategoryCard/CategoryCard";

export default function EvaluationForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [groupWorkRating, setGroupWorkRating] = useState("");
  const [selectedGroupWorkDescription, setSelectedGroupWorkDescription] =
    useState("");

  console.log(gender);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.name.value;

    setName("");
    setGroupWorkRating("");
    setSelectedGroupWorkDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Allgemeine Daten</legend>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={(event) => setName(event.currentTarget.value)}
          value={name}
        />
        <label htmlFor="male">männlich</label>
        <input
          id="male"
          type="radio"
          name="gender"
          value="male"
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="female">weiblich</label>
        <input
          id="female"
          type="radio"
          name="gender"
          value="female"
          onChange={(event) => setGender(event.target.value)}
        />
      </fieldset>
      {defaultCategories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          name={name}
          gender={gender}
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
