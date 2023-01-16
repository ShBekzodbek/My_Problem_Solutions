/** @format */

var nextGreaterElement = function (nums1, nums2) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    let maxi = 0;
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums2[index]) {
        maxi = nums2[j];
        break;
      }
    }
    // maxi = nums2.slice(index + 1).filter((e) => e > nums2[index])[0];
    if (nums2[index] < maxi) {
      arr.push(maxi);
    } else {
      arr.push(-1);
    }
  }
  return arr;
};

let nums1 = [2, 4],
  nums2 = [1, 2, 3, 4];

let re = nextGreaterElement(nums1, nums2);

console.log(re);
