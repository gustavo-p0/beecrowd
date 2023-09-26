/*
1047 - Tempo de jogo com minutos
(Tarefas)
  .Leia de um jogo:
   .a hora inicial;
   .minuto inicial;
   .hora final;
   .minuto final.
  .A seguir calcule a duração do jogo.

  .Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

(Entrada)

  .Quatro números inteiros representando a hora de início e fim do jogo.

(Saída)
  .Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [startHr, startMin, finalHr, finalMin] = input
  .split(" ")
  .map((value) => parseInt(value));
const fnEvaluateTime = (startHr, startMin, finalHr, finalMin) => {
  let elapsedHours = 0;
  let elapsedMinutes = 0;

  if (startMin > finalMin) {
    elapsedMinutes = 60 - startMin + finalMin;
  } else {
    elapsedMinutes = finalMin - startMin;
  }

  if (startHr === finalHr) {
    if (elapsedMinutes === 0) {
      elapsedHours = 24;
    } else if (finalMin > startMin) {
      elapsedHours = 0;
    } else if (startMin > finalMin) {
      elapsedHours = 23;
    }
  } else if (startHr < finalHr) {
    if (finalMin < startMin) {
      elapsedHours = finalHr - startHr - 1;
    } else {
      elapsedHours = finalHr - startHr;
    }
  } else if (startHr > finalHr) {
    if (finalMin < startMin) {
      elapsedHours = 24 - startHr + finalHr - 1;
    } else {
      elapsedHours = 24 - startHr + finalHr;
    }
  }
  return { hours: elapsedHours, minutes: elapsedMinutes };
};

const elapsedTime = fnEvaluateTime(startHr, startMin, finalHr, finalMin);
console.log(
  `O JOGO DUROU ${elapsedTime.hours} HORA(S) E ${elapsedTime.minutes} MINUTO(S)`
);
