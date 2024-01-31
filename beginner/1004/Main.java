/*
1004 - Produto simples
(Tarefas)
  .Leia dois valores inteiros;
  .Calcule o produto entre estes dois valores;
  .Atribua esta operação à variável PROD.
  .A seguir mostre a variável PROD com mensagem correspondente.

(Entrada)

  .O arquivo de entrada contém 2 valores inteiros.

(Saída)

  .Imprima a mensagem "PROD" e a variável PROD:
    .com um espaço em branco antes e depois da igualdade.
  .Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
  .Exemplo:
    PROD = 27
 */

import java.io.IOException;
import java.util.Scanner;
public class Main {
  public static void main(String[] args) throws IOException{
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    sc.close();
    int prod = a * b;
    System.out.printf("PROD = %d%n", prod);
  }
}
