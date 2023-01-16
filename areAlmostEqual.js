/** @format */

var areAlmostEqual = function (s1, s2) {
  if (s1 == s2) {
    return true;
  }
  let counter = 0;
  let arr = Array.from(s2);
  let arr1 = Array.from(s1);
  arr.sort();
  arr1.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr1[i]) {
      return false;
    }
  }
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      counter++;
    }
  }

  return counter <= 2 ? true : false;
};

let s1 = "yf";
s2 = "yy";

let re = areAlmostEqual(s1, s2);

console.log(re);
