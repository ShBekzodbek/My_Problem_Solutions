/** @format */

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let mini = Math.min(...numbers);
  numbers.splice(numbers.indexOf(mini), 1);
  console.log(Math.min(...numbers) + mini);
}

let numbers = [5, 8, 12, 19, 22];
sumTwoSmallestNumbers(numbers);
