## Scope

> #### scope in JavaScript determines the accessibility and visibility of variables, functions, and objects in your code.
>
> - Scope in js is related to <span style="color:lime; font-size: 16px">LEXICAL ENVIRONMENT</span>

> ```js
> function abc() {
>   console.log(b);
> }
>
> var b = 120;
> abc();
> ```
>
> - **_here the function will first check if b is available within its local scope, if not it will go to its parent, so on and so forth_**

## LEXICAL ENVIRONMENT

> **lexical environment is a concept that is associated with scope and variable access, it consist of 2 main components**
>
> 1. <span style="color:aqua;font-size:16px">Environment Record:</span> : _**The environment record is a record or data structure that holds all the variables and functions defined within the current scope**_
>
> 2. <span style="color:aqua;font-size:16px"> Outer Environment Reference::</span> : _**Each lexical environment has a reference to its outer (parent) environment. This reference enables the mechanism of nested scopes in JavaScript. When a variable is referenced within a lexical environment, and it cannot be found in the current environment record, the JavaScript engine follows the outer environment reference to look for the variable in the parent environment. This process continues until the variable is found or until the global scope is reached.**_

## Scope chaining

> - **_When a variable is referenced in JavaScript, the JavaScript engine starts searching for that variable's value or reference within the current lexical environment's environment record. If the variable is not found in the current environment record, the engine continues the search by following the outer environment reference to the parent lexical environment. This process of following the outer environment reference and moving up the chain continues until the variable is found or until the global scope is reached._**
> - **_The chain formed by following the outer environment references from one lexical environment to another is called the scope chain. It represents the hierarchical structure of nested lexical environments._**
> - **_The scope chain ensures that variables declared in outer scopes are accessible in inner scopes, while variables declared in inner scopes do not conflict with variables in outer scopes with the same name._**
