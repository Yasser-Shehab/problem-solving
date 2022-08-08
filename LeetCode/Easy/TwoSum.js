//Brute Froce
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      }
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

//Optimal Solution

var twoSum2 = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    const secondNum = target - nums[i];
    if (hashMap.has(secondNum)) {
      return [i, hashMap.get(secondNum)];
    }
    hashMap.set(firstNum, i);
  }
};

console.log(twoSum2([3, 3], 6));
