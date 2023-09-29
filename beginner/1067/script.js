/*
1067 - Numeros impares
(Tarefas)
  .Leia um valor inteiro X (1 <= X <= 1000).
  .Mostre os ímpares de 1 até X:
    .um valor por linha, inclusive o X, se for o caso.

(Entrada)
  .O arquivo de entrada contém 1 valor inteiro qualquer.

(Saída)
  .Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.Exemplo:
    1
    3
    5
    7
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const value = parseInt(input);
const fnPrintOddValuesTo = (value) => {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
};
fnPrintOddValuesTo(value);
