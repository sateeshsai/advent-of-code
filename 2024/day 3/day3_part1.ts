const fs = require("fs");
const fileContents = fs.readFileSync("./input.txt").toString();

const inputSplitByMulOpenParenthesisArray: string[] = fileContents.split("mul(");
function getResult() {
  let resultTracked = 0;

  for (let i = 0; i < inputSplitByMulOpenParenthesisArray.length; i++) {
    const afterMulAsArray = inputSplitByMulOpenParenthesisArray[i].split(")");
    const possibleNumbersString = afterMulAsArray[0];
    const possibleNumbers = possibleNumbersString.split(",").map((numString) => +numString);
    const isValid = !Number.isNaN(possibleNumbers[0]) && !Number.isNaN(possibleNumbers[1]) && possibleNumbers.length === 2;
    if (isValid) resultTracked += possibleNumbers.reduce((acc, pn) => acc * pn, 1);
  }

  return resultTracked;
}

const result = getResult();

// Part 1 result is 163931492
