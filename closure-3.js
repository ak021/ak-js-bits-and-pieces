function testClosure() {
  let i = 100;
  console.log("inside test CLosure fn");

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  i = 2023;
}

testClosure();
