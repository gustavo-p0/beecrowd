/*
1002 - Area do circulo

(Fatos)
  .área de uma circunferência = π . Math.pow(raio,2).
  .π = 3.14159;

(Tarefas)
  .Efetue o cálculo da área;

(Entrada)
  .A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

(Saída)
  .Apresentar a mensagem "A=" seguido pelo valor da variável area;
  .Conforme exemplo abaixo, com 4 casas após o ponto decimal.
  .Exemplo:
    A=12.5664

  Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

 */

import java.io.IOException;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) throws IOException{
    double PI = 3.14159;
    Scanner sc = new Scanner(System.in);
    double radius = sc.nextDouble();
    sc.close();
    double area = PI * Math.pow(radius, 2.0);
    System.out.printf("A=%.4f%n", area);
  }
}
