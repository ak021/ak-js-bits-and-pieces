const makeDogPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.random();
      if (num < 0.5) {
        resolve("Here is your dog");
      } else {
        reject(new Error("OOps no dog"));
      }
    }, 3000);
  });

makeDogPromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("this will always execute"));
