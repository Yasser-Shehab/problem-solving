//Kadane's Algorithm

var maxSubArray = function (nums) {
  let globalMax = -999999;
  let currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    currentMax += nums[i];
    if (currentMax > globalMax) globalMax = currentMax;
    if (currentMax < 0) currentMax = 0;
  }
  return globalMax;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
