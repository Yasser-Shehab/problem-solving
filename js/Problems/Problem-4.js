//Check For Duplicates and Remove Them

//Solution
function checkForDuplicate(words) {
  const wordsArray = words.split(" ");
  const noDuplicate = [];
  let wordsObject = {};
  for (let i = 0; i < wordsArray.length; i++) {
    if (!wordsObject[wordsArray[i]]) {
      wordsObject[wordsArray[i]] = true;
      noDuplicate.push(wordsArray[i]);
    }
  }
  return noDuplicate.join(" ");
}

console.log(checkForDuplicate("My name is Yasser Yasser"));
