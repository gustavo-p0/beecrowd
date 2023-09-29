/*
1061 - Tempo de um evento

(Tarefas)
  O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.
  Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

(Entrada)

   .Na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar.
   .Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss.
   .Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

(Saída)

  .Na saída, deve ser apresentada a duração do evento, no seguinte formato:

  W dia(s)
  X hora(s)
  Y minuto(s)
  Z segundo(s)

Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [startDayStr, startHourStr, finalDayStr, finalHourStr] =
  input.split("\n");
const startDayNumber = parseInt(startDayStr.split(" ").pop());
const [startHour, startMin, startSec] = startHourStr
  .split(":")
  .map((value) => parseInt(value.trim()));
const finalDayNumber = parseInt(finalDayStr.split(" ").pop());
const [finalHour, finalMin, finalSec] = finalHourStr
  .split(":")
  .map((value) => parseInt(value.trim()));
const start = {
  day: startDayNumber,
  hour: startHour,
  min: startMin,
  sec: startSec,
};

const final = {
  day: finalDayNumber,
  hour: finalHour,
  min: finalMin,
  sec: finalSec,
};

const fnPrintElapsedTime = (start, final) => {
  const DAY_IN_SECONDS = 24 * 60 * 60;
  const HOUR_IN_SECONDS = 60 * 60;
  const SECONDS = 60;
  const startTimestamp =
    start.day * DAY_IN_SECONDS +
    start.hour * HOUR_IN_SECONDS +
    start.min * SECONDS +
    start.sec;
  const finalTimestamp =
    final.day * DAY_IN_SECONDS +
    final.hour * HOUR_IN_SECONDS +
    final.min * SECONDS +
    final.sec;
  const elapsedTime = finalTimestamp - startTimestamp;
  const days = Math.floor(elapsedTime / DAY_IN_SECONDS);
  const hours = Math.floor((elapsedTime % DAY_IN_SECONDS) / HOUR_IN_SECONDS);
  const mins = Math.floor(
    ((elapsedTime % DAY_IN_SECONDS) % HOUR_IN_SECONDS) / SECONDS
  );
  const secs = Math.floor(
    ((elapsedTime % DAY_IN_SECONDS) % HOUR_IN_SECONDS) % SECONDS
  );

  console.log(`${days} dia(s)
${hours} hora(s)
${mins} minuto(s)
${secs} segundo(s)`);
};
fnPrintElapsedTime(start, final);
