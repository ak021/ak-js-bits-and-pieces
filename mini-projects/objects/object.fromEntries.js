const arr = [
  ["name", "akm"],
  ["age", 24],
];

const obj = Object.fromEntries(arr);
console.log({ obj });

const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
  ["foobar", 100],
]);

const obj2 = Object.fromEntries(map);
console.log({ obj2 });
