function testClosure() {
  var i = 100;
  console.log("inside test CLosure fn");
  setTimeout(() => {
    console.log(i);
  }, 2000);
  i = 2023;
}

testClosure();
