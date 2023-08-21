const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "/dev/stdin");
// const inputPath = path.join(__dirname, "test.txt");

const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solution(arr) {
  const [arrayLength, actionCount] = arr[0].split(" ").map((el) => +el);

  const array = new Array(arrayLength).fill(0);

  for (let i = 1; i <= actionCount; i++) {
    const [start, end, num] = arr[i].split(" ").map((el) => +el);

    for (let j = start - 1; j < end; j++) {
      array[j] = num;
    }
  }

  return array.join(" ");
}

console.log(solution(input));
