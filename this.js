function sayHello() {
  console.log("Hello there !!");
  console.log(this);
}

console.log(this);

//in both the above cases this refers to window object in browser and a global object in node
//this will always refer to an object which is the current execution scope

const person = {
  first: "ak",
  last: "mp",
  age: 23,
  fullName() {
    console.log(this); //here an object method(not an arrow function) this refers to the object that functios live in
  },
};

const nameObject = {
  names: [
    "akhil",
    "amal",
    "nihal",
    "sanjuz",
    "deepthis",
    "marc andre ter stegan",
    "Robert",
  ],
  sayName() {
    console.log(this); //here it refers to the object itself
  },
  sayHello: () => {
    console.log(this); //if this inside arrow function (if its an object method) refers to global object
  },
  sayHi: function () {
    console.log(this); //here it refers to the object itself
  },

  greetings() {
    console.log(this);
    this.timerID = setInterval(() => {
      console.log(this.names); // but if its an arrow function inside setInterval then it will refer to the current exec context
    }, 2000);
  },

  stop() {
    clearInterval(this.timerID);
    console.log("Interval succesfully removed");
  },
};

//in object the value of this depends on the invocation context of the function it is used in

// nameObject.greetings(); // if we call the object method like this then it will refer to the nameObject itself

//if we make a reference to the object method
const greetMe = nameObject.greetings;
//greetMe();   // now if we call the method like this then this will refer to the global object
