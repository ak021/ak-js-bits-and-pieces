const printTHis = function (name, num1, num2, designation) {
  console.log(this);
  console.log({ name, num1, num2, designation });
};

// we are invoking the function using call, so that we can pass the this context manually.

printTHis.apply({ color: "red" }, ["akm1212", 12, 32, "frontend engineer"]);
