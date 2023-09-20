/*
1012 - Area
(Tarefas)
  .Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C.
  .Em seguida, calcule e mostre:
    1) a área do triângulo retângulo que tem A por base e C por altura.
    2) a área do círculo de raio C. (pi = 3.14159)
    3) a área do trapézio que tem A e B por bases e C por altura.
    4) a área do quadrado que tem lado B.
    5) a área do retângulo que tem lados A e B.
  .Os valores calculados devem ser apresentados com 3 dígitos após o ponto decimal.
(Entrada)
  O arquivo de entrada contém três valores com um dígito após o ponto decimal.

(Saída)
  O arquivo de saída deverá conter 5 linhas de dados.
  Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor.
  TRIANGULO: 7.800
  CIRCULO: 84.949
  TRAPEZIO: 18.200
  QUADRADO: 16.000
  RETANGULO: 12.000
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const PI = 3.14159;
const [A, B, C] = input.split(" ").map((item) => parseFloat(item));
const fnTriangleArea = (base, height) => (base * height) / 2;
const fnCircleArea = (radius) => PI * Math.pow(radius, 2);
const fnTrapeziumArea = (minorBase, majorBase, height) =>
  ((minorBase + majorBase) * height) / 2;
const fnSquareArea = (side) => Math.pow(side, 2);
const fnRectangleArea = (base, height) => base * height;
const formatOutput = (output) => output.toFixed(3);
console.log(`TRIANGULO: ${formatOutput(fnTriangleArea(A, C))}`);
console.log(`CIRCULO: ${formatOutput(fnCircleArea(C))}`);
console.log(`TRAPEZIO: ${formatOutput(fnTrapeziumArea(A, B, C))}`);
console.log(`QUADRADO: ${formatOutput(fnSquareArea(B))}`);
console.log(`RETANGULO: ${formatOutput(fnRectangleArea(A, B))}`);
