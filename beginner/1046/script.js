/*
1046 - Tempo de jogo
(Tarefas)
  .Leia a hora inicial e a hora final de um jogo.
  .Calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

(Entrada)

  .A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

(Saída)
  .Apresente a duração do jogo conforme exemplo abaixo.
  O JOGO DUROU 10 HORA(S)
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [startHr, endHr] = input.split(" ").map((value) => parseInt(value));
const fnHrDuration = (start, end) => {
  let duration = 0;
  if (end < start || end === start) {
    duration = 24 - start + end;
  } else {
    duration = end - start;
  }
  return duration;
};
console.log(`O JOGO DUROU ${fnHrDuration(startHr, endHr)} HORA(S)`);
