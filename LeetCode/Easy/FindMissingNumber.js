var findMissing = function (nums) {
  let sortedArray = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] + 2 !== sortedArray[i + 1]) {
      return sortedArray[i + 1];
    }
  }
  return "No Missing Number";
};
