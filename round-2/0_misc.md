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

1. ## primitive types

> - In JavaScript, primitive values are data types that are not objects and do not have properties or methods. They are immutable, meaning their values cannot be changed once they are created. JavaScript has six primitive types: undefined, null, boolean, number, string, and symbol.
> - Primitive values are directly stored in memory and have a fixed size, which makes them more efficient to store and manipulate compared to objects.
>
> <span style="color:aqua;font-size:15px">undefined:</span> Represents the absence of a value or an uninitialized variable.  
>  <span style="color:aqua;font-size:15px">null:</span> Represents the intentional absence of any object value.  
>  <span style="color:aqua;font-size:15px">boolean:</span>Represents a logical value of either true or false.  
> <span style="color:aqua;font-size:15px">number:</span> Represents numeric values, including integers and floating-point numbers.  
> <span style="color:aqua;font-size:15px"> string:</span>Represents a sequence of characters enclosed in single quotes ('') or double quotes ("").  
> <span style="color:aqua;font-size:15px">symbol:</span>Represents a unique and immutable value that can be used as an identifier for object properties. Symbols are often used for creating non-enumerable object properties.
>
> - Apart from the primitive types, JavaScript also has non-primitive types, commonly referred to as objects. Objects are composite values that can hold key-value pairs and have methods. They can be created using object literals, constructors, or classes. Examples of non-primitive types include:  
>    <span style="color:aqua;font-size:15px">Object:</span>The most basic non-primitive type in JavaScript. Objects are mutable and can hold properties and methods.  
>    <span style="color:aqua;font-size:15px">Array:</span>: A special type of object that represents an ordered list of values.  
>    <span style="color:aqua;font-size:15px">Function:</span>: A callable object that can be invoked and perform a specific task.
>   <span style="color:aqua;font-size:15px">Date:</span> Represents a specific moment in time.  
>    <span style="color:aqua;font-size:15px">RegExp:</span>Represents a regular expression, used for pattern matching within strings.  
>   <span style="color:aqua;font-size:15px">Map, Set, WeakMap, WeakSet:</span> Objects that provide specialized collections and data structures.

## what is the difference between String and Object?

> 1. #### Strings are immutable
>    In JavaScript, when we say that strings are immutable, it means that once a string is created, its value cannot be changed. Any operation or manipulation on a string actually creates a new string rather than modifying the original one. The original string remains unchanged.
>
> ```js
> let myString = "Hello";
> // Attempt to modify the string
> myString[0] = "J"; // This will not change the string
> console.log(myString); // Output: "Hello" (original string is unchanged)
> ```
>
> ```js
> let originalString = "Hello";
> let modifiedString = originalString.toUpperCase();
>
> console.log(originalString); // Output: "Hello" (original >string is unchanged)
> console.log(modifiedString); // Output: "HELLO" (new modified string)
> ```

> 2. #### compared with value:
>    strings are compared with value, but objects are compared with reference / memory location.
> 3. #### Lack of explicit instantiation:
>    Unlike regular objects, strings do not require explicit instantiation using constructors or object literals. You can directly assign string literals to variables or use string manipulation methods without explicitly creating instances of the String object wrapper.  
>     we dont need to explicitly say , "hello there , this guy is a string"
