const header = document.querySelector("h1");
header.addEventListener("mouseover", () => {
  header.style.fontSize = "40px";
});

console.log("promise");

//A promise is an object representing the eventual completion or failure of an asynchronous operation.

//when we work with promise there are two different things that we need to understand.

// 1) How we create a promise, how we create a function that return a promise
// 2) How you consume or interact with promise.

//lets create one

//when we create a promise we pass in a function , and that function have 2 parameters always.
//resolve and reject are atually function
//any where inside the main function if we call resolve , then the promise is resolved.
//or else we can call reject , where the promise will be rejected.
//if we dont resolve or reject a promise then the status will be pending.

// const willGetYouADog = new Promise((resolve, reject) => {});

// 1) this is how we create a promise
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.ceil(Math.random() * 6);
  console.log({ rand });
  if (rand < 5) {
    resolve();
  } else {
    reject();
  }
});

// 2) How we interact with the promise?

//here comes the keyword .then, every promise have a then method
//.then() method will run if our promise is resolved.
// another method you can use with every single promise is .catch() which will run when promise is rejected.

willGetYouADog
  .then(() => {
    console.log("yay we got a dog");
  })
  .catch(() => {
    console.log("no dog bruh! ");
  });
