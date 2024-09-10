const failingFunc = () => {
  return new Promise((res, rej) => {
    const num = Math.floor(Math.random() * 6);
    if (num % 2 === 0) res({ msg: "success", data: num });
    else rej({ msg: `number ${num} is an odd number` });
  });
};

function success(res) {
  console.log("inside success", res);
}

function error(res) {
  console.log("inside error", res);
}

failingFunc().then(success, error);
