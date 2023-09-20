/*
1014 - Consumo
(Tarefas)
  .Calcule o consumo médio de um automóvel a partir da:
   .distância total percorrida (em Km);
   .do total de combustível gasto (em litros).

(Entrada)

O arquivo de entrada contém dois valores:
 .um valor inteiro X representando a distância total percorrida (em Km);
 .um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

(Saída)

  .Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".Exemplo:
    14.286 km/l
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const values = input.split("\n");
const travelledKmDistance = parseInt(values.shift());
const consumedGasLiters = parseFloat(values.shift());
const fnGasAverage = (km, liters) => `${(km / liters).toFixed(3)} km/l`;
console.log(fnGasAverage(travelledKmDistance, consumedGasLiters));
