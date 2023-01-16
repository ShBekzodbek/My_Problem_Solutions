/**
 * @format
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  return s
    .trim()
    .replaceAll(" ", "~")
    .split("~")
    .filter((e) => e != "~" && e != "")
    .reverse()
    .join(" ");
};

let s =
  " 3c      2zPeO dpIMVv2SG    1AM       o       VnUhxK a5YKNyuG     x9    EQ  ruJO       0Dtb8qG91w 1rT3zH F0m n G wU";

let result = reverseWords(s);
console.log(
  result ==
    "wU G n F0m 1rT3zH 0Dtb8qG91w ruJO EQ x9 a5YKNyuG VnUhxK o 1AM dpIMVv2SG 2zPeO 3c"
);
