/*
(FATO)
  A fórmula para calcular a área de uma circunferência é:
    area = π . raio . raio
    Considerando para este problema que π = 3.14159:

(Problema)
  Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

  Utilize variáveis de dupla precisão (double).
(Entrada)

  A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

(Saída)
  Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal.
    A=12.5664

  Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*/

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const PI = 3.14159;
const radiusInputNum = parseFloat(input);
const fnArea = (radius) => (Math.pow(radius, 2) * PI).toFixed(4);
const area = fnArea(radiusInputNum);
console.log(`A=${area}`);
