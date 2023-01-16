/**
 * @format
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */

var nearestValidPoint = function (x, y, points) {
  let nearDistances = {};
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      nearDistances[i] =
        Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      if (nearDistances[i] == 0) {
        return i;
      }
    }
  }
  console.log(Object.values(nearDistances).length);
  let min = Math.min(...Object.values(nearDistances));
  for (let e in nearDistances) {
    if (nearDistances[e] == min) {
      return Number(e);
    }
  }
  return -1;
};

let x = 3,
  y = 4,
  points = [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ];
// let points = [
//     [5, 4],
//     [3, 4],
//     [1, 3],
//     [3, 2],
//     [1, 7],
//     [4, 2],
//   ],
//   x = 2,
//   y = 2;



let re = nearestValidPoint(x, y, points);
// let re = nearestValidPoint(x, y, points);
console.log(re);
