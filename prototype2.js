function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`hello ${this.name}`);
  };
}

Person.prototype.sayHiii = function () {
  console.log(`hiiii ${this.name}`);
};

const person1 = new Person("Akhil");
console.log(person1);
