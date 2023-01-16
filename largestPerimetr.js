/** @format */

var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b);
  let maxPerimetr = 0;
  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] + nums[i + 1] > nums[i + 2]) {
      maxPerimetr = Math.max(maxPerimetr, nums[i] + nums[i + 1] + nums[i + 2]);
    }
  }
  return maxPerimetr;
};

let nums = [2, 1, 2];

largestPerimeter(nums);
