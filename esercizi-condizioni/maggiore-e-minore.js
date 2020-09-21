/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/


//START


var a = 3;
var b = -1;
var c = 4;
var d = -2;

var max;
var min;

if (a > b) {
  max = a;
  min = b;
} else {
  min = a;
  max = b;
}
if (c > max) {
  max = c;
  min = min;
} else {
  min = c;
  max = max;
}
if (d > max) {
  max = d;
  min = min;
} else {
  min = d;
  max = max;
}

console.log("Il numero maggiore è: " + max);
console.log("Il numero minore è: " + min);



//END
