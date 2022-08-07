var longestCommonPrefix = function (strs) {
  let letters = "";
  let first = strs[0];
  for (let i = 0; i < first.length; i++) {
    let char = first[i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return letters;
      }
    }
    letters += char;
  }
  return letters;
};

console.log(longestCommonPrefix(["flower", "flow", "flighttt", "flloooorr", "fmmmm"]));
