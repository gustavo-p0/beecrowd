/*
1071 - Soma de impares consecutivos 1
(Tarefas)
  .Leia 2 valores inteiros X e Y.
  .Calcule a soma dos números impares entre eles.
  .Mostre a soma.

(Entrada)
  .O arquivo de entrada contém dois valores inteiros.

(Saída)
  .O programa deve imprimir um valor inteiro.
  .Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.
  .Exemplo:
    5
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [min, max] = input
  .split("\n")
  .map((value) => parseInt(value))
  .sort((a, b) => a - b);
const fnPrintOddSumBetween = (min, max) => {
  let sum = 0;
  for (let i = min + 1; i < max; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log(sum);
};
fnPrintOddSumBetween(min, max);
