/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
---------------------------
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


// PALINDROMA
//Chiedere all’utente di inserire una parola
let parola = prompt('Inserisci una parola');
console.log(parola);

let parolaContr = wordReverse(parola);
console.log(parolaContr);

//Casistica: se la parola contraia è uguale a quella scritta, palindroma altrimenti no.
if (parolaContr === parola) {
    console.log('Si è Palindroma');
}else{
  console.log('Non è Palindroma')
}

//Inversione dei caratteri della stringa
function wordReverse(word) {

    let reverse = '';

    for (var i = word.length - 1; i >= 0; i-- ) {
        reverse += word[i];
    }
    return reverse;
}




// PARI E DISPARI