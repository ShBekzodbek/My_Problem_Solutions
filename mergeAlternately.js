/**
 * @format
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// second approach 
var mergeAlternately = function (word1, word2) {
  let merged = "";
  let i, j;
  for (i = 0, j = 0; i < word1.length && j < word2.length; i++) {
    merged += word1.charAt(i);
    merged += word2.charAt(i);
    j++;
  }
// first approach
  merged += word1.slice(i);
  merged += word2.slice(j);

  console.log(merged);
  return merged;
};

// var mergeAlternately = function (word1, word2) {
//   let ans = "";
//   let len = Math.max(word1.length, word2.length);
//   for (let i = 0; i < len; i++) {
//     if (i < word1.length) ans += "" + word1.charAt(i);
//     if (i < word2.length) ans += "" + word2.charAt(i);
//   }
//   return ans;
// };

let word1 = "ab",
  word2 = "pqrs";
mergeAlternately(word1, word2);
