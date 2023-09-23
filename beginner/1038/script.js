/*
1038 - Lanche

(Fatos)
  .Com base na tabela abaixo:

  cod    especificacação    preco
  1      cachorro quente    R$ 4.00
  2      x-salada           R$ 4.50
  3      x-bacon            R$ 5.00
  4      torrada simples    R$ 2.00
  5      refrigerante       R$ 1.50

(Tarefas)
  .Escreva um programa que leia o código de um item;
  .A quantidade deste item;
  .A seguir, calcule e mostre o valor da conta a pagar.

(Entrada)

  .O arquivo de entrada contém dois valores inteiros conforme tabela acima:
     .correspondentes ao código;
     .quantidade de um item .

(Saída)

  .O arquivo de saída deve conter a mensagem:
    "Total: R$ " seguido pelo valor a ser pago
    .Com 2 casas após o ponto decimal.
  Exemplo:
    Total: R$ 10.00
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [itemCode, itemQty] = input.split(" ").map((value) => parseInt(value));
const fnPrintTotal = (cod, qty) => {
  const menu = {
    1: { name: "Cachorro Quente", price: 4.0 },
    2: { name: "X-Salada", price: 4.5 },
    3: { name: "X-Bacon", price: 5.0 },
    4: { name: "Torrada simples", price: 2.0 },
    5: { name: "Refrigerante", price: 1.5 },
  };
  const total = menu[cod].price * qty;
  console.log(`Total: R$ ${total.toFixed(2)}`);
};
fnPrintTotal(itemCode, itemQty);
