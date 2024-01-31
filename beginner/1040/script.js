/*
1040 - Média 3

(Tarefas)

  .Leia quatro números (N1, N2, N3, N4);
  .Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas;
  .Mostre esta média acompanhada pela mensagem "Media: ".
  (Condições)
    .Se esta média for maior ou igual a 7.0:
      .Imprima a mensagem "Aluno aprovado.";
    .Se a média calculada for inferior a 5.0:
      .Imprima a mensagem "Aluno reprovado.".
    .Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas:
      .Imprima a mensagem "Aluno em exame.".

    No caso do aluno estar em exame:
      .Leia um valor correspondente à nota do exame obtida pelo aluno.
      .Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada.
      .Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2).
      .Imprima:
        .a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais )
        .a mensagem "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos).
      Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.

(Entrada)

  .A entrada contém 4 números de ponto flutuante, cada um deles com uma casa decimal, correspondente às quatro notas de um aluno.

(Saída)

  .Todas as respostas devem ser apresentadas com uma casa decimal. As mensagens devem ser impressas conforme a descrição do problema. Não esqueça de imprimir o enter após o final de cada linha, caso contrário obterá "Presentation Error".
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [grades, exam] = input.split("\n");
const [n1, n2, n3, n4] = grades.split(" ").map((value) => parseFloat(value));
const examValue = parseFloat(exam);
const fnGradesMedia = (...values) => {
  let total = 0;
  const weights = [2, 3, 4, 1];
  const weightsSum = weights.reduce((acc, weight) => (acc += weight), 0);
  for (const [i, value] of values.entries()) {
    total += value * weights[i];
  }
  return total / weightsSum;
};

const fnPrintCondition = (media) => {
  if (media >= 7.0) {
    console.log(`Aluno aprovado.`);
  } else if (media < 5.0) {
    console.log(`Aluno reprovado.`);
  }
};

const hasExam = (media) => {
  return media >= 7.0 || media < 5 ? false : true;
};
const fnMakeMediaWithExam = (media, exam) => {
  return (media + exam) / 2;
};

const fnPrintExamCondition = (media) => {
  if (media >= 5.0) {
    console.log(`Aluno aprovado.`);
  } else {
    console.log(`Aluno reprovado.`);
  }
};
const media = fnGradesMedia(n1, n2, n3, n4);
console.log(`Media: ${media.toFixed(1)}`);
fnPrintCondition(media);
if (hasExam(media)) {
  console.log(`Aluno em exame.`);
  console.log(`Nota do exame: ${examValue.toFixed(1)}`);
  const newMedia = fnMakeMediaWithExam(media, examValue);
  fnPrintExamCondition(examValue);
  console.log(`Media final: ${newMedia.toFixed(1)}`);
}
