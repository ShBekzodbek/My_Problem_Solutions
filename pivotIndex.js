/**
 * @format
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  let sumOfNums = nums.reduce((a, b) => a + b);
  let pivotIn = 1;
  if (sumOfNums - nums[0] == 0) return 0;

  for (let i = 0; i < nums.length - 1; i++) {
    let sumL = 0;
    let sumR = 0;
    for (let j = 0; j <= i; j++) {
      sumL += nums[j];
    }
    let sliced = nums.slice(pivotIn);
    sumR = sliced.reduce((a, b) => a + b) - nums[pivotIn];
    if (sumL == sumR) return pivotIn;
    else pivotIn++;
  }
  let pivotR = sumOfNums - nums[nums.length - 1] == 0 ? 0 : 1;
  if (pivotR == 0) return nums.length - 1;
  return -1;
};

let nums = [2, 1, -1];

let re = pivotIndex(nums);
console.log(re);


