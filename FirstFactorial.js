/** @format */

function FirstFactorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }
}

let n = 5;

let re = FirstFactorial(n);
console.log(re);
