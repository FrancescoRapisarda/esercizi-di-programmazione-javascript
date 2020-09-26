/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/


//START


var a = [3,5,10,2,8];
var numMin = [];
var numMax = [];

mediaA = (a[0] + a[1] + a[2] + a[3] + a[4])/5;

console.log("Media numeri Array: " + mediaA);

if (mediaA < a[0]) {
numMax[0] = a[0];
} else {
  numMin[0] = a[0];
}
if (mediaA < a[1]) {
  numMax[1] = a[1];
} else {
  numMin[1] = a[1];
}
if (mediaA < a[2]) {
numMax[2] = a[2];
} else {
  numMin[2] = a[2];
}
if (mediaA < a[3]) {
numMax[3] = a[3];
} else {
  numMin[3] = a[3];
}
if (mediaA < a[4]) {
numMax[4] = a[4];
} else {
  numMin[4] = a[4];
}

console.log("Valori Minori della media: " + numMin);
console.log("Valori maggiori della media: " + numMax);



/END
