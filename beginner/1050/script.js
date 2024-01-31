/*
1050 - DDD
(Fatos)
  61 Brasilia
  71 Salvador
  11 São Paulo
  21 Rio de Janeiro
  32 Juiz de Fora
  19 Campinas
  27 Vitória
  31 Belo Horizonte

(Tarefas)
  .Leia um código de DDD para discagem interurbana, um número inteiro;
  .Informe à qual cidade o DDD pertence.
  .Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
    "DDD nao cadastrado"


(Entrada)
  .A entrada consiste de um único valor inteiro.

(Saída)
  .Imprima o nome da cidade correspondente ao DDD existente na entrada''
  .Imprima "DDD nao cadastrado" caso não existir DDD correspondente ao número digitado.Exemplos:
    Sao Paulo
    DDD nao cadastrado
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const dddNumber = parseInt(input);
const fnDDDRegion = (ddd) => {
  let region;
  switch (ddd) {
    case 61:
      region = "Brasilia";
      break;
    case 71:
      region = "Salvador";
      break;
    case 11:
      region = "Sao Paulo";
      break;
    case 21:
      region = "Rio de Janeiro";
      break;
    case 32:
      region = "Juiz de Fora";
      break;
    case 19:
      region = "Campinas";
      break;
    case 27:
      region = "Vitoria";
      break;
    case 31:
      region = "Belo Horizonte";
      break;
    default:
      region = "DDD nao cadastrado";
  }

  return region;
};
console.log(fnDDDRegion(dddNumber));
