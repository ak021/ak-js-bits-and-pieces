class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

// if in case we need to create a user which only have name and address, with the above class we should do something like below.
// its not that clean since we need to manually give this undefined part
const user = new User(
  "akm",
  undefined,
  undefined,
  new Address("0120", "street-1")
);

class UserBuilder {
  // mandatory fields are given in the constructor
  constructor(name) {
    this.name = name;
    return this;
  }

  // optional fields can be set via function
  // these functions will return the instance of the class, so that you can chain multiple methods

  setAge(age) {
    this.age = age;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }
}

// another way which is specific to js is as below
// where optional params are given as object,
// in this case we can even give a default value
class UserBuilder2 {
  constructor(name, { age = 23, address } = {}) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const user1 = new UserBuilder("akhil").setAge(23);
const user2 = new UserBuilder("amal").setAddress(new Address("111", "street"));
console.log({ user1, user2 });
