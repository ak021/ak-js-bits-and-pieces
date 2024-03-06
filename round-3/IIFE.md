# Immediately Invoked Function Expression

IIFE is a jvascript function , that runs immediately after it is being defined

```js
(function () {
  console.log("akhil");
})();

(() => {
  console.log("akhil");
})();

(async () => {})();
```

## What is the ues of IIFE?

- Avoid polluting the global namespace  
  application can contain many functions and global variables from multiple files, there can be cases where we need some variables and functions at the time of intialization and not required afterwards in that case we can use IIFE,

```js
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed
```
