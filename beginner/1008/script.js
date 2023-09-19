/*
1008 - Salario

(Tarefas)
Escreva um programa que leia:
  1.o número de um funcionário;
  2.seu número de horas trabalhadas;
  3.o valor que recebe por hora;
Em seguida, calcule o salário desse funcionário.
A seguir, mostre o número; E o salário do funcionário, com duas casas decimais.

(Entrada)

O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando:
  .o número;
  .quantidade de horas trabalhadas;
  .o valor que o funcionário recebe por hora trabalhada.

(Saída)

Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade.
No caso do salário, também deve haver um espaço em branco após o $.
Exemplo:
  NUMBER = 25
  SALARY = U$ 550.00
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const infos = input.split("\n");
const [funcNum, qtyWorkedHours] = [infos[0], infos[1]].map((item) =>
  parseInt(item)
);
const valueWorkHour = parseFloat(infos[2]);
const fnSalary = (hrs, hrValue) => hrs * hrValue;
console.log(
  `NUMBER = ${funcNum}\nSALARY = U$ ${fnSalary(
    qtyWorkedHours,
    valueWorkHour
  ).toFixed(2)}`
);
