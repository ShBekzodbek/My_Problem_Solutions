/**
 * @format
 * @param {number[]} arr
 * @return {number}
 */

// var sumOddLengthSubarrays = function (arr) {
//   let incSize = Math.floor(arr.length / 2);
//   let sum = 0;

//   for (let j = 1; j <= incSize; j + 2) {
//     for (let i = 0, q = 1; i < arr.length; i++) {
//       sum += arr.slice(q, j ).reduce((acc, cur) => {
//         acc + cur;
//       });
//     }
//   }

//   console.log(sum);
//   for (let i = 1; i < 20; i++) {}

//   console.log(arr);
// };

var sumOddLengthSubarrays = function (arr) {
  if (!arr.length) return 0;
  let sum = 0;
  const findSum = (first, last) => {
    let sum = 0;
    for (let i = first; i <= last; i++) sum += arr[i];
    return sum;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j + i < arr.length; j = j + 2) sum += findSum(i, i + j);
  }
  return sum;
};

let arr = [1, 4, 2, 5, 3];

let re = sumOddLengthSubarrays(arr);

console.log(re);
