## Hoisting

> - **Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared within their scope, they are treated as if they were declared at the top.**
> - **We can access the variable before initialization**
> - **This is only applicable for variables that are discussed with <span style="color: red;font-size:18px">var</span> keyword, and function declared with function keyword**
> - **javascript code is executed in 2 phases, Which is memory allocation phase and code execution phase. so before start executing the code javascript engine will already assign memory to the variables and functions**
> - **Variables declared with <span style="color: lime;font-size:18px">let</span> and <span style="color: lime;font-size:18px">const</span> are also assigned a value during the memory allocation phase in JavaScript. However, unlike variables declared with var, variables declared with let and const do not receive an initial value of undefined.** > **When variables declared with let or const are created, they enter a <span style="color: lime;font-size:18px">"temporal dead zone" </span>(TDZ) until they are assigned a value. Accessing these variables before their initialization within the TDZ results in a <span style="color: red;font-size:18px">ReferenceError. </span>This behavior is designed to catch potential errors caused by accessing variables before they are properly initialized.**

Here's an example to illustrate this:

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
