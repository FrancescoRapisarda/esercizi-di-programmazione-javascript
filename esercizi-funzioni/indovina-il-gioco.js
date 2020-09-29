/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/



//START


function gg(day) {
  if (day>0 && day<8) {
    console.log("TRUE");
    return true;
  } else {
    console.log("FALSE");
    return false;
  }
}

var giorno = gg(5);


function scriviGiorno(settimana) {
     var listaSett = new Array('Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato');
     return listaSett[5];
}
 var days = scriviGiorno(giorno);
if (giorno == true) {
console.log("Hai scelto correttamente un giorno della settimana: " + days + ".");
} else {
  console.log("Peccato! Non posso indovinare il giorno.");
}


//END
