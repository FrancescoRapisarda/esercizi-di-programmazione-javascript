/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/



//START

const n = 9999;


if (n > 0 && n < 10) {
  console.log(n + " è un numero a 1 cifra!")
} else if (n > 9 && n < 100) {
  console.log(n + " è un numero a 2 cifre!");
} else if (n > 99 && n < 1000) {
  console.log(n + " è un numero a 3 cifre!");
} else if (n > 999 && n < 10000) {
  console.log(n + " è un numero a 4 cifre!");
} else {
  console.log("Ehi! Sembra che tu abbia scritto un numero troppo alto!");
  console.log("Cifra max consentita: 9999.");
}


//END


/* PS.
Grazie Alberto per gli esercizi che hai messo gratuitamente fruibili, 
mi sto davvero divertendo e sto imparando a ragionare sul problema, cosa che prima non sapevo fare!
Grazie ancora, ti seguo molto volentieri, le tue informazioni e le tue risorse sono molto preziose, continua cosi.. */
