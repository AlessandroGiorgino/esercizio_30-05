/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 5;
let num2 = 10;
if (num1 > num2) {
  console.log("Esercizio 1  num1 > num2");
} else if (num2 > num1) {
  console.log("Esercizio 1    num2 > num1");
} else {
  console.log("Sono lo stesso numero!");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.

*/

const numeroEsempio = Math.floor(Math.random() * 9);
if (numeroEsempio !== 5) {
  console.log("Esercizio 2    not equal");
} else {
  console.log("Esercizio 2     equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const randomNumber = Math.floor(Math.random() * 20);
if (randomNumber % 5 === 0) {
  console.log("Esercizio 3    divisibile per 5");
} else {
  console.log("Esercizio 3    non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const firstNum = Math.floor(Math.random() * 20);
const secondNum = Math.floor(Math.random() * 20);

if (firstNum === 8 || secondNum === 8) {
  console.log("Esercizio 5     Uno dei due numeri è 8");
} else if (num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8) {
  console.log(
    "Esercizio 4     grazie ad una delle somme/sottrazioni otteniamo come risultato 8"
  );
} else {
  console.log(
    "Esercizio 4     Il numero non è né 8 né nessuna delle addizioni/sottrazioni lo porta a diventare 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = Math.floor(Math.random() * 70);
if (totalShoppingCart <= 50) {
  let prezzoConSpedizione = totalShoppingCart + 10;
  console.log(
    "Esercizio 5    Spendi " +
      totalShoppingCart +
      " € ,meno di 51 euro, il tuo totale comprende quindi 10 euro di spedizione ed è di € " +
      prezzoConSpedizione
  );
} else {
  console.log(
    "Esercizio 5    Spendi " +
      totalShoppingCart +
      ", più di 50€, per questo hai diritto alla spedizione gratuita"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
// su quello di prima fare il 20% e vedere se si arriva al carrello

let totalShoppingCart2 = (Math.floor(Math.random() * 70) * 20) / 100;
if (totalShoppingCart2 <= 50) {
  let prezzoConSpedizione = totalShoppingCart2 + 10;
  console.log(
    "Esercizio 6    Con il 20% di sconto applicato spendi " +
      totalShoppingCart2 +
      " € ,meno di 51 euro, il tuo totale comprende quindi 10 euro di spedizione ed è di € " +
      prezzoConSpedizione
  );
} else {
  console.log(
    "Esercizio 6    Con il 20% di sconto applicato spendi " +
      totalShoppingCart2 +
      ", più di 50€, per questo hai diritto alla spedizione gratuita"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  
  farne tre, confrontare le prime due, poi la la seconda con la terza etc

  
*/

let primo = Math.floor(Math.random() * 70);
let secondo = Math.floor(Math.random() * 70);
let terzo = Math.floor(Math.random() * 70);

if (primo > secondo && primo > terzo && secondo > terzo) {
  console.log(
    "Esercizio 7 " + "primo numero " + primo,
    "secondo numero " + secondo,
    "terzo numero " + terzo
  );
}

if (primo > secondo && primo > terzo && terzo > secondo) {
  console.log(
    "Esercizio 7 " + "primo numero " + primo,
    "terzo numero " + terzo,
    "secondo numero " + secondo
  );
} else if (secondo > primo && secondo > terzo && terzo > primo) {
  console.log(
    "Esercizio 7 " + "secondo numero " + secondo,
    "terzo numero " + terzo,
    "primo numero " + primo
  );
} else if (secondo > primo && secondo > terzo && primo > terzo) {
  console.log(
    "Esercizio 7 " + "secondo numero " + secondo,
    "primo numero " + primo,
    "terzo numero " + terzo
  );
} else if (terzo > primo && terzo > secondo && secondo > primo) {
  "Esercizio 7 " + "terzo numero " + terzo,
    "secondo numero " + secondo,
    "primo numero " + primo;
} else if (terzo > primo && terzo > secondo && primo > secondo) {
  "Esercizio 7 " + "terzo numero " + terzo,
    "primo numero " + primo,
    "secondo numero " + secondo;
}

// Ho sicuramente optato per una soluzione complessa e sbagliata, anche perché così non fa console log quando i numeri sono uguali

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let valore = 8;
if (typeof valore === "number") {
  console.log("Esercizio 8    Il valore fornito è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  //facciamo il numero modulo 2, se viene 0 è pari se viene un numero diverso è dispoari
*/

let ourNumber = Math.floor(Math.random() * 1000);
if (ourNumber % 2 === 0) {
  console.log("Esercizio 9    " + ourNumber + " è un numero pari");
} else {
  console.log("Esercizio 9   " + ourNumber + " è un numero dispari");
}

/* ESERCIZIO 10*/

let val = 7;
if (val < 10 && val >= 5) {
  console.log("Esercizio 10   Meno di 10");
} else if (val < 5) {
  console.log("Esercizio 10   Meno di 5");
} else {
  console.log("Esercizio 10   Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log("Esercizio 11", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log("Esercizio 12   ", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log("Esercizio 13   ", me);
/* ESERCIZIO 14     DONE
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
numOneToTen = [];
numOneToTen.push(1);
numOneToTen.push(2);
numOneToTen.push(3);
numOneToTen.push(4);
numOneToTen.push(5);
numOneToTen.push(6);
numOneToTen.push(7);
numOneToTen.push(8);
numOneToTen.push(9);
numOneToTen.push(10);
console.log("Esercizio 14 ", numOneToTen);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numOneToTen.pop(numOneToTen.lenght - 1);
numOneToTen.push(100);
console.log("Esercizio 15   ", numOneToTen);
