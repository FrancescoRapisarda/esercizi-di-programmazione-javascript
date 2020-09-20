/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/


//Se ho interpetato male il problema avvisatemi.. :)


//START


var car1 = new Car("Mercedes","A1","A3"); //Audi
var car2 = new Car("Porsche","Panamera","Cayenne");
var car3 = new Car("Alfa Romeo","Giulietta","Giulia");

var garage1 = car1.marca + car1.modello1 + car1.modello2;
    garage1 = garage1 + car1.checkAvailability();

    if (car1.marca === "Audi") {
        console.log("Congratulazioni per aver scelto: " + car1.marca + "! Hai i seguenti modelli in garage: " + car1.modello1 + " e " + car1.modello2 + ".");
    } else {
      console.log("Non ci sono modelli in garage per questa casa automobilistica: " + car1.marca + ".");
    }


var garage2 = car2.marca + car2.modello1 + car2.modello2;
    garage2 = garage2 + car2.checkAvailability();

    if (car2.marca === "Porsche") {
        console.log("Congratulazioni per aver scelto: " + car2.marca + "! Hai i seguenti modelli in garage: " + car2.modello1 + " e " + car2.modello2 + ".");
      } else {
        console.log("Non ci sono modelli in garage per questa casa automobilistica: " + car2.marca + ".");
      }


var garage3 = car3.marca + car3.modello1 + car3.modello2;
    garage3 = garage3 + car3.checkAvailability();

    if (car3.marca === "Alfa Romeo") {
        console.log("Congratulazioni per aver scelto: " + car3.marca + "! Hai i seguenti modelli in garage: " + car3.modello1 + " e " + car3.modello2 + ".");
    } else {
      console.log("Non ci sono modelli in garage per questa casa automobilistica: " + car3.marca + ".");
    }


function Car(marca,modello1,modello2) {
  this.marca = marca;
  this.modello1 = modello1;
  this.modello2 = modello2;
  this.checkAvailability = function(){
    return this.marca;
    return this.modello1;
    return this.modello2;
  }
}


//END
