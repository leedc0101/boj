const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "/dev/stdin");
// const inputPath = path.join(__dirname, "test.txt");

const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 풀이
function solution(arr) {
  const count = arr[0];
  const numbers = arr[1].split(" ");
  const target = arr[2];

  return numbers.filter((el) => el === target).length;
}

console.log(solution(input));
