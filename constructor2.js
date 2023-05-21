// when we add a function to the constructor , whenever we instantiate an object from that function thos instance will also get that greet() function, so what is the difference when we define it with prototype?
//what exactly is the advantage?

// Attaching a method directly to the constructor
function PersonWithMethod(name) {
  this.name = name;

  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}

// Attaching a shared method to the prototype
function PersonWithPrototype(name) {
  this.name = name;
}

PersonWithPrototype.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

var person1 = new PersonWithMethod("John");
var person2 = new PersonWithMethod("Jane");

var person3 = new PersonWithPrototype("Alice");
var person4 = new PersonWithPrototype("Bob");

console.log(person1.greet === person2.greet); // Output: false (different method instances)
console.log(person3.greet === person4.greet);
