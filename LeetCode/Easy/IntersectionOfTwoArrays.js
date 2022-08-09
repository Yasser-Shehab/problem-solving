var intersect = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      result.push(nums1[i]);
      let index = nums2.indexOf(nums1[i]);

      nums2.splice(index, 1);
    }
  }
  return result;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
