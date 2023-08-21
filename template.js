const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "/dev/stdin");
// const inputPath = path.join(__dirname, "test.txt");

const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solution(arr) {
  //
}

console.log(solution(input));
