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
