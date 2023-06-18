const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", () => {
  console.log("loaded successfully!");
});

firstReq.addEventListener("error", () => {
  console.log("Error!");
});

firstReq.open("GET", "https://swapi.co/api/planets/");
firstReq.send();
