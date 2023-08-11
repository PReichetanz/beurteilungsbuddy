export function replaceName(description, name, gender) {
  let replacedDescription = description.replace("X", name);
  if (gender === "male") {
    return replacedDescription;
  } else {
    const femaleReplacedDescription = replacedDescription
      .replaceAll(" er", " sie")
      .replaceAll(" seiner", " ihrer")
      .replaceAll(" ihm", " ihr")
      .replaceAll(" ihn", " sie")
      .replaceAll(" seinen", " ihren");
    return femaleReplacedDescription;
  }
}
