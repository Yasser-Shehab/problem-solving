//My Solution (Brute Force)
var canConstruct = function (ransomNote, magazine) {
  let noteObj = {};
  let magazineObj = {};
  for (let i = 0; i < magazine.length; i++) {
    if (magazineObj[magazine[i]]) {
      magazineObj[magazine[i]] += 1;
    } else {
      magazineObj[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (noteObj[ransomNote[i]]) {
      noteObj[ransomNote[i]] += 1;
    } else {
      noteObj[ransomNote[i]] = 1;
    }
  }

  for (const [key, value] of Object.entries(noteObj)) {
    if (!(value <= magazineObj[key])) {
      return false;
    }
  }
  return true;
};

var canConstruct2 = function (ransomNote, magazine) {
  const hash = new Map(); // letter: number

  for (let i = 0; i < magazine.length; i++) {
    const currentLet = magazine[i];
    if (hash.get(currentLet) === undefined) {
      hash.set(currentLet, 1);
    } else {
      const newVal = hash.get(currentLet) + 1;
      hash.set(currentLet, newVal);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const currentLet = ransomNote[i];
    if (hash.get(currentLet) === undefined || hash.get(currentLet) < 1) {
      return false;
    } else {
      const newVal = hash.get(currentLet) > 1 ? hash.get(currentLet) - 1 : 0;
      hash.set(currentLet, newVal);
    }
  }

  return true;
};

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));
