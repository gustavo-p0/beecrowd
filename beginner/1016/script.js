/*
1016 - Distância
(Contextualização)
  Dois carros (X e Y) partem em uma mesma direção.
    .O carro X sai com velocidade constante de 60 Km/h;
    .O carro Y sai com velocidade constante de 90 Km/h.
  (Fato)
    Em uma hora (60 min) o carro Y consegue se distanciar 30 km do carro X, ou seja, consegue se afastar 1 km a cada 2 min.

(Tarefas)
    .Leia a distância (em km);
    .Calcule quanto tempo leva (em min) para o carro Y tomar essa distância do outro carro.

(Entrada)
  O arquivo de entrada contém um número inteiro.

(Saída)
  Imprima o tempo necessário seguido da mensagem "minutos".
  Exemplo: 60 minutos
*/
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const distance = parseInt(input);
const minToFrontDistance = (km) => `${2 * km} minutos`;
console.log(minToFrontDistance(distance));
