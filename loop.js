let arr = ["a", "k", "h", "i", "l"];

for (let l of arr) {
  console.log({ l });
}

for (let letter of "Malayalam") {
  console.log({ letter });
}

const marks = {
  eng: 23,
  math: 45,
  phy: 56,
  che: 89,
  hum: 100,
};

for (sub in marks) {
  console.log(marks[sub]);
}
