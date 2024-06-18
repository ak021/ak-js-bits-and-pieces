//method 1

function removeSpecial(str) {
  let res = "";

  for (const letter of str) {
    if (letter.toLowerCase() !== letter.toUpperCase() || letter.trim() === "") {
      res += letter;
    }
  }

  return res;
}

const str = "If there is a will, there is a way.";
console.log(removeSpecial(str));

// method 2 using regex

function replaceSpecialWithRegex(str) {
  return str.replace(/[^a-zA-Z0-9]\s/g, " ");
}

console.log(replaceSpecialWithRegex(str));
