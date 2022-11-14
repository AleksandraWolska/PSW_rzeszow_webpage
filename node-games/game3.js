const prompt = require('prompt-sync')({ sigint: true });
const drawed3 = Math.floor(Math.random() * 100) + 1;
var found = false;

while (found == false) {

  let n = prompt('Ile prób? ');

  while (isNaN(n) || n < 0) {
    n = prompt('Ile prób? ');
  }

  n = Number(n);

  while (!found && n > 0) {
    let guess = prompt(`Zgadnij numer od 1 do 100: (${drawed3}) `);
    guess = Number(guess);

    if (guess === drawed3) {
      console.log('Sukces!');
      found = true;
    } else {
      console.log(`Niepowodzenie, szukana liczba jest ${drawed3 > guess ? "większa" : "mniejsza"}`);
      n--
    }
  }

  if (!found) console.log(`Szukaną liczbą jest ${drawed3}\n\nZacznij jeszcze raz!`);
}
