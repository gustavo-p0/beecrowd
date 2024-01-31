/*
1005 - Media 1

(Tarefas)
  .Leia 2 valores de ponto flutuante de dupla precisão A e B:
    .correspondem a 2 notas de um aluno.
  .Calcule a média do aluno:
    .a nota A tem peso 3.5;
    .a nota B tem peso 7.5
    .(A soma dos pesos portanto é 11);
  .Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

(Entrada)
  .2 valores com uma casa decimal cada um.

(Saída)
  .Imprima a mensagem "MEDIA" e a média do aluno;
  .com 5 dígitos após o ponto decimal;
  .com um espaço em branco antes e depois da igualdade.
  .Exemplo:
    MEDIA = 6.43182

  Utilize variáveis de dupla precisão (double) e como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
 */

import java.io.IOException;
import java.util.Scanner;
public class Main {
  public static void main(String[] args) throws IOException {
    double WEIGHT_A = 3.5;
    double WEIGHT_B = 7.5;
    Scanner sc = new Scanner(System.in);
    double a = sc.nextDouble();
    double b = sc.nextDouble();
    sc.close();
    double media = (a * WEIGHT_A + b * WEIGHT_B) / (WEIGHT_A + WEIGHT_B);
    System.out.printf("MEDIA = %.5f%n", media);
  }
}
