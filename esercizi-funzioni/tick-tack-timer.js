/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/


//START

function countdown(n) {
  var count = 0;
  for (var i = n; i > 0; i--) {
  count = i-1;
  console.log("Conto alla rovescia: " + count);
  }
}
var number = countdown(5);


//END
