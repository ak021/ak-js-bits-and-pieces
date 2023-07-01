//there is nothing wrong with the factory function approach , but this is not the ideal approach.
// drawback of this approach is , whenever we call a factory function is created, a new instance of the functions are generated all the time. Which is not efficient.
// functions are recreated and the unique copy is added to each color object
// it is unnecessary to have a unique function for all the object that we are creating

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 200, 150);
const secondColor = makeColor(35, 200, 150);
const rgb = firstColor.rgb();
const hex = firstColor.hex();
console.log({ rgb, hex });

// because they are refering to different functions
console.log(firstColor.hex === secondColor.hex); //false

// but in the case of prototype it will be same. all the instance created will have the same function attached.o
