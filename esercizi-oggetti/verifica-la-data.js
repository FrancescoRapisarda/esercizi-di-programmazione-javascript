/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/



//START

var data = new Object();
  data.giorno = 2;
  data.mese = 13;
  data.anno = 1989;

  if (data.mese > 12) {
    console.log("Ehi! I mesi sono solo 12!");
  } else {
    console.log("Sei nato giorno " + data.giorno + " nel " + data.mese + "' mese del " + data.anno + "!");
  }


//END
