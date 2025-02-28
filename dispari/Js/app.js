const evenOrOdd = prompt('Inserisci pari se vuoi indovinare che il numero sia pari, altrimenti inserisci dispari');
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

function randomNumber(){
    let randomNumber = Math.floor((Math.random()* 6) + 1);
    return randomNumber;
}

const sumNumber = userNumber + randomNumber();

