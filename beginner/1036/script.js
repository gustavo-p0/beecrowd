/*
1036 - Fórmula de Bhaskara

(Fatos)
  delta = pow(b,2) - 4*a*c;
  x1 = (- b + sqrt(delta)) / 2a;
  x2 = (-b - sqrt(delta)) / 2a;
(Tarefas)
  . Leia 3 valores de ponto flutuante;
  . Efetue o cálculo das raízes da equação de Bhaskara.
  . Se não for possível calcular as raízes:
    . Mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

(Entrada)

  . Leia três valores de ponto flutuante (double) A, B e C.

(Saída)

  . Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular".
  . Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo.
    R1 = -0.29788
    R2 = -1.71212
  . Imprima sempre o final de linha após cada mensagem.
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [a, b, c] = input.split(" ").map((value) => parseFloat(value));
const fnBhaskara = (a, b, c) => {
  const delta = Math.pow(b, 2) - 4 * a * c;
  if (a !== 0 && delta >= 0) {
    const deltaSqrt2 = Math.sqrt(delta, 2);
    const x1 = (-b + deltaSqrt2) / (2 * a);
    const x2 = (-b - deltaSqrt2) / (2 * a);
    console.log(`R1 = ${x1.toFixed(5)}`);
    console.log(`R2 = ${x2.toFixed(5)}`);
  } else {
    console.log("Impossivel calcular");
  }
};

fnBhaskara(a, b, c);
