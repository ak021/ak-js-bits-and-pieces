// if we attach the function to the prototype instead of attaching directly to the constructor, every time when we instantiate an object new unique copy of function wont be generated, instead it will point to the same function, so that less usage of memory

function Color(r, g, b) {
  this.r = r; // if we dont use new operator then this refers to window object
  this.g = g; // otherwise new will create a plain object and set the this context to newly created object.
  this.b = b;
}

//defining methods with prototype, so that every instance will refer to the same function
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b},${a})`;
};

const color1 = new Color(122, 221, 1);
const color2 = new Color(122, 221, 1);
