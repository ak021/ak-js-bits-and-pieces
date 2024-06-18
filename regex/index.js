function removeSpecial(str) {
  return str.match(/[A-Z]+/gi, "").join(" ");
}

const str = "This is, a test ! only with punctuation.";

console.log(removeSpecial(str));
