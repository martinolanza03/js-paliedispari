let evenOrOdd = prompt('Inserisci pari se vuoi indovinare che il numero sia pari, altrimenti inserisci dispari');
evenOrOdd = evenOrOdd.toLocaleLowerCase();
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

function randomNumber(){
    let randomNumber = Math.floor((Math.random()* 6) + 1);
    return randomNumber;
}

const sumNumber = userNumber + randomNumber();

function sumEvenOrOdd(sum) {
    if(sum % 2 === 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}