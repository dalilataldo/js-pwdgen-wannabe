const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');
const numberone = prompt('Inserisci un numero');
const numbertwo = prompt('Inserisci un altro numero');

const password = firstName + lastName + color + (parseInt(numberone / numbertwo));

console.log(password);
document.getElementById('my_id').innerHTML = password;