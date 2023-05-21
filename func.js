var x = 1;

function one() {
  var x = 100;
  console.log(x);
}

function two() {
  var x = 200;
  console.log(x);
}

one();
two();
console.log({ x });
