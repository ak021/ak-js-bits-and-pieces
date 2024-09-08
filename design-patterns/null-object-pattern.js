class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(0, "Alice"), new User(1, "Bob")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (!user) return new NullUser();
  return user;
}

// function getUser(id) {
//   return users.find((user) => user.id === id);
// }

function printUser(id) {
  const user = getUser(id);

  console.log(`Hello ${user.name}`);

  if (user.hasAccess()) {
    console.log("You have Access");
  } else {
    console.log("You dont have the access");
  }
}

// function printUser(id) {
//   const user = getUser(id);

//   let name = "Guest";
//   if (user && user.name !== null) {
//     name = user.name;
//   }

//   console.log(`Hello ${name}`);

//   if (user && user.hasAccess && user.hasAccess()) {
//     console.log("Have Access");
//   } else {
//     console.log("You dont have the access");
//   }
// }

printUser(3);
