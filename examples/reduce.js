let arr = [3, 5, 7, 9, 11];

/* first use case - reducing array to a single value here it is sum/product */
//accumulator will hold first element in the array, ie 3
//current value will start from second element in the array ie 5

const sum = arr.reduce((acc, curntVal) => {
  return acc + curntVal;
});

console.log({ sum });

/* second use case - find max/min */
const grades = [28, 34, 43, 6, 75, 76, 65, 89, 78, 92, 98];

const topGrade = grades.reduce((max, currntVal) => {
  if (currntVal > max) return currntVal;
  return max;
});

console.log({ topGrade });

/* third usecase, with an initialvaue */
const votesArray = [
  "y",
  "y",
  "n",
  "y",
  "n",
  "y",
  "y",
  "n",
  "y",
  "n",
  "n",
  "n",
  "y",
  "y",
  "n",
  "y",
  "Y",
  "Y",
];

// const results = votesArray.reduce((tally, vote) => {
//   if (tally[vote]) {
//     tally[vote]++;
//   } else {
//     tally[vote] = 1;
//   }
//   return tally;
// }, {});

const results = votesArray.reduce((tally, vote) => {
  tally[vote.toLowerCase()] = (tally[vote.toLowerCase()] || 0) + 1;
  return tally;
}, {});

console.log({ results });
