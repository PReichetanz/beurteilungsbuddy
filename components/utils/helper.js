export function replaceName(description, name, gender) {
  let replacedDescription = description.replace("X", name);
  if (gender === "male") {
    return replacedDescription;
  } else {
    const femaleReplacedDescription = replacedDescription
      .replaceAll(/\ber\b/g, "sie")
      .replaceAll(/\bseiner\b/g, "ihrer")
      .replaceAll(/\bihm\b/g, "ihr")
      .replaceAll(/\bihn\b/g, "sie")
      .replaceAll(/\bseinen\b/g, "ihren");
    return femaleReplacedDescription;
  }
}

export function getTextToCopy(name, selectedEvaluations) {
  let textToCopy = "";

  const filteredSelectedEvaluations = selectedEvaluations.filter(
    (evaluation) => evaluation.selectedDescription !== null
  );

  if (name && filteredSelectedEvaluations.length > 0) {
    const descriptions = filteredSelectedEvaluations.map(
      (evaluation) => evaluation.selectedDescription
    );
    const allEvaluations = descriptions.join("\n");

    textToCopy = `Beurteilung von ${name}\n
    ${allEvaluations}`;
    return textToCopy;
  } else {
    return textToCopy;
  }
}
