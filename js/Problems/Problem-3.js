//Longest Word

function longestWord(sentence) {
  const sentenceArray = sentence.split(" ");
  let longestWord = sentenceArray[0];
  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length >= longestWord.length) {
      longestWord = sentenceArray[i];
    }
  }

  return longestWord;
}

console.log(longestWord("lorem ispum obrasem lmdsal loraeam"));
