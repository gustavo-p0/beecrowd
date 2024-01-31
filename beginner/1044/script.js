/*
1044 - Múltiplos
(Tarefas)
  .Leia 2 valores inteiros (A e B);
  .Indique-se os valores são múltiplos entre si;
  .Imprima:
    ."Sao Multiplos";
    ."Nao sao Multiplos"
(Entrada)
  A entrada contém valores inteiros.

(Saída)
  A saída deve conter uma das mensagens conforme descrito acima.
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [a, b] = input.split(" ").map((value) => parseInt(value));
const fnAreMultiples = (a, b) => {
  if (a % b === 0 || b % a === 0) {
    return true;
  } else {
    return false;
  }
};
const areMultiple = fnAreMultiples(a, b);
if (areMultiple) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
