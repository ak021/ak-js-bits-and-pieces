## Hoisting

> - **Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared within their scope, they are treated as if they were declared at the top.**
> - **We can access the variable before initialization**
> - **This is only applicable for variables that are discussed with <span style="color: red;font-size:18px">var</span> keyword, and function declared with function keyword**

```js
var x = 10;
function getName() {
  console.log("John Wick");
}
getName();
console.log(x);

// output
// John Wick
// 10
```

```js
getName();
console.log(x);

var x = 10;
function getName() {
  console.log("John Wick");
}

// output
// John Wick
// undefined
```
