const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "/dev/stdin");
// const inputPath = path.join(__dirname, "test.txt");

const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solution(arr) {
  const count = arr[0];
  const numbers = arr[1].split(" ");

  let max = Number(numbers[0]);
  let min = Number(numbers[0]);

  for (const num of numbers) {
    if (Number(num) > max) max = Number(num);
    if (Number(num) < min) min = Number(num);
  }

  return `${min} ${max}`;
}

console.log(solution(input));
