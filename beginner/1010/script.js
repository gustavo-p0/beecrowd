/*
1010 - Calculo simples
(Tarefas)
Neste problema:
  Peça 1:
    .deve-se ler o código de uma peça 1;
    .o número de peças 1;
    .o valor unitário de cada peça 1.
  Peça 2:
    .o código de uma peça 2;
    .o número de peças 2;
    .o valor unitário de cada peça 2.
  .Após, calcule e mostre o valor a ser pago.
  .O valor deverá ser apresentado com 2 casas após o ponto.
(Entrada)
  O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

(Saída)
  A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$".
    VALOR A PAGAR: R$ 15.50
*/

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [pieceOneData, pieceTwoData] = input.split("\n");

const splittedpieceOneData = pieceOneData.split(" ");
const splittedpieceTwoData = pieceTwoData.split(" ");
const fnTotal = (qty, unityValue) => qty * unityValue;
const significantOneData = splittedpieceOneData.slice(1);
const significantTwoData = splittedpieceTwoData.slice(1);
const total = fnTotal(...significantOneData) + fnTotal(...significantTwoData);
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
