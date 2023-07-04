function x() {
  console.log("inside x");
}

function y(x) {
  x();
}

// here y is a higher order function, x is a callback function.

//
const radius = [3, 1, 2, 4];

function calculateArea(radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}

console.log(calculateArea(radius));

function calculateCircumference(radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
}

console.log(calculateCircumference(radius));

function calculateDiameter(radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
}

console.log(calculateDiameter(radius));

// there should be a better approach to do this,
// we are repeating the code, except the actual mathematical logic.
//check higher-order-func-2.js
