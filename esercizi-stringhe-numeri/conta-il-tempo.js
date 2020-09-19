/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/


//START

var sec = 12560;

var totH = Math.round(sec/3600);

var totM = Math.round((sec%3600)/60);

var totSec = Math.round((sec%3600)%60);

console.log(sec + " secondo/i equivalgono a " + totH + " ora/e, " + totM + " minuto/i e " + totSec + " secondo/i.");


//END
