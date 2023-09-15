/*
1004 - Produto Simples
(Tarefas)
  Leia dois valores inteiros.
  A seguir, calcule o produto entre estes dois valores.
  Atribua esta operação à variável PROD.
  A seguir mostre a variável PROD com mensagem correspondente.

(Entrada)
  O arquivo de entrada contém 2 valores inteiros.

(Saída)
  Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
    PROD = 27
  Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [x, y] = input.split("\n").map((number) => parseInt(number));
const fnMultiply = (a, b) => a * b;
const prod = fnMultiply(x, y);
console.log(`PROD = ${prod}`);
