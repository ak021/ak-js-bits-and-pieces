function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("hello " + this.name);
  };
}

const person1 = new Person("Ak", 25);
const person2 = new Person("Am", 21);

console.log(person1.name);
console.log(person2.name);
person1.greet();
