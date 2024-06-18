// 1. function with no parameters required, but still print the argument
function getFullName() {
  // arguments that are passed to a function can be accessed by default variable called arguments
  for (const name of arguments) {
    console.log({ name });
  }
}

getFullName("Abraham", "Benjamin", "Devilliers");

// 2. check if the function is called by the required length of argument

function add(a, b, c) {
  if (add.length !== arguments.length) {
    throw new Error(
      `Expected ${add.length} arguments , but received ${arguments.length}`
    );
  }
  return a + b + c;
}

console.log(add(1, 3));
