// Find The Missing Letter in the given String

//Solution One
// const alphabit = "abcdefghijklmnopqrstuvwxyz";
// function findMissingLetter(string) {
//   const stringArray = string.split("");
//   const firstLetter = stringArray[0];
//   const lastLetter = stringArray[stringArray.length - 1];
//   const slicedInput = alphabit.slice(
//     alphabit.indexOf(firstLetter),
//     alphabit.indexOf(lastLetter) + 1
//   );
//   for (let i = 0; i < slicedInput.length; i++) {
//     if (!string.includes(slicedInput[i])) {
//       return slicedInput[i];
//     }
//   }
//   return "No missing Letter in Sequence";
// }
// console.log(findMissingLetter("abcdeg"));

//Solution Two
//Best Solution
function findMissingLetterTwo(givenLetter) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const startingIndex = alpha.indexOf(givenLetter[0]);
  for (let i = 0; i < givenLetter.length; i++) {
    if (givenLetter[i] !== alpha[startingIndex + i]) {
      return alpha[startingIndex + i];
    }
  }
  return "No missing Letter in Sequence";
}

console.log(findMissingLetterTwo("xyZ"));
