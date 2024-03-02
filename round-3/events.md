# Events

## 1. What are events in Javascript?

JavaScript is meant to add interactivity to your pages: the user does something and the page reacts.
When the user does something an event takes place. There are also some events that aren’t directly caused by the user: the load event that fires when a page has been loaded, for instance.

Events are the things that happens in the system you are programming.The system produces a signal of some kind when an event occurs.

Event can be something the browser does, or something a user does.  
Here are some examples of HTML events:

- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked

To react to an event, you attach an event handler to it. Which is block of code that runs when that even occurs. When such a block of code is defined to run in response to an event, we say we are **registering an event handler**. **Event handlers** are sometimes called **event listeners**.

removing an event listener with AbortController();

```javaScript
const controller = new AboutController();
btn.addEventListener("click",() => {
    console.log("clicked");
    },
    {signal: controller.signal}
    )
// we can remove the event listener
//removes any/all event handlers associated with this controller
controller.abort();

```

The target/srcElement properties contain a reference to the HTML element the event originally took place on. Very useful, but when the event is captured or bubbles up the target/srcElement doesn’t change: it’s still the element the event originally took place on.

## addEventListener()

Attaches event handlers to the target.
Target can be

- Element and its children
- document
- window

> Note: Many event targets (including elements, documents, and windows) also support setting event handlers via onevent properties and attributes.

addEventListener allows adding more than one handler for an event.
but if a particular anonymous function is in the list of event listeners registered for a certain target, and then later in the code, an identical anonymous function is given in an addEventListener call, the second function will also be added to the list of event listeners for that target.

Indeed, anonymous functions are not identical even if defined using the same unchanging source-code called repeatedly, even if in a loop.

```javaScript
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

## DOM event flow

#### If an element and one of its ancestors have an event handler for the same event, which one should fire first?

![problem-statement](./ss/image-1.png)

There are two ways this can be configured

- Event on element1 takes place first is called **event capturing**
- Event on element2 takes place first is called **event bubbling**

**Event capturing**  
![event-capturing](./ss/image-2.png)

When we use event capturing the event handler of element1 firse first, and then event in element2

**Event bubbling**  
![event-bubbling](./ss/image-3.png)

When we use event bubbling the event handlers of element2 fires first then element1

**W3C Model**  
Any event taking place in the W3C event model is **first captured** until it reaches the target element and **then bubbles** up again.

> Note: The W3C (World Wide Web Consortium) is an international organization that creates standards for the World Wide Web. The WC3 is committed to improving the web by setting and promoting web-based standards.

![w3c](./ss/image-4.png)

Web developer, can choose whether to register an event handler in the capturing or in the bubbling phase. This is done through the addEventListener() method. If its last argument is **true** the event handler is set for the **capturing phase**, if it is **false** the event handler is set for the **bubbling phase**.

```javascript
element1.addEventListener("click", doSomething2, true);
element2.addEventListener("click", doSomething, false);
```

If the user clicks on element2 the following happens:

1. The click event starts in the capturing phase. The event looks if any ancestor element of element2 has a onclick event handler for the capturing phase.
2. The event finds one on element1. doSomething2() is executed.
3. The event travels down to the target itself, no more event handlers for the capturing phase are found. The event moves to its bubbling phase and executes doSomething(), which is registered to element2 for the bubbling phase.
4. The event travels upwards again and checks if any ancestor element of the target has an event handler for the bubbling phase. This is not the case, so nothing happens.

**It always happens**  
What you first need to understand is that event capturing or bubbling always happens. If you define a general onclick event handler for your entire document, any click event on any element in the document will eventually bubble up to the document and if there is any general event attached it will fire this general event handler. Only when a previous event handling script explicitly orders the event to stop bubbling, it will not propagate to the document.

**Turning it off**  
But usually you want to turn all capturing and bubbling off to keep functions from interfering with each other. Besides, if your document structure is very complex (lots of nested tables and such) you may save system resources by turning off bubbling. The browser has to go through every single ancestor element of the event target to see if it has an event handler. Even if none are found, the search still takes time.

In the W3C model you must call the event’s stopPropagation() method.

```js
e.stopPropagation();
```

This stops all propagation of the event in the bubbling phase.

**Event delegation**  
Event delegation is a technique in JavaScript where we delegate the responsibility of handling an event to a parent element. By doing so, we avoid attaching multiple event listeners to individual elements, especially when dealing with a large number of similar elements, such as a list or a table.
