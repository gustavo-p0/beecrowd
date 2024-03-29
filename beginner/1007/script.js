/*
1007 - Diferença
(Tarefas)
Leia quatro valores inteiros A, B, C e D.
A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula:
 DIFERENCA = (A * B - C * D).

(Entrada)

O arquivo de entrada contém 4 valores inteiros.

(Saída)

Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo:
  DIFERENCA = -26
.com um espaço em branco antes e depois da igualdade.
*/

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const values = input.split("\n").map((value) => parseInt(value));
const fnDiferenca = (a, b, c, d) => a * b - c * d;
console.log(`DIFERENCA = ${fnDiferenca(...values)}`);
