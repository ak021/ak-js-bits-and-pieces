// Fisher Yates

// 1. starting from backwards take the last element
// 2. pick a random number between 0 - i+

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // i+1 because you are doing Math.floor() inorder to get 2 you need to multiply with 3
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const arr = [
  "india",
  "australia",
  "america",
  "germany",
  "portugal",
  "argentina",
  "brazil",
  "peru",
  "france",
  "italy",
  "spain",
  "netherlands",
  "swedan",
  "finland",
  "norway",
  "pakistan",
  "afganistan",
  "south africa",
  "england",
  "Nepal",
  "Scotland",
  "china",
  "Taiwan",
  "Butan",
  "Bangladesh",
  "South Korea",
  "Russia",
  "Vatican",
  "kazakistan",
  "uruguay",
  "paraguay",
];

shuffle(arr);
console.log(arr);
