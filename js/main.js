const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');

const password = firstName + '' + lastName + '' + color + '' + 21


console.log(password);
document.getElementById('my_id').innerHTML = password;