/** @format */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let arr = [];
  if (nums.length == 0 && target == 0) {
    return [-1, -1];
  }
  arr.push(nums.indexOf(target));
  arr.push(nums.lastIndexOf(target));
  return arr;
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 6;
searchRange(nums, target);
