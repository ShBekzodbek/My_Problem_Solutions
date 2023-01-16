/** @format */

var arraySign = function (nums) {
  return nums.indexOf(0) != -1
    ? 0
    : nums.filter((e) => e < 0).length % 2 == 0
    ? 1
    : -1;
};

let nums = [-1, 1, -1, 1, -1];

arraySign(nums);
