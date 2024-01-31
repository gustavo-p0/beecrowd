/*
1037 - Intervalo
(Tarefas)
  . Você deve fazer um programa que leia um valor qualquer;
  . Apresente uma mensagem dizendo em qual dos seguintes intervalos, este valor se encontra:
    [0,25],
    (25,50],
    (50,75],
    (75,100]
  . Obviamente se o valor não estiver em nenhum destes intervalos:
    . Deverá ser impressa a mensagem “Fora de intervalo”.

(Fatos)
  .O símbolo ( representa "maior que".
  Por exemplo:
    [0,25]  indica valores entre 0 e 25.0000, inclusive eles.
    (25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

(Entrada)

  O arquivo de entrada contém um número com ponto flutuante qualquer.

(Saída)

  A saída deve ser uma mensagem conforme exemplo abaixo.
      Intervalo (25,50]
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const value = parseFloat(input);
const fnPrintInterval = (value) => {
  let interval = "";
  if (value >= 0 && value <= 25) {
    interval = "[0,25]";
  } else if (value > 25 && value <= 50) {
    interval = "(25,50]";
  } else if (value > 50 && value <= 75) {
    interval = "(50,75]";
  } else if (value > 75 && value <= 100) {
    interval = "(75,100]";
  } else {
    console.log("Fora de intervalo");
    return;
  }
  console.log(`Intervalo ${interval}`);
};
fnPrintInterval(value);
