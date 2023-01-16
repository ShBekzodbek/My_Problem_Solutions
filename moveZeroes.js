/**
 * @format
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  //Second solution
  // if (nums.indexOf(0) != -1) {
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] == 0) {
  //       count++;
  //     }
  //   }
  //   nums = nums.filter((e) => e > 0);
  //   console.log(count);
  //   for (let i = 0; i < count; i++) {
  //     nums.push(0);
  //   }
  // }

  //First solution
  //   nums.splice(0, count);

  //   let zeroSize = nums.filter((e) => e == 0).length;
  //   nums = nums.slice(nums.lastIndexOf(0) + 1).concat(nums.slice(0, zeroSize));

  //bu (pastdagi) yechim menimcha Javascript support qilmadi.
  // Men masalani qanday yechmoqchi edim. Hamma 0 dan katta elementlarni arrayni oldiga o'tkazib olib
  // Keyin array ning ohirida faqat 0 lar qoladi.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums.push(nums[i]);
    }
  }
  console.log(nums);
};

let nums = [0, 1, 0, 3, 12];

moveZeroes(nums);
