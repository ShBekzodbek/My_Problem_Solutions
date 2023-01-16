/** @format */

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var removeDuplicates = function (nums) {
  let len = nums.length;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    } else {
      counter++;
    }
  }
  for (let i = 0; i < len - nums.length; i++) {
    nums.push("_");
  }
  return nums;
};

let nums = [1, 1, 2, 2, 2, 3, 3, 3, 4];
let re = removeDuplicates(nums);
console.log(re);
