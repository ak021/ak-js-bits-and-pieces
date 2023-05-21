```js
typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true

1 + undefined; // NaN
1 + null; // 1

//because of the above
//follows the below
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true
```
