/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/


//START

function fattoriale(n) {
  var totfactorial = 1;
    for (var i = n; i > 1; i--) {
      totfactorial = totfactorial*i;
    }
    console.log("Il fattoriale di " + n + " è: " + (totfactorial) + ".");
  }
  var factorial = fattoriale(5);


//END
