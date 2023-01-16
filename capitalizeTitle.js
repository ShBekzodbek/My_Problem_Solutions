/** @format */

var capitalizeTitle = function (title) {
  title = title.split(" ");
  for (let i = 0; i < title.length; i++) {
    if (title[i].length <= 2) {
      title[i] = title[i].toLowerCase();
    } else {
      title[i] = title[i].toLowerCase();
      title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    }
  }
  return title;
};

let title = "First leTTeR of EACH Word";

capitalizeTitle(title);
