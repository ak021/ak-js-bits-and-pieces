//  The class syntax in JavaScript can be considered syntactic sugar over constructor functions and prototype-based inheritance.
//  introduced in 2015 (ES6)

class Color {
  // constructor is a special method defined within a class that is automatically called when an instance of the class is created using the new keyword.
  // The constructor method is used to initialize the object's properties and perform any setup tasks required for the object.
  constructor(r, g, b, name) {
    console.log("inside rgb");
    console.log(r, g, b);
    this.r = r;
    this.g = g;
    this.b = b;
  }

  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }

  rgb() {
    return `rgb${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgb(${this.innerRGB()},${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const color1 = new Color(255, 5, 255, "tomato");
