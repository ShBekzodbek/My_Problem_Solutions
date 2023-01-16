/**
 * @format
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function (s, t) {
  s = s.split("").sort();
  t = t.split("").sort();
  for (let i = 0; i < t.length; i++) {
    if (s[i] != t[i]) return t[i];
  }
  return "";
};

let s = "";
t = "y";

let result = findTheDifference(s, t);

console.log(result);
