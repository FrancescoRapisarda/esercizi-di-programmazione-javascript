/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/


//START

var scelta1 = 1;
var scelta2 = 2;
var scelta3 = 5; //3
var scelta4 = 4;


console.log("MENU' DEL GIORNO:");
console.log("1. Tiramisù;");
console.log("2. Torta della Nonna;");
console.log("3. Cheesecake alla Nutella;");
console.log("4. Macedonia");

console.log("");

console.log("IL TUO MENU':");

if (scelta1 == 1) {
  console.log("Hai scelto il Tiramisù.");
} else {
  console.log("Dolce non disponibile nel menù di oggi!");
}

if (scelta2 == 2) {
  console.log("Hai scelto la Torta della Nonna.");
} else {
  console.log("Dolce non disponibile nel menù di oggi!");
}

if (scelta3 == 3) {
  console.log("Hai scelto il Cheesecake alla Nutella.");
} else {
  console.log("Dolce non disponibile nel menù di oggi!");
}

if (scelta4 == 4) {
  console.log("Hai scelto la Macedonia.");
} else {
  console.log("Dolce non disponibile nel menù di oggi!");
}


//END
