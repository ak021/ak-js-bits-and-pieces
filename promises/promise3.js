const fakeRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.ceil(Math.random() * 6);
      console.log({ rand });
      if (rand < 5) {
        resolve({ status: 200 });
      } else {
        reject({ status: 500 });
      }
    }, 5000);
  });
};

fakeRequest()
  .then((res) => {
    console.log(`req failed with status: ${res.status}`);
  })
  .catch((res) => {
    console.log(`req failed with status: ${res.status}`);
  });
