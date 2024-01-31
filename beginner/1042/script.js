/*
1042 - Sort simples

(Tarefas)
  .Leia 3 valores;
  .Ordene-os em ordem crescente.
  .No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

(Entrada)
  .A entrada contem três números inteiros.

(Saída)
  .Imprima a saída conforme foi especificado.
    -14
    7
    21

    7
    21
    -14

*/

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const values = input.split(" ").map((value) => parseInt(value));
const sortedValues = [...values].sort((a, b) => a - b);
sortedValues.forEach((value) => console.log(value));
console.log("");
values.forEach((value) => console.log(value));
