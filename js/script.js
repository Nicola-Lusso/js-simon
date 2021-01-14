// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeriGenerati = [];

$( document ).ready(function() {

  // Generare e stampare 5 numeri random senza duplicati
  while (numeriGenerati.length < 5) {
  var numeroCasuale = numeroRandom(1, 100);

  if (numeriGenerati.includes(numeroCasuale) == false) {
    numeriGenerati.push(numeroCasuale);
  }

}
  console.log(numeriGenerati);
  alert("Riuscirai a ricordati questi numeri?\n\n"  + '     ' + numeriGenerati);


});


// Funzione Numero Random
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
