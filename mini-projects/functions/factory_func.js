function createPerson(name, age, salary) {
  return {
    name,
    age,
    salary,
    createdAt: Date.now(),
  };
}

const person = createPerson("akhil", 24, 23000);
console.log(person);
