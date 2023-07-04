let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success", a);
  } else {
    reject("Failed");
  }
});

p.then((message, a) => {
  console.log("inside then " + message);
  console.log({ a });
}).catch((message) => {
  console.log("in catch " + message);
});

const taskOne = new Promise((resolve, reject) => {
  resolve("task 1 resolved");
});

const taskTwo = new Promise((resolve, reject) => {
  resolve("task 2 resolved");
});

const taskThree = new Promise((resolve, reject) => {
  resolve("task 3 resolved");
});

Promise.all([taskOne, taskTwo, taskThree]).then((message) => {
  console.log(message);
});
