/*
1015 - Distância entre dois pontos
(Tarefas)
  . Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano:
    p1(x1,y1) e p2(x2,y2)
  . Calcule a distância entre eles.
    distancia = sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))
  . Mostrando 4 casas decimais após a vírgula.

(Entrada)
  O arquivo de entrada contém duas linhas de dados.
    .A primeira contém dois valores de ponto flutuante: x1 y1;
    .A segunda contém dois valores de ponto flutuante: x2 y2.

(Saída)
  Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.Exemplo:
    4.4721
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");
const convertStrToObj = (str) =>
  str.split(" ").reduce((acc, item, index) => {
    const value = parseFloat(item);
    if (index === 0) {
      acc.x = value;
    } else {
      acc.y = value;
    }
    return acc;
  }, {});
const p1 = convertStrToObj(lines[0]);
const p2 = convertStrToObj(lines[1]);
const distanceBetweenTwoPoints = (p1, p2) =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2), 2);
const distance = distanceBetweenTwoPoints(p1, p2);
console.log(`${distance.toFixed(4)}`);
