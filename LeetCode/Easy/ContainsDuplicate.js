var containsDuplicate = function (nums) {
  let numObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (numObj[nums[i]]) {
      return true;
    } else numObj[nums[i]] = true;
  }
  return false;
};

//Solution 2
var containsDuplicate2 = function (nums) {
  let numberSet = new Set(nums);

  if (numberSet.size !== nums.length) {
    return true;
  } else {
    return false;
  }
};

console.log(containsDuplicate2([1, 2, 3, 1]));
