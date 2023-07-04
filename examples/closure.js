// function outerFunction(outerval) {
//   return function innerFucntion(innerVal) {
//     console.log("inisde inner fn");
//     console.log({ innerVal });
//     console.log({ outerval });
//   };
// }

// outerFunction("outer")("inner9999");

function makeCounter() {
  var count = 0;

  function increment() {
    console.log(count);
    count++;
    return count;
  }

  return increment;
}

var counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
