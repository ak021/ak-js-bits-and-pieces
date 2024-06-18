function Person(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
  this.setSallary = (salary) => (this.salary = salary);
}

Person.prototype.getSalary = function () {
  return this.salary;
};

const person = new Person("xyz", 23, "india");
person.setSallary(1000);
console.log(person);

const salary = person.getSalary();
console.log({ salary });
