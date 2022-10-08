const colorCode = ["#fff", "#000", "#333", "#2f2f"];

// const [white, black] = colorCode;

//we can skip an index by adding comma
const [white, black, , green] = colorCode;
console.log({ white, black, green });

//we can use REST operator to collect rest of the value to a variable
const winners = ["Amal", "Ak", "Aji", "Aswin", "Ash"];

const [winner, ...others] = winners;

console.log({ winner, others });

const winnersDetail = {
  name: "ak",
  age: 20,
  country: "norwegian",
  price: "7m",
};

const { country: nation } = winnersDetail;
console.log({ nation });
