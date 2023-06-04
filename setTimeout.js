console.log("start");

setTimeout(() => {
  console.log("inside setTImeout");
}, 3000);

const startTime = new Date().getTime();
let endTime = startTime;

console.log("end");

while (endTime < startTime + 10000) {
  endTime = new Date().getTime();
}

console.log("million lines executed");
