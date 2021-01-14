// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// VARIABILI
var numeriGenerati = [];
var numeriUtente = [];
var numeriRicordati = [];
var numeroInserito;


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

  // Funzione Timer (10 secondi)
  setTimeout(timer, 10000);
  function timer() {

    while (numeriUtente.length < 5) {
     // L'utente deve inserire i numeri mostrati nell'alert
     numeroInserito = parseInt(prompt("Inserisci i numeri generati dal computer"))

      // Non si possono inserire numeri non compresi tra 0 e 100 o numeri già inseriti
      if (numeroInserito < 1 || numeroInserito > 100 ) {
        alert('Numero non valido');
      }
      if (numeriUtente.includes(numeroInserito) == false) {
        numeriUtente.push(numeroInserito);
      } else {
        alert("Hai già inserito questo numero!");
      }
    }
    console.log(numeriUtente);

    for (var i = 0; i < numeriUtente.length; i++) {
      var numeroGiusto = numeriUtente[i];

      if (numeriGenerati.includes(numeroGiusto) == true) {
        numeriRicordati.push(numeroGiusto);
      }
    }
    // Stampa finale dei numeri ricordati
    console.log(numeriRicordati);
    alert("Hai ricordato " + numeriRicordati.length + " numeri su 5 che sono " + ' ' + numeriRicordati);

  }
});


// Funzione Numero Random
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
