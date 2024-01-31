/*
1009 - Salario com bonus
(Tarefas)

-> Faça um programa que leia:
  .o nome de um vendedor;
  .o salário fixo dele;
  .o total de vendas efetuadas por ele no mês (em dinheiro).
-> Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas:


(Entrada)

O arquivo de entrada contém um texto:
 .(primeiro nome do vendedor);
 .2 valores de dupla precisão (double) com duas casas decimais, representando:
    .o salário fixo do vendedor;
    .montante total das vendas efetuadas por este vendedor, respectivamente.

(Saída)

Imprima o total que o funcionário deverá receber, conforme exemplo fornecido:
  TOTAL = R$ 684.54
  (Tarefa)
    .informar o total a receber no final do mês, com duas casas decimais.
*/

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const SALER_COMISSION_PER_CENT = 15;
const infos = input.split("\n");
const salerName = infos[0];
const [fixedSalary, salesAmountValue] = [infos[1], infos[2]].map((value) =>
  parseFloat(value)
);
const fnSalaryWithBonus = (baseSalary, salesAmountValue) =>
  baseSalary + salesAmountValue * (SALER_COMISSION_PER_CENT / 100);
console.log(
  `TOTAL = R$ ${fnSalaryWithBonus(fixedSalary, salesAmountValue).toFixed(2)}`
);
