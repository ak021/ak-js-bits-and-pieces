## Debounce

---

### this is a basice debounce function

> ```js
> let timerId;
> const handleInput = (event) => {
>   if (timerId) {
>     clearTimeout(timerId);
>   }
>   timerId = setTimeout(() => {
>     fetchData(event.target.value);
>   }, 500);
> };
> ```

## now how will we make it as a common helper function?

> **a debounce function will be a wrapper, which will return a function** > ![debounce-1](./ss/debounce-1.png)

> ## The wrapper function is more like a shield
>
> ![debounce-2](./ss/debounce-2.png)
