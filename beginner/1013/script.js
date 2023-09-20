/*
1013 - O Maior
(Tarefas)
  .Faça um programa que leia três valores;
  .Apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:
    maiorAB = (a + b + abs(a-b))/2
  Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.
(Entrada)
  O arquivo de entrada contém três valores inteiros.
(Saída)
  Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
  106 eh o maior
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const values = input.split(" ").map((item) => parseInt(item));
const fnMajorNumber = (x, y) => (x + y + Math.abs(x - y)) / 2;
const majorNumber = values.reduce((acc, currentItem) =>
  fnMajorNumber(acc, currentItem)
);
console.log(`${majorNumber} eh o maior`);
