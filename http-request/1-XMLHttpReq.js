const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  console.log("it worked");
});

firstReq.addEventListener("error", () => {
  console.log("OOps error");
});

firstReq.open("GET", "https://swapi.dev/api/planets");
// firstReq.setRequestHeader("Access-Control-Allow-Origin", "*");
firstReq.send();
console.log("req send");
