/** @format */

function QuestionsMarks(str) {
  // code goes here
  let firstNumIndex = str.search(/[0-9]/);
  let arr = [];
  let secondNumIndex = str
    .slice(firstNumIndex + 1)
    .split("")
    .forEach((element, index, arr) => {
      if (parseInt(element)) >= 0) {
        arr.push(arr[index]);
        })
      
    });
    console.log(arr);
  console.log(secondNumIndex);

  //   for (let i = firstNum + 1; i < str.length; i++) {

  //   }

  //   console.log(firstNum);
  //   return str;
}

let str = "acc?7??sss?3rr1??????5";
QuestionsMarks(str);
