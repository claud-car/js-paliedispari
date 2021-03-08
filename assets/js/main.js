//dichiarare il vincitore


//chiedo ad utente pari-dispari e un numero da 1 a 5
var pariDispari = prompt("Scrivi pari , o dispari");
var numero = parseInt(prompt("Dammi un numero da 1 a 5"));

//Funzione per determinare numero random pc
function numeropcrandom(){
  return Math.floor(Math.random() * 5 + 1);
}
//genero numero pc da function
var numeropc = numeropcrandom();
document.getElementById('numeropc').innerHTML = "Il numero del computer è : " + numeropc;

//if per determinare correzione di input utente
if (pariDispari == "pari" && numero %2){
  document.getElementById('numeroutente').innerHTML = "Il numero non è pari"
} else if (pariDispari == "dispari" && numero == 2 || numero == 4){
  document.getElementById('numeroutente').innerHTML = "Il numero non è dispari"
} else{
  document.getElementById('numeroutente').innerHTML = "Il tuo numero è : " + pariDispari + " ; " + numero;
}


//Sommiamo i numeri e vediamo se la somma è pari o dispari(funzione)
function somma(numero1, numero2){
  return numero1 + numero2;
}
//stampo somma in html
document.getElementById('risultato').innerHTML = "La somma dei numeri è : " + somma(numero,numeropc);

//Casistica e stampo vincitore in html
if (pariDispari == "pari" && somma(numero,numeropc)%2 == 0){
  document.getElementById('risultato').innerHTML = "La somma dei numeri è : " + somma(numero,numeropc) + "<br>" + "<strong>" + " L'utente ha vinto" + "</strong>" ;
} else if (pariDispari == "dispari" && somma(numero,numeropc)%2 == 1){
  document.getElementById('risultato').innerHTML = "La somma dei numeri è : " + somma(numero,numeropc) + "<br>" + "<strong>" + " L'utente ha vinto" + "</strong>"
} else{
  document.getElementById('risultato').innerHTML = "La somma dei numeri è : " + somma(numero,numeropc) + "<br>" + "<strong>" + " Il computer ha vinto" + "</strong>"
}



//DA GIù IN POI SONO PROVE E NON PERTINENTI ALL'ESERCIZIO

// var soldato = true;
//
// var pariDispari = prompt("Scrivi pari=selezione Pari, oppure dispari=selezione Dispari,oppure scrivi quit per chiudere");
// var numero = parseInt(prompt("Dammi un numero da 1 a 5"));
// console.log(pariDispari,numero);
//
// switch (pariDispari) {
//   case "pari":
//     console.log(pariDispari,numero);
//     break;
//   case "dispari":
//     console.log(pariDispari,numero);
//     break;
//   case "quit":
//     soldato= false;
//     break;
//   default:
//     console.log("Scrivi solo le due opzioni,pari,oppure dispari");
//     break;
// }
