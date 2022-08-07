function lettersOnly(str) {
  return str.replace(/[^0-9a-z]/gi, "").toLowerCase();

  //or return str.match(/[a-z]/gi).join('');
  //or return str.replace(/[^a-z]/gi,"");
}

function palindrome(str) {
  let removedNonAlphaNumeric = lettersOnly(str);
  let stringArray = removedNonAlphaNumeric.split("");
  let copyArray = stringArray.slice();
  let stringArrayReversed = copyArray.reverse();

  for (let i = 0; i < stringArray.length; i++) {
    // console.log(`String : ${stringArrayReversed[i]} Reversed : ${stringArrayReversed[i]}`);
    if (stringArray[i] !== stringArrayReversed[i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("eye"));
