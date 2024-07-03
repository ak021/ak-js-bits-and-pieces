// 1.Write a code to resolve all the list of asynchronous executions of promises and stop if any of them is rejected. Print the output accordingly

const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((asyncItem) => asyncItem());

// .then .catch
Promise.all(promiseArr)
  .then((resultArr) => {
    for (let result of resultArr) {
      console.log(result);
    }
  })
  .catch((err) => console.log(err));

// you can use IIF so that we can use async await
(async function () {
  try {
    const resArr = await Promise.all(promiseArr);
    for (const result of resultArr) {
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
})();
