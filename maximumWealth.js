/**
 * @format
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
  let richestC = accounts[0].reduce((a, b) => a + b);
  for (let i = 0; i < accounts.length; i++) {
    let currC = accounts[i].reduce((acc, cur) => acc + cur);
    if (currC > richestC) {
      richestC = accounts[i].reduce((acc, cur) => acc + cur);
    }
  }
  return richestC;
};

let accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

let result = maximumWealth(accounts);

console.log(result);
