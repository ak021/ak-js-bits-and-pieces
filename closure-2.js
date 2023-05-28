//Private Variables and Data Encapsulation:
// Closures can be used to create private variables and encapsulate data within functions.
// This allows you to hide internal implementation details and expose only the necessary functionalities.

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

var counter = createCounter();
console.log(counter.getCount()); // Output: 0
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Output: 2

//another usecase is event handlers
function createButton() {
  var buttonText = "Click me!";

  var button = document.createElement("button");
  button.textContent = buttonText;
  button.addEventListener("click", function () {
    console.log("Button clicked:", buttonText);
  });

  return button;
}

var myButton = createButton();
document.body.appendChild(myButton);

console.log(
  "___________________________________________________________________"
);

// caching and memoization
function memoize(func) {
  var cache = {};

  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      var result = func(n);
      cache[n] = result;
      return result;
    }
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

var memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120 (computed)
console.log(memoizedFactorial(5)); // Output: 120 (cached)
