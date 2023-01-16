/**
 * @format
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
//   if(target<nums[0]){
//    return ;
//   }
  if (nums.indexOf(target) != -1) {
    return nums.indexOf(target);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      return i;
    }
  }
};

let nums = [1, 3, 5, 6];

let target = 7;

let re = searchInsert(nums, target);

console.log(re);
