const obj = {};

Object.defineProperty(obj, "data", {
  _data: 0,
  get() {
    return this._data;
  },
  set(val) {
    this._data = val;
  },
});

obj.data = 100;

console.log({ obj });
