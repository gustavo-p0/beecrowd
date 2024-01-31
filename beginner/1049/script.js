/*
1049 - Animal
(Tarefas)
  .Ler 3 palavras que definem o tipo de animal possível segundo o esquema, da esquerda para a direita.
  .Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

(Entrada)
  .A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

(Saída)
  .Imprima o nome do animal correspondente à entrada fornecida.
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const words = input.split("\n");
const fnIdentify = (class1, class2, class3) => {
  let animal;
  switch (class1) {
    case "vertebrado":
      switch (class2) {
        case "ave":
          switch (class3) {
            case "carnivoro":
              animal = "aguia";
              break;
            case "onivoro":
              animal = "pomba";
              break;
          }
          break;
        case "mamifero":
          switch (class3) {
            case "onivoro":
              animal = "homem";
              break;
            case "herbivoro":
              animal = "vaca";
              break;
          }
          break;
      }
      break;
    case "invertebrado":
      switch (class2) {
        case "inseto":
          switch (class3) {
            case "hematofago":
              animal = "pulga";
              break;
            case "herbivoro":
              animal = "lagarta";
              break;
          }
          break;
        case "anelideo":
          switch (class3) {
            case "hematofago":
              animal = "sanguessuga";
              break;
            case "onivoro":
              animal = "minhoca";
              break;
          }
          break;
      }
      break;
  }
  return animal;
};
console.log(fnIdentify(...words));
