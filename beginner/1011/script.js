/*
1011 - Esfera
(Fatos)
  .A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.
(Tarefas)
  .Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R).
  .O valor deverá ser apresentado com 3 casas após o ponto.
  (Dica)
    Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.

(Entrada)
  O arquivo de entrada contém um valor de ponto flutuante (dupla precisão), correspondente ao raio da esfera.

(Saída)
  A saída deverá ser uma mensagem "VOLUME" conforme o exemplo fornecido abaixo, com um espaço antes e um espaço depois da igualdade.
    VOLUME = 113.097
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const PI = 3.14159;
const sphereRadius = parseFloat(input);
const fnSphereVolume = (radius) => (4.0 / 3.0) * PI * Math.pow(radius, 3);
console.log(`VOLUME = ${fnSphereVolume(sphereRadius).toFixed(3)}`);
