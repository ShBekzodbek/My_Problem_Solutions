/**
 * @format
 * @param {number[][]} coordinates
 * @return {boolean}
 */

var checkStraightLine = function (coordinates) {
  const b =
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0]);
  //   console.log(b);
  let k = 0;
  //   console.log(k);
  for (let i = 0; i < coordinates.length; i++) {
    let x = coordinates[i][0];
    k = (coordinates[i][1] - b) / coordinates[i][0];
    let y = coordinates[i][1];
    console.log("K*X+b = " + k * x + b);
    console.log("Y = " + y);
    if (y != k * x - b) {
      return false;
    }
    // let x1 = 0;
    // let y1 = 0;
    // if (i != coordinates.length - 1) {
    //   x1 = coordinates[i + 1][0];
    //   y1 = coordinates[i + 1][1];
    // } else {
    //   break;
    // }

    // console.log((y - b) / x);
    // if ((y - b) / x != (y1 - b) / x1) {
    //   return false;
    // }
  }
  return true;
};

let coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
let result = checkStraightLine(coordinates);
console.log(result);
