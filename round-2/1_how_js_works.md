## How JS works?

> - **In JavaScript, everything happens within an execution context. An execution context is an environment in which JavaScript code is evaluated and executed.**
> - **An execution context is a data structure that holds all the necessary information for the execution of a specific piece of JavaScript code. It includes details such as variable declarations, function declarations, function parameters, and the value of the "this" keyword.**

> <span style="color:aqua;font-size:16px">Javascript is a synchronous single threaded language</span>
>
> 1.**Synchronous:** In JavaScript, synchronous execution means that code is executed line by line, in the order it appears in the program. Each statement must complete before the next one can be executed. This ensures that operations are performed in a predictable and sequential manner.
> When a JavaScript program is executed, the execution engine processes each statement one at a time, blocking the execution of subsequent statements until the current one finishes. This synchronous nature allows JavaScript to maintain the expected order of operations and produce deterministic results.
>
> **2.Single-threaded:** JavaScript is single-threaded, meaning it has a single execution thread for handling code execution. The code is processed sequentially, one statement at a time, from top to bottom. Only one operation can be executed at any given moment.
