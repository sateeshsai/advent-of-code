const fs = require("fs");
const fileContents = fs.readFileSync("./input.txt").toString();

const inputArray = fileContents.split("\n").map((line) => line.split(" ").map((num) => +num));

const safeReportsCount = inputArray.reduce((acc, report) => {
  let lastOrder = "";
  const reportIsSafe = report.reduce((accreport, level, idx) => {
    if (report[idx + 1]) {
      const changeInLevel = level - report[idx + 1];

      const currentOrder = changeInLevel > 0 ? "desc" : "asc";
      let orderIsSequential = !lastOrder || currentOrder === lastOrder;

      if (orderIsSequential && changeInLevel && Math.abs(changeInLevel) <= 3) {
        lastOrder = currentOrder;
        return accreport;
      } else {
        lastOrder = currentOrder;
        return false;
      }
    } else {
      return accreport;
    }
  }, true);

  return reportIsSafe ? acc + 1 : acc;
}, 0);

console.log(safeReportsCount);
