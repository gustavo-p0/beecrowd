const { Console } = require("console");

/*
1017 - Gasto de combustível
(Contextualização)
  .Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem.
  Para isso, ele gostaria que você o auxiliasse através de um simples programa.

(Fatos)
    .O automóvel faz 12 KM/L.

(Tarefas)
    . Obter a distância percorrida;
    . Calcular quantos litros seriam necessários.
      Para efetuar o cálculo, deve-se fornecer:
        .o tempo gasto na viagem (em horas);
        .a velocidade média durante a mesma (em km/h);
    . Mostre o valor com 3 casas decimais após o ponto.

(Entrada)
  . O arquivo de entrada contém dois inteiros.
    . O primeiro é o tempo gasto na viagem (em horas);
    . O segundo é a velocidade média durante a mesma (em km/h).

(Saída)
  . Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal.
  Exemplo: 70.833;
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const AVERAGE_KM_PER_LITER = 12;
const [tripTimeHr, averageSpeed] = input
  .split("\n")
  .map((value) => parseInt(value));
const gasSpend = (time, averageSpeed) => {
  const distance = averageSpeed * time;
  return distance / AVERAGE_KM_PER_LITER;
};
console.log(gasSpend(tripTimeHr, averageSpeed).toFixed(3));
