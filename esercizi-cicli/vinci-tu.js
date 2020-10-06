/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


//START


var player1 = [0,1,2];
var player2 = [0,1,2];
var totPlayer1;
var totPlayer2;

  player1[0] = Math.floor(Math.random()*(7-1)+1);
  player1[1] = Math.floor(Math.random()*(7-1)+1);
  player1[2] = Math.floor(Math.random()*(7-1)+1);

totPlayer1 = player1[0] + player1[1] + player1[2];
console.log("Player1!");
console.log("Dado1: " + player1[0] + "  Dado2: " + player1[1] + "  Dado3: " + player1[2]);
console.log("Punteggio Giocatore Uno: " + totPlayer1);


  player2[0] = Math.floor(Math.random()*(7-1)+1);
  player2[1] = Math.floor(Math.random()*(7-1)+1);
  player2[2] = Math.floor(Math.random()*(7-1)+1);

totPlayer2 = player2[0] + player2[1] + player2[2];
console.log(" ");
console.log("Player2!");
console.log("Dado1: " + player2[0] + "  Dado2: " + player2[1] + "  Dado3: " + player2[2]);
console.log("Punteggio Giocatore Due: " + totPlayer2);


if (totPlayer1 > totPlayer2) {
    console.log(" ");
    console.log("Giocatore Uno: hai vinto tu!");
}
else if (totPlayer1 == totPlayer2) {
  console.log(" ");
  console.log("Giocatore Uno e Giocatore Due: avete ottenuto lo stesso punteggio!");
}
else {
    console.log(" ");
    console.log("Giocatore Due: hai vinto tu!");
}


//END
