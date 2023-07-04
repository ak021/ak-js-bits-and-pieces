let stringOne = "Hey there, this is ak";
let stringTwo = "I am here";
const stringThree = "English";

//charAt() return character at the given index.
console.log(stringOne.charAt(0));

//charCodeAt() return unicode of the character with the given index.
console.log(stringOne.charCodeAt(0));

//concat()
console.log(stringOne.concat(stringTwo));

//endsWith() - check weather a string ends with specified string or character
console.log(stringOne.endsWith("re"));

//fromCharCode
console.log(String.fromCharCode(72));

//includes() - return bool according to weather the string is present or not
console.log(stringOne.includes("Hey"));

//indexOf() - return the first found occurrence index if not found return -1
console.log(stringOne.indexOf("Hdgzfs"));

//lastIndexOf() index of last occurrence otherwise return -1
console.log(stringOne.lastIndexOf("e"));

console.log(stringOne.match(/\d/g));

console.log(/th/g.test(stringOne));

console.log(stringOne.repeat(3));

console.log(stringOne.replace(/ak/g, "Akhil"));

console.log({ stringOne });

console.log(stringOne.search("ak"));

console.log(stringThree.slice(1, 4));

console.log(stringTwo.split(" "));

//reverese a sting
console.log(stringThree.split("").reverse().join(""));

console.log(stringThree.sub);

let arr = ["a", "k", "h", "i", "l"];

console.log(arr.join("-"));

console.log(Math.floor(3.9));
console.log(Math.round(3.9));
console.log(Math.ceil(3.9));
console.log(parseFloat("2.456"));
console.log(parseInt("$2"));
console.log(parseInt("20rupees"));
