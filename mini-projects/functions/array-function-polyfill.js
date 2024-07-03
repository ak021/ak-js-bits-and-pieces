if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    if (typeof callback !== "function") {
      throw new Error(`Expected function, received ${typeof callback}`);
    }
  };

  const resultArr = [];
  for (const i of this) {
    if (callback(this[i], i, this)) {
      resultArr.push(this[i]);
    }
  }

  return resultArr;
}

if (!Array.prototype.map) {
  Array.prototype.filter = function (callback) {
    if (typeof callback !== "function") {
      throw new Error(`Expected function, received ${typeof callback}`);
    }
  };

  const resultArr = [];
  for (const i in this) {
    resultArr.push(callback(this[i], i, this));
  }

  return resultArr;
}

if (!Array.prototype.map) {
  Array.prototype.filter = function (callback, initialValue) {
    if (typeof callback !== "function") {
      throw new Error(`Expected function, received ${typeof callback}`);
    }

    let startPosition = 0;
    let acc = initialValue ?? this[startPosition++];

    for (let i = startPosition; i < this.length; i++) {
      acc = callback(res, this[i], i, this);
    }

    return acc;
  };
}
