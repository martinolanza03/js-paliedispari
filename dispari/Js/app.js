let evenOrOdd = prompt('Inserisci pari se vuoi indovinare che il numero sia pari, altrimenti inserisci dispari');
evenOrOdd = evenOrOdd.toLocaleLowerCase();
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

function randomNumber(){
    let randomNumber = Math.floor((Math.random()* 6) + 1);
    return randomNumber;
}

let saveRandomNumber = randomNumber();
let sumNumber = saveRandomNumber + userNumber;

function sumEvenOrOdd(sum) {
    return sum % 2 === 0 ? 'pari' : 'dispari';
}

if (sumEvenOrOdd(sumNumber) === evenOrOdd){
    console.log (`Hai indovinato la somma dei numeri tra ${userNumber} + ${saveRandomNumber} = ${sumNumber} è ${evenOrOdd}`);
} else {
    console.log (`Hai perso la somma dei numeri tra ${userNumber} + ${saveRandomNumber} = ${sumNumber} è ${sumEvenOrOdd(sumNumber)}`);
}