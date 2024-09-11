const clone = (input) => {
  if (input === null || typeof input !== "object") {
    return input;
  }

  const initialOutput = Array.isArray(input) ? [] : {};

  return Object.keys(input).reduce((acc, key) => {
    acc[key] = clone(input[key]);
    return acc;
  }, initialOutput);
};

const deepCopyFunction = (inObject) => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value);
  }

  return outObject;
};
