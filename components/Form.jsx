import { useState } from "react";

export default function EvaluationForm() {
  const [name, setName] = useState("");

  const handleName = (name) => {
    setName(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.name.value;

    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={(event) => handleName(event.currentTarget.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
