// valid js in which username is being attached to global scope
// but not that strict or good way of writing js

function regularFunc() {
  username = "Marie";
  console.log(username);
}

regularFunc();

// by using strict mode the execution of the below function will throw an error, since it is not allowed in strict mode
function regularFuncStrict() {
  "use strict";
  username = "Marie";
  console.log(username);
}

regularFuncStrict();

// another example
// the below code is a valid js
function addNums(num, num) {
  console.log("inside add nums");
  console.log(num + num);
}

addNums(1, 2); // 4

// strict mode
function addNumsStrict(num, num) {
  "use strict";
  console.log(num + num);
}

addNumsStrict(2, 3);

// then why strict mode is not default in js
// the answer is backward compatibility
// ES6 modules assume strict mode, so all code in such files is automatically defaulted to strict mode.
// ES6 modules are always in strict mode.
