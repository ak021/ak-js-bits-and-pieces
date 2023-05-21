## constructor function

> - **A constructor function in JavaScript is a special function that is used to create and initialize objects. It serves as a blueprint or template for creating multiple instances of objects with similar properties and behaviors.**
> - **When you create an object using a constructor function, you are essentially creating an instance of that object type. The constructor function defines the initial state (properties) and behavior (methods) of the objects created from it.**

Here's an example of a constructor function in JavaScript:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}

var person1 = new Person("John", 25);
var person2 = new Person("Jane", 30);
```

> - In the code above, Person is a constructor function for creating Person objects. It takes name and age as parameters and assigns them as properties (this.name and this.age) to the object being created using the this keyword.
> - The greet method is also defined within the constructor function. Each object instance created from the Person constructor will have its own copy of the greet method, allowing each instance to perform the same action but potentially with different values.
> - To create object instances from the constructor function, we use the new keyword followed by the constructor function name:
