function removeACharacterFromWord(word, character) {
  const wordArray = word.split("");
  const finalArray = [];

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] !== character) {
      finalArray.push(wordArray[i]);
    }
  }
  return finalArray.join("");
}

console.log(removeACharacterFromWord("@W@i@n", "@"));
