/*
1070 - Seis numeros impares
(Tarefas)
  .Leia um valor inteiro X.
  .Apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

(Entrada)
  .A entrada será um valor inteiro positivo.
(Saída)
  .A saída será uma sequência de seis números ímpares.
  9
  11
  13
  15
  17
  19
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const value = parseInt(input);
const fnPrintSixConsecutivesOddNumberFrom = (number) => {
  let num = number % 2 === 0 ? number + 1 : number;
  for (let i = 0; i < 6; i++) {
    if (i === 0) {
      console.log(num);
    } else {
      console.log((num += 2));
    }
  }
};
fnPrintSixConsecutivesOddNumberFrom(value);
