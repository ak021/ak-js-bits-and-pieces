function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
}

function getUsers(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
}

// function getUsers() {
//     return fetch("https://dog.ceo/api/breeds/list/all", {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//       },
//     }).then((res) => res.json());
// }

getUsers().then((data) => console.log({ data }));
