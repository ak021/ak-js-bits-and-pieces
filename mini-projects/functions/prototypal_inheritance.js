// we can set prototype via

// 1 by setting __proto__

const animal = {
  eat: true,
};

const dog = {
  bark: true,
};

dog.__proto__ = animal;

// 2, using setPrototypeOf(obj, parent);
const obj = {};
const parent = { foo: "bar" };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"
