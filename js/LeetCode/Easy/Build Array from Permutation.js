//Solution 1
var buildArray = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }

  return result;
};

//Solution 2

var buildArray2 = function (nums) {
  return nums.map((number) => {
    return nums[number];
  });
};

console.log(buildArray2([0, 2, 1, 5, 3, 4]));
