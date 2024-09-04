// call bind apply

// call: binds the this value, invokes the function, and allows you to pass a list of arguments.

// apply: binds the this value, invokes the function, and allows you to pass arguments as an array.

// bind: binds the this value, returns a new function, and allows you to pass in a list of arguments.

function sayHello(firstName, lastName) {
  console.log({ firstName });
  console.log({ lastName });
  console.log({ this: this });
}

const person1 = {
  name: "John",
};

const person2 = {
  name: "Wick",
};

const person3 = {
  name: "Babayaga",
};

sayHello.call(person1, ["Call1", "Call2"]);
console.log("-------------------------");
const bindedFunc = sayHello.bind(person2, ["bind1", "bind2"]);
bindedFunc();
console.log("-------------------------");
sayHello.apply(person3, ["Alice", "Smith"]);
console.log("-------------------------");
