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
function getXmasCount(): number {
  let xmasCount = 0;
  rowLoop: for (let rowIdx = 0; rowIdx < inputRowsArray.length; rowIdx++) {
    charLoop: for (let cellIdx = 0; cellIdx < inputRowsArray[rowIdx].length; cellIdx++) {
      const currentChar = inputRowsArray[rowIdx][cellIdx];
      const currentCharIsX = currentChar.char === "X";
      if (currentCharIsX) {
        // RIGHT
        const maybeM = inputRowsArray[rowIdx][cellIdx + 1];
        const maybeA = inputRowsArray[rowIdx][cellIdx + 2];
        const maybeS = inputRowsArray[rowIdx][cellIdx + 3];
        const maybeXmasCharInfoArray = [currentChar, maybeM, maybeA, maybeS];
        if (stringIsXmas(maybeXmasCharInfoArray)) {
          maybeXmasCharInfoArray.forEach((charInfo) => (charInfo.keep = true));
          xmasCount += 1;
          //   continue;
        }

        // LEFT
        const maybeMLeft = inputRowsArray[rowIdx][cellIdx - 1];
        const maybeALeft = inputRowsArray[rowIdx][cellIdx - 2];
        const maybeSLeft = inputRowsArray[rowIdx][cellIdx - 3];
        const maybeXmasCharInfoArrayLeft = [currentChar, maybeMLeft, maybeALeft, maybeSLeft];
        if (stringIsXmas(maybeXmasCharInfoArrayLeft)) {
          maybeXmasCharInfoArrayLeft.forEach((charInfo) => (charInfo.keep = true));
          xmasCount += 1;
          //   continue;
        }

        // TOP
        const maybeMTop = inputRowsArray[rowIdx - 1]?.[cellIdx];
        const maybeATop = inputRowsArray[rowIdx - 2]?.[cellIdx];
        const maybeSTop = inputRowsArray[rowIdx - 3]?.[cellIdx];
        const maybeXmasCharInfoArrayTop = [currentChar, maybeMTop, maybeATop, maybeSTop];
        if (stringIsXmas(maybeXmasCharInfoArrayTop)) {
          maybeXmasCharInfoArrayTop.forEach((charInfo) => (charInfo.keep = true));
          xmasCount += 1;
          //   continue;
        }

        // DOWN
        const maybeMDown = inputRowsArray[rowIdx + 1]?.[cellIdx];
        const maybeADown = inputRowsArray[rowIdx + 2]?.[cellIdx];
        const maybeSDown = inputRowsArray[rowIdx + 3]?.[cellIdx];
        const maybeXmasCharInfoArrayDown = [currentChar, maybeMDown, maybeADown, maybeSDown];
        if (stringIsXmas(maybeXmasCharInfoArrayDown)) {
          maybeXmasCharInfoArrayDown.forEach((charInfo) => (charInfo.keep = true));
          xmasCount += 1;
          //   continue;
        }

        // TOP LEFT -> BOTTOM RIGHT
        const maybeMTopLeft = inputRowsArray[rowIdx - 1]?.[cellIdx - 1];
        const maybeATopLeft = inputRowsArray[rowIdx - 2]?.[cellIdx - 2];
        const maybeSTopLeft = inputRowsArray[rowIdx - 3]?.[cellIdx - 3];
        const maybeXmasCharInfoArrayTopLeft = [currentChar, maybeMTopLeft, maybeATopLeft, maybeSTopLeft];
        // console.log(maybeXmasCharInfoArrayTopLeft.map((charInfo) => charInfo?.char).join(""));
        if (stringIsXmas(maybeXmasCharInfoArrayTopLeft)) {
          maybeXmasCharInfoArrayTopLeft.forEach((charInfo) => {
            // charInfo.char = "O";
            charInfo.keep = true;
          });
          xmasCount += 1;
          //   continue;
        }

        // TOP RIGHT -> BOTTOMR LEFT
        const maybeMTopRight = inputRowsArray[rowIdx + 1]?.[cellIdx + 1];
        const maybeATopRight = inputRowsArray[rowIdx + 2]?.[cellIdx + 2];
        const maybeSTopRight = inputRowsArray[rowIdx + 3]?.[cellIdx + 3];
        const maybeXmasCharInfoArrayTopRight = [currentChar, maybeMTopRight, maybeATopRight, maybeSTopRight];
        // console.log(maybeXmasCharInfoArrayTopRight.map((charInfo) => charInfo?.char).join(""));
        if (stringIsXmas(maybeXmasCharInfoArrayTopRight)) {
          maybeXmasCharInfoArrayTopRight.forEach((charInfo) => (charInfo.keep = true));
          xmasCount += 1;
          //   continue;
        }

        // BOTTOM LEFT -> TOP RIGHT
        const maybeMBottomLeft = inputRowsArray[rowIdx + 1]?.[cellIdx - 1];
        const maybeABottomLeft = inputRowsArray[rowIdx + 2]?.[cellIdx - 2];
        const maybeSBottomLeft = inputRowsArray[rowIdx + 3]?.[cellIdx - 3];
        const maybeXmasCharInfoArrayBottomLeft = [currentChar, maybeMBottomLeft, maybeABottomLeft, maybeSBottomLeft];
        // console.log(maybeXmasCharInfoArrayBottomLeft.map((charInfo) => charInfo?.char).join(""));
        if (stringIsXmas(maybeXmasCharInfoArrayBottomLeft)) {
          maybeXmasCharInfoArrayBottomLeft.forEach((charInfo) => (charInfo.keep = true));
          xmasCount += 1;
          //   continue;
        }

        // BOTTOM RIGHT -> TOP LEFT
        const maybeMBottomRight = inputRowsArray[rowIdx - 1]?.[cellIdx + 1];
        const maybeABottomRight = inputRowsArray[rowIdx - 2]?.[cellIdx + 2];
        const maybeSBottomRight = inputRowsArray[rowIdx - 3]?.[cellIdx + 3];
        const maybeXmasCharInfoArrayBottomRight = [currentChar, maybeMBottomRight, maybeABottomRight, maybeSBottomRight];
        // console.log(maybeXmasCharInfoArrayBottomRight.map((charInfo) => charInfo?.char).join(""));
        if (stringIsXmas(maybeXmasCharInfoArrayBottomRight)) {
          maybeXmasCharInfoArrayBottomRight.forEach((charInfo) => (charInfo.keep = true));
          xmasCount += 1;
          //   continue;
        }
      }
    }
  }

  return xmasCount;
}

function stringIsXmas(stringArray: CharInfo[]) {
  return stringArray.map((charInfo) => charInfo?.char).join("") === "XMAS";
}

const xmasCount = getXmasCount();
console.log(inputRowsArray.reduce((acc, row) => (acc += row.map((charInfo) => (charInfo.keep ? charInfo.char : ".")).join("") + "\n"), ""));
console.log(xmasCount);
