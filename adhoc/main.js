async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
await sleep(0);
console.log("fourth");
console.log("fifth");
console.log("sixth");
console.log("Seventh");

const p = Promise.resolve("hello");

p.then((val) => {
  console.log(val);
  // the below line returns a new promise
  return `new ${val}`;
}).then((newVal) => {
  console.log(newVal);
});
