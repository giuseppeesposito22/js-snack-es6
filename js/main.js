// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
  { name: "Trek ", weight: 5 },
  { name: "Specialized  ", weight: 10 },
  { name: "Bianchi  ", weight: 3 },
  { name: "Cannondale ", weight: 15 },
  { name: "Scott  ", weight: 2 },
];

let lighter = bikes[0];

for (const bike of bikes) {
  if (bike.weight < lighter.weight) {
    lighter = bike;
  }
}

console.log(
  `La bicicletta più leggera è la ${lighter.name} con un peso di ${lighter.weight}Kg`
);

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
