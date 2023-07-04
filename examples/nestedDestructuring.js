const winners = [
  {
    name: "amal",
    country: "US",
    price: "$7M",
  },
  {
    name: "ak",
    country: "NW",
    price: "$5M",
  },
  {
    name: "aswin",
    country: "finland",
    price: "$3M",
  },
  {
    name: "ash",
    country: "india",
    price: "$1M",
  },
];

//how to destructure from nested items as above
//get the country of second object in the array
const [{ name: goldWinner }, { country }] = winners;

console.log({ goldWinner, country });
