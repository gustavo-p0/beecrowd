/*
1019 - Conversão de tempo
(Tarefas)
  . Leia o tempo de duração em segundos(S) de um determinado evento em uma fábrica;
  . informe-o expresso no formato H:M:S.

(Entrada)
  . O arquivo de entrada contém um valor inteiro N.

(Saída)

  . Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
  Exemplo: 0:9:16
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const elapsedSeconds = parseInt(input);
const fnFormatTime = (elapsedSeconds) => {
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = Math.floor((elapsedSeconds % 3600) % 60);
  return `${hours}:${minutes}:${seconds}`;
};
console.log(fnFormatTime(elapsedSeconds));
