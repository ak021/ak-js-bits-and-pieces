const role = "director";
const person = "Nolan";

//old syntax
// const team = {};
// team[role] = person;

//new syntax
//no need to evaluate the key before
const team = {
  [role]: person,
};

const team2 = {
  [role]: person,
  [2 * 8]: "sixteen",
};

console.log(team);
