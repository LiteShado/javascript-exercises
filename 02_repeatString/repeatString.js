const repeatString = function (w, y) {
  if (y < 0) return "ERROR";

  let theWord = "";

  for (x = 0; x < y; x++) {
    theWord += w;
  }
  return theWord;
};

// Do not edit below this line
module.exports = repeatString;
