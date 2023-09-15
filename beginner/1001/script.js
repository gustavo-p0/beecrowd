const input = require("fs").readFileSync("/dev/stdin", "utf8");
const values = input.split("\n");
const [A, B] = values.map((item) => parseInt(item));
const X = A + B;
console.log(`X = ${X}`);
