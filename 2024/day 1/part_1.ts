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

list1Array.sort((a, b) => (a > b ? 1 : -1));
list2Array.sort((a, b) => (a > b ? 1 : -1));

const totalDistance = list1Array.reduce((acc, list1Num, idx) => acc + Math.abs(list1Num - list2Array[idx]), 0);
console.log(totalDistance);
