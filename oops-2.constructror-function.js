// why factory function is not used ideally?

//constructor function , a function that helps you create an object

function Color(r, g, b) {
  this.r = r; // if we dont use new operator then this refers to window object
  this.g = g; // otherwise new will create a plain object and set the this context to newly created object.
  this.b = b;
  this.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  this.hex = function () {
    const { r, g, b } = this;
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
}

const color1 = new Color(122, 221, 1);
const color2 = new Color(122, 221, 1);

// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

//When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

// 1. Creates , a  blank plain Javascript object.
// 2. Links (sets the constructor of)this object to another object.
//( Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]])
// 3. passes the newly created object in step 1 as the this context.
// 4. Returns this if the function doesnt return it's own object.
