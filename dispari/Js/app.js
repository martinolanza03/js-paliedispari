let evenOrOdd = prompt('Inserisci pari se vuoi indovinare che il numero sia pari, altrimenti inserisci dispari');
evenOrOdd = evenOrOdd.toLocaleLowerCase();
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

function randomNumber(){
    let randomNumber = Math.floor((Math.random()* 6) + 1);
    return randomNumber;
}

let sumNumber = randomNumber() + userNumber;

function sumEvenOrOdd(sum) {
    if(sum % 2 === 0){
        return 'pari';
    } else if (sum % 2 !== 0) {
        return 'dispari';
    }
}

if (sumEvenOrOdd(sumNumber) === evenOrOdd && sumEvenOrOdd(sumNumber) === 'pari'){
    console.log (`Hai indovinato la somma dei numeri tra ${userNumber} + ${randomNumber()} = ${sumNumber} è pari`);
} else if (sumEvenOrOdd(sumNumber) === evenOrOdd && sumEvenOrOdd(sumNumber) === 'dispari') {
    console.log (`Hai indovinato la somma dei numeri tra ${userNumber} + ${randomNumber()} = ${sumNumber} è dispari`);
} else if (sumEvenOrOdd(sumNumber) === evenOrOdd && sumEvenOrOdd(sumNumber) !== 'pari') {
    console.log (`Hai persola somma dei numeri tra ${userNumber} + ${randomNumber()} = ${sumNumber} è dispari`);
} else if (sumEvenOrOdd(sumNumber) === evenOrOdd && sumEvenOrOdd(sumNumber) !== 'dispari') {
    console.log (`Hai persola somma dei numeri tra ${userNumber} + ${randomNumber()} = ${sumNumber} è pari`);
}