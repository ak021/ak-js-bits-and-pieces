var x = 1;

one();
two();

function one() {
  var x = 100;
  console.log(x);
}

var two = function () {
  var x = 200;
  console.log(x);
};

console.log({ x });
