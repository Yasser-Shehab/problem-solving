//Solution 1
var runningSum = function (nums) {
  let sumArray = [];
  for (let i = 1; i <= nums.length; i++) {
    let result = nums.slice(0, i).reduce((prev, curr) => prev + curr);
    sumArray.push(result);
  }
  return sumArray;
};

//Solution 2
var runningSum2 = function (nums) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
};

console.log(runningSum2([3, 1, 2, 10, 1]));
