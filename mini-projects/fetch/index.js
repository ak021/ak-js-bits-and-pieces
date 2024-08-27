const apireq = fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "GET",
  headers: { "Content-type": "application/json" },
});

apireq
  .then((res) => res.json())
  .then((data) => console.log({ data }))
  .catch((e) => console.log(e));

// cancelling a fetcg request
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  signal,
  method: "GET",
  headers: { "Content-type": "application/json" },
})
  .then((res) => res.json)
  .then((data) => console.log({ data }))
  .catch((e) => console.log(e));

controller.abort();
