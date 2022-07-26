function uniteUnique(...arr) {
  const result = [...new Set(arr.flat())];
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
