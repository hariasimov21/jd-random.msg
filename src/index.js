const messages = [
  "Jaime",
  "Roberto",
  "Nashla",
  "Maria",
  "Ulises",
  "Mario",
  "Naruto",
  "KIOKA",
  "pedrito",
  "chabito",
];

let randomMsg = () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  console.log(msg);
};

module.exports = { randomMsg };
