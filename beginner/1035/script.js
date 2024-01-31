/*
1035 - Teste de seleção 1
(Tarefas)
  . Leia 4 valores inteiros A, B, C e D.
  . A seguir:
     . se B for maior do que C;
     . e se D for maior do que A;
     . e se a soma de C com D for maior que a soma de A e B;
     . e se C e D, ambos, forem positivos;
     . e se a variável A for par
        . escrever a mensagem "Valores aceitos",
     .senão escrever "Valores nao aceitos".

(Entrada)

  Quatro números inteiros A, B, C e D.

(Saída)

  Mostre a respectiva mensagem após a validação dos valores.
    Valores nao aceitos
    Valores aceitos
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const values = input.split(" ").map((value) => parseInt(value));

const fnCheckPrint = (a, b, c, d) => {
  if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
    console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }
};

fnCheckPrint(...values);
