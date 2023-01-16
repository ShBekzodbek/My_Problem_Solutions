/**
 * @format
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  nums.sort((a, b) => a - b);
  //   let low = 0;
  //   let high = nums[nums.length - 1];
  //   while (low <= high) {
  //     let mid = Math.floor((low + high) / 2);
  //     console.log(mid);
  //     let guess = nums[mid];
  //     console.log(guess);
  //     if (guess == target) {
  //       return mid;
  //     }
  //     if (guess > target) {
  //       high = mid - 1;
  //     } else {
  //       low = mid + 1;
  //     }
  //   }

  let start = 0,
    end = nums.length - 1; // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2); // If element is present at mid, return True
    if (nums[mid] === target) return mid;
    // Else look in left or right half accordingly
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12],
  target = 3;

let result = search(nums, target);

console.log(result);
