const fs = require("fs");

const fileContents = fs.readFileSync("./input.txt").toString();

interface CharInfo {
  char: string;
  keep: boolean;
}
const inputRowsArray: CharInfo[][] = fileContents.split("\n").map((row) =>
  row.split("").map((char) => {
    return {
      char,
      keep: false,
    };
  })
);

let x = 0;
function getMasCount(): number {
  let masCount = 0;
  rowLoop: for (let rowIdx = 0; rowIdx < inputRowsArray.length; rowIdx++) {
    charLoop: for (let cellIdx = 0; cellIdx < inputRowsArray[rowIdx].length; cellIdx++) {
      const currentChar = inputRowsArray[rowIdx][cellIdx];
      const currentCharIsA = currentChar.char === "A";
      if (currentCharIsA) {
        // TOP LEFT
        const topLeft = inputRowsArray[rowIdx - 1]?.[cellIdx - 1];
        const topLeftValid = topLeft?.char === "M";
        if (topLeftValid) topLeft.keep = true;
        // TOP RIGHT
        const topRight = inputRowsArray[rowIdx - 1]?.[cellIdx + 1];
        const topRightValid = topRight?.char === "S";
        if (topRightValid) topRight.keep = true;
        // BOTTOM LEFT
        const bottomLeft = inputRowsArray[rowIdx + 1]?.[cellIdx - 1];
        const bottomLeftValid = bottomLeft?.char === "M";
        if (bottomLeftValid) bottomLeft.keep = true;
        // BOTTOM RIGHT
        const bottomRight = inputRowsArray[rowIdx + 1]?.[cellIdx + 1];
        const bottomRightValid = bottomRight?.char === "S";
        if (bottomRightValid) bottomRight.keep = true;
        const isMSMS = topLeftValid && topRightValid && bottomLeftValid && bottomRightValid;

        // TOP LEFT
        const topLeft2 = inputRowsArray[rowIdx - 1]?.[cellIdx - 1];
        const topLeftValid2 = topLeft?.char === "S";
        if (topLeftValid2) topLeft.keep = true;
        // TOP RIGHT
        const topRight2 = inputRowsArray[rowIdx - 1]?.[cellIdx + 1];
        const topRightValid2 = topRight?.char === "S";
        if (topRightValid2) topRight.keep = true;
        // BOTTOM LEFT
        const bottomLeft2 = inputRowsArray[rowIdx + 1]?.[cellIdx - 1];
        const bottomLeftValid2 = bottomLeft?.char === "M";
        if (bottomLeftValid2) bottomLeft.keep = true;
        // BOTTOM RIGHT
        const bottomRight2 = inputRowsArray[rowIdx + 1]?.[cellIdx + 1];
        const bottomRightValid2 = bottomRight?.char === "M";
        if (bottomRightValid2) bottomRight.keep = true;
        const isSSMM = topLeftValid2 && topRightValid2 && bottomLeftValid2 && bottomRightValid2;

        // TOP LEFT
        const topLeft3 = inputRowsArray[rowIdx - 1]?.[cellIdx - 1];
        const topLeftValid3 = topLeft?.char === "S";
        if (topLeftValid3) topLeft.keep = true;
        // TOP RIGHT
        const topRight3 = inputRowsArray[rowIdx - 1]?.[cellIdx + 1];
        const topRightValid3 = topRight?.char === "M";
        if (topRightValid3) topRight.keep = true;
        // BOTTOM LEFT
        const bottomLeft3 = inputRowsArray[rowIdx + 1]?.[cellIdx - 1];
        const bottomLeftValid3 = bottomLeft?.char === "S";
        if (bottomLeftValid3) bottomLeft.keep = true;
        // BOTTOM RIGHT
        const bottomRight3 = inputRowsArray[rowIdx + 1]?.[cellIdx + 1];
        const bottomRightValid3 = bottomRight?.char === "M";
        if (bottomRightValid3) bottomRight.keep = true;
        const isSMSM = topLeftValid3 && topRightValid3 && bottomLeftValid3 && bottomRightValid3;

        // TOP LEFT
        const topLeft4 = inputRowsArray[rowIdx - 1]?.[cellIdx - 1];
        const topLeftValid4 = topLeft?.char === "M";
        if (topLeftValid4) topLeft.keep = true;
        // TOP RIGHT
        const topRight4 = inputRowsArray[rowIdx - 1]?.[cellIdx + 1];
        const topRightValid4 = topRight?.char === "M";
        if (topRightValid4) topRight.keep = true;
        // BOTTOM LEFT
        const bottomLeft4 = inputRowsArray[rowIdx + 1]?.[cellIdx - 1];
        const bottomLeftValid4 = bottomLeft?.char === "S";
        if (bottomLeftValid4) bottomLeft.keep = true;
        // BOTTOM RIGHT
        const bottomRight4 = inputRowsArray[rowIdx + 1]?.[cellIdx + 1];
        const bottomRightValid4 = bottomRight?.char === "S";
        if (bottomRightValid4) bottomRight.keep = true;

        const isMMSS = topLeftValid4 && topRightValid4 && bottomLeftValid4 && bottomRightValid4;

        if (isMSMS || isSSMM || isSMSM || isMMSS) {
          currentChar.keep = true;
          masCount += 1;
        }
      }
    }
  }

  return masCount;
}

const masCount = getMasCount();
console.log(inputRowsArray.reduce((acc, row) => (acc += row.map((charInfo) => (charInfo.keep ? charInfo.char : ".")).join("") + "\n"), ""));
console.log(masCount);
