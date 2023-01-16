/** @format */

// var subtractProductAndSum = function (n) {
//   return (
//     n
//       .toString()
//       .split("")
//       .reduce((sum, element) => sum * element) -
//     n
//       .toString()
//       .split("")
//       .map(Number)
//       .reduce((sum, e) => sum + e)
//   );
// };

var subtractProductAndSum = function (n) {
  let multiple = 1;
  let sum = 0;
  while (n != 0) {
    multiple *= parseInt(n % 10);
    sum += parseInt(n % 10);
    n = parseInt(n / 10);
  }
  return multiple - sum;
};

let n = 4421;

let re = subtractProductAndSum(n);

console.log(re);
