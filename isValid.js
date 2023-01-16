/**
 * @format
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i] == "(" && arr.lastIndexOf(")") == i + 1);
    // console.log(arr[i] == "[" && arr.lastIndexOf("]" == i + 1));
    // console.log(arr[i] == "{" && arr.lastIndexOf("}" == i + 1));

    if (
      (arr[i] == ")" && arr[i - 1] != "(") ||
      (arr[i] == "}" && arr[i - 1] != "{") ||
      (arr[i] == "]" && arr[i - 1] != "[") ||
      (arr[i] == "(" && arr.lastIndexOf(")") != i + 1) ||
      (arr[i] == "[" && arr.lastIndexOf("]") != i + 1) ||
      (arr[i] == "{" && arr.lastIndexOf("}") != i + 1)
    ) {
      return false;
    }
    // if (arr[i] == "[" && arr.lastIndexOf("]") != i + 1) {
    //   console.log("2");
    //   return false;
    // }
    // if (arr[i] == "{" && arr.lastIndexOf("}") != i + 1) {
    //   console.log("3");
    //   return false;
    // }
  }
  return true;
};

let s = "()]";

let result = isValid(s);
console.log(result);
