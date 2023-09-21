/*
1018 - Cedulas
(Tarefas)
  . Leia um valor inteiro.
  . Calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto.
  . As notas consideradas são:
     100
     50
     20
     10
     5
     2
     1.
  . A seguir mostre o valor lido e a relação de notas necessárias.

(Entrada)

   . O arquivo de entrada contém um valor inteiro N.
   . (0 < N < 1.000.000).

(Saída)

  . Imprima o valor lido;
  . A quantidade mínima de notas de cada tipo necessárias;
    Exemplo:

    576
    5 nota(s) de R$ 100,00
    1 nota(s) de R$ 50,00
    1 nota(s) de R$ 20,00
    0 nota(s) de R$ 10,00
    1 nota(s) de R$ 5,00
    0 nota(s) de R$ 2,00
    1 nota(s) de R$ 1,00

  Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const moneyValue = parseInt(input);

const convertValueToBillsObj = (value) => {
  const bills = { 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
  let amount = value;
  const keys = Object.keys(bills);
  for (let i = keys.length - 1; i >= 0; i--) {
    const bill = keys[i];
    bills[bill] = Math.floor(amount / bill);
    amount = amount % bill;
  }
  return bills;
};

const billsObj = convertValueToBillsObj(moneyValue);
const printBills = (money, bills) => {
  const entries = Object.entries(bills);
  console.log(money);
  for (let i = entries.length - 1; i >= 0; i--) {
    const [value, qty] = entries[i];
    console.log(`${qty} nota(s) de R$ ${value},00`);
  }
};

printBills(moneyValue, billsObj);
