# Debouncing

Waiting for some time to pass after the last event, inorder to do something (like a function call)

```javaScript
function debounce(func, timeout=500){
    let timeoutId = null;
    return (...args) => {
        timeoutId = setTimeout(() => {
            func(...args)
            //or
            // func.apply(null, args)
        }, timeout)
    }
}

// usage
const testFn = () => {
    console.log("tstfn");
}

const debouncedTestFn = debounce(testFn, 500);
debouncedTestFn("testStr")
```
