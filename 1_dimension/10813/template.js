const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "/dev/stdin");
// const inputPath = path.join(__dirname, "test.txt");

const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solution(arr) {
  const [arrayLength, actionCount] = arr[0].split(" ").map((el) => +el);

  const array = new Array(arrayLength).fill(0).map((_, idx) => idx + 1);

  for (let i = 1; i <= actionCount; i++) {
    const [m, n] = arr[i].split(" ").map((el) => +el);
    const temp = array[m - 1];
    array[m - 1] = array[n - 1];
    array[n - 1] = temp;
  }

  return array.join(" ");
}

console.log(solution(input));
