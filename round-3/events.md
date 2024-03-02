# Events

## 1. What are events in Javascript?

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
