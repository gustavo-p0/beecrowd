/*
1043 - Triângulo

(Tarefas)
  .Leia 3 valores reais (A, B e C);
  .Verifique se eles formam ou não um triângulo.
  .Em caso positivo, calcule o perímetro do triângulo;
  .Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura;

(Entrada)
  .A entrada contém três valores reais.

(Saída)
  .O resultado deve ser apresentado com uma casa decimal.
  .Exemplo:
    Perimetro = XX.X
    Area = XX.X
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [a, b, c] = input.split(" ").map((value) => parseFloat(value));
const fnCanBeATriangle = (x, y, z) => {
  if (x + y > z && x + z > y && y + z > x) {
    return true;
  }
  return false;
};
const fnTrianglePerimeter = (x, y, z) => x + y + z;
const fnTrapeziumArea = (b1, b2, h) => ((b1 + b2) * h) / 2;
const isTriangle = fnCanBeATriangle(a, b, c);
if (isTriangle) {
  console.log(`Perimetro = ${fnTrianglePerimeter(a, b, c).toFixed(1)}`);
} else {
  console.log(`Area = ${fnTrapeziumArea(a, b, c).toFixed(1)}`);
}
