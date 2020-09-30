/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/


//START


var playerOne = 5;
var playerTwo = 10;
var quantoMancaOne;
var quantoMancaTwo;

var randomNumber = Math.floor((Math.random()*(100-1) + 1));
quantoMancaOne = Math.abs(randomNumber - playerOne);
quantoMancaTwo = Math.abs(randomNumber - playerTwo);

console.log("Numero casuale generato: " + randomNumber);

if (playerOne == randomNumber) {
  console.log("Giocatore 1 ha lanciato " + playerOne + " e ci ha azzeccato!");
}
else if (playerTwo == randomNumber) {
  console.log("Giocatore 2 ha lanciato " + playerTwo + " e ci ha azzeccato!");
}
else if (quantoMancaOne > quantoMancaTwo) {
  console.log("Nessuno dei due Giocatori ha azzeccato il numero casuale, ma Player 2 ha lanciato " + playerTwo + " e si è avvicinato di più!");
}
else {
  console.log("Nessuno dei due Giocatori ha azzeccato il numero casuale, ma Player 1 ha lanciato " + playerOne + " e si è avvicinato di più!");
}


//END
