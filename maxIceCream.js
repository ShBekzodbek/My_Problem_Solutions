/** @format */

var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < costs.length; i++) {
  
    if (coins <= 0 || costs[i]>coins) {
      break;
    }
    coins -= costs[i];
    count++;
  }
  return count;
};
