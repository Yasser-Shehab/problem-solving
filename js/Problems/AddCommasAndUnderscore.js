//Add Commas and Underscores
function addCommasAndUnderscore(number) {
  const numberString = number.toLocaleString().split("");
  numberString[numberString.length - 4] = "_";

  return numberString.join("");
}

console.log(addCommasAndUnderscore(3254354243));
