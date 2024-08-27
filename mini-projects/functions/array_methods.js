// filter function polyfill

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    // check if the callback is a function or not
    if (typeof callback !== "function") {
      throw new Error("Expected function as argument");
    }

    let newArray = [];
    for (let index in this) {
      if (callback(this[index], index, this)) {
        newArray.push(this[index]);
      }
    }

    return newArray;
  };
}
