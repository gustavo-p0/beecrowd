/*
1065 - Pares entre cinco números
(Tarefas)
  .Faça um programa que leia 5 valores inteiros.
  .Conte quantos destes valores digitados são pares
  .Mostre esta informação.

(Entrada)
  .O arquivo de entrada contém 5 valores inteiros quaisquer.

(Saída)
  .Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.Exemplo:
    3 valores pares
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const values = input
  .trim()
  .split("\n")
  .map((value) => parseInt(value));
const fnEvensCount = (values) => {
  let evens = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evens++;
    }
  }
  return evens;
};
console.log(`${fnEvensCount(values)} valores pares`);
