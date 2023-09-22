/*
1020 - Idade em dias
(Tarefas)
  . Leia a idade de uma pessoa em dias;
  . Informe-a em anos, meses e dias.
(Fatos)
  sObs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
  Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

(Entrada)

  . O arquivo de entrada contém um valor inteiro.

(Saída)

  . Imprima a saída conforme exemplo fornecido.Exemplo:
    1 ano(s)
    1 mes(es)
    5 dia(s)
*/

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const DAYS_IN_A_YEAR = 365;
const DAYS_IN_A_MONTH = 30;
const ageInDays = parseInt(input);
const fnConvertAge = (ageDays) => {
  let amount = ageDays;
  const years = Math.floor(amount / DAYS_IN_A_YEAR);
  amount -= years * DAYS_IN_A_YEAR;
  const months = Math.floor(amount / DAYS_IN_A_MONTH);
  amount -= months * DAYS_IN_A_MONTH;
  const days = amount;
  return [years, months, days];
};
const [years, months, days] = fnConvertAge(ageInDays);
console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);
