// const fs = require("fs");

// const fileContents = fs.readFileSync("./input.txt").toString();
// const inputSplitByMulOpenParenthesisArray: string[] = fileContents.split("mul(");

// function getMoreAccurateResult() {
//   let result = 0;
//   let followsDont = false;
//   let followsDo = false;

//   for (let i = 0; i < inputSplitByMulOpenParenthesisArray.length; i++) {
//     const previousItem = inputSplitByMulOpenParenthesisArray[i - 1];
//     if (previousItem) {
//       followsDo = previousItem.includes("do()") && previousItem.indexOf("do()") > previousItem.indexOf("don't()");
//       if (previousItem.includes("don't()")) followsDont = true;
//       if (followsDo) followsDont = false;
//       if (!followsDont) {
//         const afterMulAsArray = inputSplitByMulOpenParenthesisArray[i].split(")");
//         const possibleNumbersString = afterMulAsArray[0];
//         const possibleNumbers = possibleNumbersString.split(",").map((numString) => +numString);
//         const isValid = !Number.isNaN(possibleNumbers[0]) && !Number.isNaN(possibleNumbers[1]) && possibleNumbers.length === 2;
//         if (isValid) result += possibleNumbers.reduce((acc, pn) => acc * pn, 1);
//       }
//     }
//   }

//   return result;
// }

// const moreAccurateResult = getMoreAccurateResult();

// // Part 2 moreAccurateResult is 154109703
