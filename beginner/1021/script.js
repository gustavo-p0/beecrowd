/*
1021 - Notas e moedas
(Tarefas)
  . Leia um valor de ponto flutuante com duas casas decimais.
  . Calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto.
  . Mostre a relação de notas necessárias.

(Fatos)
  . As notas consideradas são:
    100
    50
    20
    10
    5
    2
  . As moedas possíveis são:
    1
    0.50
    0.25
    0.10
    0.05
    0.01


(Entrada)

  . O arquivo de entrada contém um valor de ponto flutuante N
    (0 ≤ N ≤ 1.000.000,00).
  . Este valor representa um valor monetário.

(Saída)

  . Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

  . Obs: Utilize ponto (.) para separar a parte decimal.Exemplo:
      NOTAS:
      5 nota(s) de R$ 100.00
      1 nota(s) de R$ 50.00
      1 nota(s) de R$ 20.00
      0 nota(s) de R$ 10.00
      1 nota(s) de R$ 5.00
      0 nota(s) de R$ 2.00
      MOEDAS:
      1 moeda(s) de R$ 1.00
      1 moeda(s) de R$ 0.50
      0 moeda(s) de R$ 0.25
      2 moeda(s) de R$ 0.10
      0 moeda(s) de R$ 0.05
      3 moeda(s) de R$ 0.01
*/

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const monetaryValue = parseFloat(input);
const fnConvertValueToBillsAndCoins = (value) => {
  let amount = value;
  const possibleBills = new Map();
  possibleBills.set(100, 0);
  possibleBills.set(50, 0);
  possibleBills.set(20, 0);
  possibleBills.set(10, 0);
  possibleBills.set(5, 0);
  possibleBills.set(2, 0);

  for (const [bill] of possibleBills) {
    const qty = Math.floor(amount / bill);
    amount -= +(qty * bill);
    amount = +amount.toFixed(2);
    possibleBills.set(bill, qty);
  }

  const possibleCoins = new Map();
  possibleCoins.set(1, 0);
  possibleCoins.set(0.5, 0);
  possibleCoins.set(0.25, 0);
  possibleCoins.set(0.1, 0);
  possibleCoins.set(0.05, 0);
  possibleCoins.set(0.01, 0);

  for (const [coin] of possibleCoins) {
    const qty = Math.floor(amount / coin);
    amount -= +(qty * coin);
    amount = +amount.toFixed(2);
    possibleCoins.set(coin, qty);
  }

  return [possibleBills, possibleCoins];
};

const fnPrintBills = (bills) => {
  console.log("NOTAS:");
  for (const [bill, qty] of bills) {
    console.log(`${qty} nota(s) de R$ ${bill}.00`);
  }
};

const fnPrintCoins = (coins) => {
  console.log("MOEDAS:");
  for (const [coin, qty] of coins) {
    let keyStr = "";
    switch (coin) {
      case 1:
        keyStr = "1.00";
        break;
      case 0.5:
        keyStr = "0.50";
        break;
      case 0.1:
        keyStr = "0.10";
        break;
      default:
        keyStr = coin;
    }
    console.log(`${qty} moeda(s) de R$ ${keyStr}`);
  }
};
const [bills, coins] = fnConvertValueToBillsAndCoins(monetaryValue);
fnPrintBills(bills);
fnPrintCoins(coins);
