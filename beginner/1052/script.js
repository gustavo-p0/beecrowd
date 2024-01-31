/*
1052 - Mes

(Tarefas)
  .Leia um valor inteiro entre 1 e 12, inclusive;
  .Apresente o mês do ano por extenso, em inglês, capitalizado.

(Entrada)
  .A entrada contém um único valor inteiro.

(Saída)
  .Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.Exemplo:
    April
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const monthNumber = parseInt(input);
const fnMonthName = (number) => {
  let monthName;
  switch (number) {
    case 1:
      monthName = "January";
      break;
    case 2:
      monthName = "February";
      break;
    case 3:
      monthName = "March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = "July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "December";
      break;
  }
  return monthName;
};
console.log(fnMonthName(monthNumber));
