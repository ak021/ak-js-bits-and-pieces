# Optimizing js

1. You might not need a framework always
2. Consider a simple solution
3. Remove unused code
4. Consider built in browser features like , Video, instead of creating a Video player from scratch.

## Handling parsing and execution

- by default parsing and execution of javascript is render blocking.
- This means that the browser blocks the parsing of any HTML that appears after the JavaScript is encountered, until the script has been handled. As a result, styling and painting are blocked too.
- This means that you need to think carefully not only about what you are downloading, but also about when and how that code is being executed.

## Loading critical assets as soon as possible

- The preload <link> fetches the JavaScript as soon as possible, without blocking rendering. You can then use it wherever you want in your page
- we can use preload and preconnect to load critical assets, so that it is available by the time it is required

## Deffering execution of non-critical javascript

- you should aim to defer parsing and execution of non-critical JavaScript to later on, when it is needed. Loading it all up-front blocks rendering unnecessarily.

- async and defer attribuest in link tag and its usecases

## Breaking down long tasks into subtasks

- When a single taks is taking more than 50ms to execute , then it is considered as long task
- Dividing a larger taskt into smaller subtask, this gives the browser more chances to perform vital user interaction handling or UI rendering updates

`but`

in the case of small functions inside another functions, ui thread will still be busy.

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

- inorder to mitigate this we run a **`yield`** function periodically

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

## requestAnimationFrame for animations

- requestAnimationFrame let the user to run a function before the next repaint of the ui, so that the animations will be smooth;

```js
function animation(timestamp) {
  // Your code goes here
}
// accept a callback, which is called with a timestamp
requestAnimationFrame(animation);
```
