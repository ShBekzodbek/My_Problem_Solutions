/** @format */

var singleNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      if (nums[i] != nums[i + 1]) {
        return nums[i];
      }
    }
    if (nums[i - 1] != nums[i] && nums[i] != nums[i + 1]) {
      return nums[i];
    }
  }
};

let nums =  [1]
let re = singleNumber(nums);

console.log(re);
