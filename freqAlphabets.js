/** @format */

// /**
//  * @format
//  * @param {string} s
//  * @return {string}
//  */

// let pair = {
//   1: "a",
//   2: "b",
//   3: "c",
//   4: "d",
//   5: "e",
//   6: "f",
//   7: "g",
//   8: "h",
//   9: "i",
//   "10#": "j",
//   "11#": "k",
//   "12#": "l",
//   "13#": "m",
//   "14#": "n",
//   "15#": "o",
//   "16#": "p",
//   "17#": "q",
//   "18#": "r",
//   "19#": "s",
//   "20#": "t",
//   "21#": "u",
//   "22#": "v",
//   "23#": "w",
//   "24#": "x",
//   "25#": "y",
//   "26#": "z",
// };

// var freqAlphabets = function (s) {
//   let ans = "";
//   console.log(s.split("#"));
//   for (let i = 0; i < s.length; i++) {}
// };

// let s = "10#11#12";
// freqAlphabets(s);

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let mini = Math.min(...numbers);
  numbers.splice(numbers.indexOf(mini),1);
  console.log(Math.min(...numbers) + mini);
}

let numbers = [5, 8, 12, 19, 22];
sumTwoSmallestNumbers(numbers);
