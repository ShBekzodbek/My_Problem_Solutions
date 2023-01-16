/** @format */

var average = function (salary) {
  let min = Math.min(...salary);
  let max = Math.max(...salary);
  let sum = salary
    .filter((e) => e != min && e != max)
    .reduce((sum, value) => sum + value);
  return sum / (salary.length - 2);
};

let salary = [4000, 3000, 1000, 2000];

let re = average(salary);
console.log(re);
