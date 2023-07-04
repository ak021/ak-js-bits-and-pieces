const parent = {
  name: "Parent",
  sayHello() {
    console.log("Hello from " + this.name);
  },
};

// Child object inheriting from parent
const child = Object.create(parent);
child.name = "Child";

child.sayHello(); // "Hello
console.log(child);
