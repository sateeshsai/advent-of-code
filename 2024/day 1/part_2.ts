const fs = require("fs");
const fileContents = fs.readFileSync("./input.txt").toString();

const dataArray = fileContents.split("\n");

const list1Array: number[] = [];
const list2Array: number[] = [];

dataArray.forEach((row) => {
  const pair = row.split("   ");
  list1Array.push(+pair[0]);
  list2Array.push(+pair[1]);
});

const similarityScore = list1Array.reduce((acc, list1Num) => {
  const rowTotal = list1Num * list2Array.filter((list2Num) => list2Num === list1Num).length;
  return acc + rowTotal;
}, 0);

console.log(similarityScore);
