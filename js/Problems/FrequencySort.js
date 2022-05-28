const frequencySort = (s) => {
  const obj = {};
  const stringLen = s.length;
  for (let i = 0; i < stringLen; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 0;
    }
    obj[s[i]]++;
  }
  let sortedString = Object.keys(obj).sort((a, b) => {
    return obj[b] - obj[a];
  });
  let result = "";
  for (let item of sortedString) {
    result = result + item.repeat(obj[item]);
  }

  return result;
};

console.log(frequencySort("tree"));
