const arr = [1, 2, 3, 4, 5, 6, 7, 12, 34];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(15);
}

const output1 = arr.map(double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);
console.log(output1);
console.log(output2);
console.log(output3);
