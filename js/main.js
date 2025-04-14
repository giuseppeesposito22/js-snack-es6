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

const footballTeams = [
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
];

const footballTeamsOnlyFouls = [];

const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

for (const team of footballTeams) {
  team.puntiFatti = generateRandomNumber(114);
  team.falliSubiti = generateRandomNumber(190);
}

console.log(footballTeams);

for (const team of footballTeams) {
  const teamOnlyFouls = {
    nome: team.nome,
    falliSubiti: team.falliSubiti,
  };

  footballTeamsOnlyFouls.push(teamOnlyFouls);
}

console.log(footballTeamsOnlyFouls);
