/** @format */

var merge = function (nums1, m, nums2, n) {
  nums1 = nums1.splice(0, m).concat(nums2.splice(0, n));
  nums1.sort((a, b) => a - b);
  console.log(nums1);
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
