/**
 * @format
 * @param {number[]} tasks
 * @return {number}
 */
Object.defineProperties(Array.prototype, {
  count: {
    value: function (value) {
      return this.filter((x) => x == value).length;
    },
  },
});

var removeDuplicates = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    } else {
    }
  }
  return nums;
};

var minimumRounds = function (tasks) {
  let tasksCopy = Array.from(tasks);
  let removedDupArr = removeDuplicates(tasks);
  let arr = [];
  for (let i = 0; i < removedDupArr.length; i++) {
    let two = 0;
    let three = 0;
    let round = tasksCopy.count(removedDupArr[i]);
    console.log(round);
    if (round == 1) {
      return -1;
    }
    if (round % 3 == 2) {
      two++;
    }
    if (round % 3 == 0) {
      three++;
    }
  }
  console.log(arr);
};

let tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
minimumRounds(tasks);
