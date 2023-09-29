/*
1066 - Pares, ímpares, positivos e negativos
(Tarefas)
  .Leia 5 valores Inteiros.
  .Mostre:
    .quantos valores digitados foram pares;
    .quantos valores digitados foram ímpares;
    .quantos valores digitados foram positivos;
    .quantos valores digitados foram negativos.

(Entrada)
  .O arquivo de entrada contém 5 valores inteiros quaisquer.

(Saída)
  .Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
  3 valor(es) par(es)
  2 valor(es) impar(es)
  1 valor(es) positivo(s)
  3 valor(es) negativo(s)
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const values = input
  .trim()
  .split("\n")
  .map((value) => parseInt(value));
const fnCountInfo = (numbers) => {
  let oddCount = 0;
  let evenCount = 0;
  let positiveCount = 0;
  let negativeCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 0) {
      negativeCount++;
    } else if (number > 0) {
      positiveCount++;
    }
    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return { oddCount, evenCount, positiveCount, negativeCount };
};
const info = fnCountInfo(values);
console.log(`${info.evenCount} valor(es) par(es)`);
console.log(`${info.oddCount} valor(es) impar(es)`);
console.log(`${info.positiveCount} valor(es) positivo(s)`);
console.log(`${info.negativeCount} valor(es) negativo(s)`);
