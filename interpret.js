/**
 * @format
 * @param {string} command
 * @return {string}
 */

var interpret = function (command) {
  let st = "";
  for (let i = 0; i < command.length; i++) {
    if (command.charAt(i) == "(" && command.charAt(i + 1) == ")") {
      st += "o";
      i++;
    } else if (command.charAt(i) == "G") {
      st += "G";
    } else if (command.charAt(i) == "(" && command.charAt(i + 1) != "(") {
      st += "al";
    }
  }
  return st;
};

let command = "G()(al)";

interpret(command);
