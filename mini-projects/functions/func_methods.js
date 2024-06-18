// call bind apply
function sayHello(firstName, lastName) {
  console.log({ firstName });
  console.log({ lastName });
}

const person = {
  name: "John",
};

sayHello.call(person, ["Call1", "Call2"]);
console.log("-------------------------");
const bindedFunc = sayHello.bind(person, ["bind1", "bind2"]);
bindedFunc();
console.log("-------------------------");
sayHello.apply(person, ["Alice", "Smith"]);
console.log("-------------------------");
