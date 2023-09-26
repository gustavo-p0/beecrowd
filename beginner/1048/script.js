/*
1048 - Aumento de salário

(Fatos)
  .A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

    Salário                  Percentual de Reajuste
  0 - 400.00                        15%
  400.01 - 800.00                   12%
  800.01 - 1200.00                  10%
  1200.01 - 2000.00                 07%
  Acima de 2000.00                  04%

(Tarefas)
  .Leia o salário do funcionário;
  .Calcule o novo salário;
  .Mostre o novo salário;
  .Mostre o valor de reajuste ganho;
  .Mostre oíndice reajustado, em percentual.

(Entrada)

  .A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

(Saída)

  .Imprima 3 linhas na saída:
    .o novo salário (com 2 casas decimais);
    .o valor ganho de reajuste (com 2 casas decimais);
    .o percentual de reajuste ganho;
  .Conforme exemplo abaixo:
    Novo salario: 460.00
    Reajuste ganho: 60.00
    Em percentual: 15 %
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const salary = parseFloat(input);
const fnEvaluateReadjustment = (value) => {
  let readjustmentPercentual = 0;
  if (value > 0 && value <= 400) {
    readjustmentPercentual = 15;
  } else if (value > 400 && value <= 800) {
    readjustmentPercentual = 12;
  } else if (value > 800 && value <= 1200) {
    readjustmentPercentual = 10;
  } else if (value > 1200 && value <= 2000) {
    readjustmentPercentual = 7;
  } else if (value > 2000) {
    readjustmentPercentual = 4;
  }
  const readjustmentValue = value * (readjustmentPercentual / 100);
  const newValue = value + readjustmentValue;
  return {
    newValue: newValue,
    readjustmentValue: readjustmentValue,
    percentual: readjustmentPercentual,
  };
};

const summary = fnEvaluateReadjustment(salary);
console.log(`Novo salario: ${summary.newValue.toFixed(2)}`);
console.log(`Reajuste ganho: ${summary.readjustmentValue.toFixed(2)}`);
console.log(`Em percentual: ${summary.percentual} %`);
