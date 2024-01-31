/*
1059 - Numeros pares
(Tarefas)
  .Mostre os números pares entre 1 e 100, inclusive.

(Entrada)
  .Nesssa repetição, não há entrada.

(Saída)
  .Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.Exemplo:
    2
    4
    6
   ...
   100
*/
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
