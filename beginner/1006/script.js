/*
1006 - Média 2
(Tarefas)

Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno.
A seguir, calcule a média do aluno:
   .Sabendo que a nota A tem peso 2;
   .A nota B tem peso 3;
   .A nota C tem peso 5.
Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

(Entrada)

O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

(Saída)

Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo,
  MEDIA = 6.3
com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade.
Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*/

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const PESO_A = 2;
const PESO_B = 3;
const PESO_C = 5;
const grades = input.split("\n").map((item) => parseFloat(item));
const fnMedia = (a, b, c) =>
  (a * PESO_A + b * PESO_B + c * PESO_C) / (PESO_A + PESO_B + PESO_C);
console.log(`MEDIA = ${fnMedia(...grades).toFixed(1)}`);
