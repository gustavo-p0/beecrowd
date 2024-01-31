/*
1064 - Positivos e média
(Tarefas)
  .Leia 6 valores.
  .Mostre quantos destes valores digitados foram positivos.
  .Mostrar a média de todos os valores positivos digitados.
(Entrada)
  .A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.
(Saída)
  .O primeiro valor de saída é a quantidade de valores positivos.
  .A próxima linha deve mostrar a média dos valores positivos digitados, com um dígito após o ponto decimal.
  4 valores positivos
  7.4
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const values = input
  .trim()
  .split("\n")
  .map((value) => parseFloat(value));
const fnPositives = (values) => {
  let positives = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
      positives.push(values[i]);
    }
  }
  return positives;
};
const fnPositivesMedia = (values) => {
  let media = 0;
  for (let i = 0; i < values.length; i++) {
    media += values[i];
  }
  media /= parseInt(values.length);
  return media;
};
const positives = fnPositives(values);
const positivesMedia = fnPositivesMedia(positives);
console.log(`${positives.length} valores positivos`);
console.log(`${positivesMedia.toFixed(1)}`);
