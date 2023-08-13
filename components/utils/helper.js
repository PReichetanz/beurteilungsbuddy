export function replaceName(description, name, gender) {
  let replacedDescription = description.replace(/\bX\b/g, name);

  if (gender === "male") {
    return replacedDescription;
  } else {
    const femaleReplacedDescription = replacedDescription
      .replace(/\ber\b/g, "sie")
      .replace(/\bseiner\b/g, "ihrer")
      .replace(/\bihm\b/g, "ihr")
      .replace(/\bihn\b/g, "sie")
      .replace(/\bseine\b/g, "ihre")
      .replace(/\bseinen\b/g, "ihren");

    // Additional replacements for sentence structure
    const sentenceReplacements = femaleReplacedDescription
      .replace(/\bEr\b/g, "Sie")
      .replace(/\bSein\b/g, "Ihr")
      .replace(/\bIhm\b/g, "Ihr")
      .replace(/\bIhn\b/g, "Sie")
      .replace(/\bSeine\b/g, "Ihre")
      .replace(/\bSeinen\b/g, "Ihren");

    return sentenceReplacements;
  }
}

export function getTextToCopy(studentName, selectedEvaluations) {
  let textToCopy = "";

  const filteredSelectedEvaluations = selectedEvaluations.filter(
    (evaluation) => evaluation.selectedDescription !== null
  );

  if (studentName && filteredSelectedEvaluations.length > 0) {
    const descriptions = filteredSelectedEvaluations.map(
      (evaluation) => evaluation.selectedDescription
    );
    const allEvaluations = descriptions.join("\n");

    textToCopy = `Beurteilung von ${studentName}\n
    ${allEvaluations}`;
    return textToCopy;
  } else {
    return textToCopy;
  }
}
