// (() => {
//   console.log("hi from IIFE");
// })();

+(function IIFE() {
  console.log("I am an Immediately invoked function");
})();

var randomNumber = (() => {
  return Math.floor(Math.random() * 100);
})();

console.log({ randomNumber });
