/** @format */

var canMakeArithmeticProgression = function (arr) {
  arr.sort((a,b)=>a-b);
  let d = arr[1] - arr[0];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] != d && arr[i + 1] != undefined) {
      return false;
    }
  }
  return true;
};

let arr = [-68, -96, -12, -40, 16];

let re = canMakeArithmeticProgression(arr);

console.log(re);
