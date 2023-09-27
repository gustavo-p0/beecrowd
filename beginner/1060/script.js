/*
1060 - Numeros positivos
(Tarefas)
  .Leia 6 valores.
  .Mostre a quantidade de valores positivos digitados.

(Entrada)
  .Seis valores, negativos ou positivos não nulos.

(Saída)
  .Imprima uma mensagem dizendo quantos valores positivos foram lidos.Exemplo:
    4 valores positivos
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const values = input.split("\n").map((value) => parseFloat(value));
const fnPositiveQty = (numbers) => {
  let qty = 0;
  for (const number of numbers) {
    if (number > 0) {
      qty++;
    }
  }
  return qty;
};
console.log(`${fnPositiveQty(values)} valores positivos`);
