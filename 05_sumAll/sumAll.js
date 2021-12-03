const sumAll = function (f, y) {
  if (!Number.isInteger(f) || !Number.isInteger(y)) return "ERROR";
  if (f < 0 || y < 0) return "ERROR";

  if (f > y) {
    const temp = f;
    f = y;
    y = temp;
  }

  let sum = 0;
  for (x = 0; x < y + 1; x++) {
    sum += x;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
