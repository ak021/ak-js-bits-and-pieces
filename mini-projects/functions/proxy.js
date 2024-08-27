const person = {
  name: "John Doe",
  age: 24,
  sayHello() {
    return "Hello, my name is " + this.name;
  },
};

// handler have a get trap which intercept the property lookup and modify it
const handler = {
  get(target, prop) {
    if (prop === "name") {
      return "Mr. " + target[prop];
    }
    return target[prop];
  },
  apply(target, context, args) {
    console.log("Calling function" + target.name);
    console.log({ target, context, args });
    return target.apply(context, args);
  },
};

const proxy = new Proxy(person.sayHello, handler);
proxy("akm");
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.sayHello());
