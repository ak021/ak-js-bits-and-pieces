class Pet {
  constructor(name, age) {
    console.log("inside pet constructor");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  // what if cat have some extra property,
  // then we need to invoke the parent constructor using super, along with the custom constructor
  constructor(name, age, color) {
    console.log("inside cat constructor");
    super(name, age); // reference to the parent class
    this.color = color;
  }
  meow() {
    return "Meowww!!";
  }
}

class Dog extends Pet {
  bark() {
    return "bow bow!!";
  }
  // this method will override the parent method,
  // if incase program doesn't find eat method in the child, then it will check the parent method
  eat() {
    return "Thi is from dog class";
  }
}

const monty = new Cat("monty", 9, "white");
const simba = new Dog("monty", 9);
