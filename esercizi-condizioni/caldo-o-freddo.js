/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/


//START

var t = new Array (-2,31,22,15,-6,7);
var piuCaldo = 0;
var piuFreddo = 0;
  for (var i = 0; i < t.length; i++) {
    if (i==0) {
      piuCaldo = t[0];
      piuFreddo = t[0];
    }
    else if (t[i]>piuCaldo) {
      piuCaldo = t[i];
    }
    else if (t[i]<piuFreddo) {
      piuFreddo = t[i];
    }
  }

console.log("La temperatura più alta registrata è: " + piuCaldo);
console.log("La temperatura più bassa registrata è: " + piuFreddo);


//END
