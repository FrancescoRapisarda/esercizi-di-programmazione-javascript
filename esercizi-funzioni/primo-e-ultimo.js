/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/


//START


function firstMax(a,b,c) {
  if (a>c) {
    console.log("Maggiore: " + a);
  }
  else if (b>c) {
    console.log("Maggiore: " + b);
  }
  else if (c>a) {
    console.log("Maggiore: " + c);
  }

}

function lastMin(a,b,c) {
  if (a<b) {
    console.log("Minore: " + a);
  }
  else if (b<c) {
    console.log("Minore: " + b);
  }
  else if (c<a) {
    console.log("Minore: " + c);
  }

}

var max = firstMax(1,-10,4);
var min = lastMin(1,-10,4);


//END
