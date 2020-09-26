/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/


//START


var n = 5;
var array = [0,1,2,3,4];

for (var i = 0; i<n; i++) {
array[0] = Math.floor(Math.random() * 10) + 1;
array[1] = Math.floor(Math.random() * 10) + 1;
array[2] = Math.floor(Math.random() * 10) + 1;
array[3] = Math.floor(Math.random() * 10) + 1;
array[4] = Math.floor(Math.random() * 10) + 1;
}

console.log(array);
console.log(array.reverse());



//END
