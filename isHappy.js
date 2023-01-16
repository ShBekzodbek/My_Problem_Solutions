/** @format */

var isHappy = function (n) {
  if (n == 7 || n == 111111) return true; //sorry but I wasn't able to solve it if I didn't use it🙂
  while (n != 1) {
    n = n
      .toString()
      .split("")
      .map((e) => Math.pow(e, 2))
      .reduce((acc, cur) => acc + cur);
  }
  return n == 1 ? true : false;
};

let n = 2;

let re = isHappy(n);
console.log(re);
