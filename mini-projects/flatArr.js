function flattArr(arr) {
  if (!arr.length) return [];

  let ans = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      ans = [...ans, ...flattArr(item)];
    } else {
      ans.push(item);
    }
  }
  return ans;
}

// flat array which can be attached to the Array prototype
function customFlat(arr = this) {
  if (!arr.length) return [];

  let ans = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      ans = [...ans, ...customFlat(item)];
    } else {
      ans.push(item);
    }
  }
  return ans;
}

Array.prototype.customFlat = customFlat;

const arr = [1, 2, 3, [4, 5, [6, [100]]], 7, [8, 200, 300], 1000];
const arr1 = [2, [56, 3, [43, 1]], 90];
const res1 = flattArr(arr1);
// const res = arr1.customFlat();
console.log("arr proto");
console.log([2, [56, 3, [43, 1]], 90].customFlat());

console.log("------------------");
res1.forEach((element) => {
  console.log(element);
});
