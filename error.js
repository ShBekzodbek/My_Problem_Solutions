/** @format */

function moveZeroes(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums.push(nums[i]);
    }
  }
  console.log(nums);
}

let nums = [0, 1, 0, 3, 12];

moveZeroes(nums);

 











