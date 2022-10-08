//we can access arguments object inside a function
//but its not there in arrow function
//its not an array its more like an object

function sum() {
  console.log(arguments);
}

sum(2, 3, 4, 5, 12);

//Rest operator can be used instead, which can also be used inside an arrow function

function product(...nums) {
  console.log(nums);
}

product(1, 23, 43, 11, 300);

//unlike the arguments object in function , here the REST operator provides an actual array
function fullName(first, second, ...titles) {
  console.log({ first });
  console.log({ second });
  console.log({ titles }); //titles = []
}

fullName("AK", "M", "King", "Master", "Magician");

//since REST provides an actual array, we can do array functions like reduce
// function restSum(...nums) {
//   return nums.reduce((sum, num) => sum + num);
// }

//since this is an arrow function we can ommit return if there is only on statement
const restSum = (...nums) => nums.reduce((sum, num) => sum + num);

const total = restSum(23, 13, 45, 6);
console.log({ total });
