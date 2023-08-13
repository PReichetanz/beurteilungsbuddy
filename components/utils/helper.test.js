import { replaceName } from "./helper";
import { getTextToCopy } from "./helper";

describe("replaceName function", () => {
  test('should replace "X" with the provided name in all instances', () => {
    const description = "X ist ein guter Schüler. Die Mitschüler vertrauen X.";
    const name = "Alice";
    const gender = "female";

    const result = replaceName(description, name, gender);

    expect(result).toEqual(
      "Alice ist ein guter Schüler. Die Mitschüler vertrauen Alice."
    );
  });

  test("should replace gender-specific pronouns for male", () => {
    const description = "Sein Name ist X.";
    const name = "Bob";
    const gender = "male";

    const result = replaceName(description, name, gender);

    expect(result).toEqual("Sein Name ist Bob.");
  });

  test("should replace gender-specific pronouns for female", () => {
    const description = "Sein Name ist X.";
    const name = "Eve";
    const gender = "female";

    const result = replaceName(description, name, gender);

    expect(result).toEqual("Ihr Name ist Eve.");
  });

  test("should replace multiple instances of pronouns", () => {
    const description =
      "X arbeitet immer gut mit. Dabei spricht er seine Probleme offen an.";
    const name = "Sarah";
    const gender = "female";

    const result = replaceName(description, name, gender);

    expect(result).toEqual(
      "Sarah arbeitet immer gut mit. Dabei spricht sie ihre Probleme offen an."
    );
  });

  test("should replace gender-specific pronouns and name for female", () => {
    const description =
      "X arbeitet immer gut mit. Er vertraut dabei auf seine Stärken.";
    const name = "Dana";
    const gender = "female";

    const result = replaceName(description, name, gender);

    expect(result).toEqual(
      "Dana arbeitet immer gut mit. Sie vertraut dabei auf ihre Stärken."
    );
  });
});

describe("getTextToCopy function", () => {
  test("should return empty string when studentName and selectedEvaluations are empty", () => {
    const studentName = "";
    const selectedEvaluations = [];

    const result = getTextToCopy(studentName, selectedEvaluations);

    expect(result).toEqual("");
  });

  test("should return empty string when studentName is empty and selectedEvaluations has no selectedDescription", () => {
    const studentName = "";
    const selectedEvaluations = [
      { selectedDescription: null },
      { selectedDescription: null },
    ];

    const result = getTextToCopy(studentName, selectedEvaluations);

    expect(result).toEqual("");
  });

  test("should return formatted text when studentName and selectedEvaluations are valid", () => {
    const studentName = "Alice";
    const selectedEvaluations = [
      { selectedDescription: "Good performance" },
      { selectedDescription: "Great improvement" },
    ];

    const result = getTextToCopy(studentName, selectedEvaluations);

    const expectedText = `Beurteilung von Alice

    Good performance
Great improvement`;

    expect(result).toEqual(expectedText);
  });

  test("should exclude evaluations with null selectedDescription from the final text", () => {
    const studentName = "Bob";
    const selectedEvaluations = [
      { selectedDescription: "Excellent work" },
      { selectedDescription: null },
      { selectedDescription: "Needs improvement" },
      { selectedDescription: null },
    ];

    const result = getTextToCopy(studentName, selectedEvaluations);

    const expectedText = `Beurteilung von Bob

    Excellent work
Needs improvement`;

    expect(result).toEqual(expectedText);
  });
});
