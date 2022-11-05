const prompt = require('prompt-sync')({ sigint: true });
let n = prompt('Ile liczb? ');

while (isNaN(n) || n < 0) {
    n = prompt('Ile liczb - poprawnie? ');
}

n = Number(n)
let sum = 0

while (n > 0) {
    let number = prompt(`Podaj numer: `);

    while (isNaN(number)) {
        number = prompt(`Podaj poprawny numer: `);
    }
    sum += Number(number)
    console.log(`Bieżąca suma liczb: ${sum}`)
    n--
}

console.log(`Suma wszytskich liczb to ${sum}`);

