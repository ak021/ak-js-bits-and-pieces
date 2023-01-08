//here we need to add a delay,

const willGetYouADog = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.ceil(Math.random() * 6);
    console.log({ rand });
    if (rand < 5) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});

willGetYouADog
  .then(() => {
    console.log("yay we got a dog");
  })
  .catch(() => {
    console.log("no dog bruh! ");
  });

//returning promise from a function.
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.ceil(Math.random() * 6);
      console.log({ rand });
      if (rand < 5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};

makeDogPromise()
  .then(() => console.log("he he i got a new dog!"))
  .catch(() => console.log("oops, no dogs for you"));
