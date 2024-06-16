# iframe

- iframe is used to embed another html page into the current one
- it will give a nested browsing context
- They are commonly used to embed specific content like external ads, videos, tags, or other interactive elements into the page.

Direct access between frames are allowed when...

- the iframe doesnt mention any sandbox property or sandbox="allow-same-origin"

```html
<iframe src="/test.html">
  //the other case is where we add allow-same-origin for sandbox //now we will
  have access if the html is of same origin.
  <iframe sandbox="allow-same-origin" src="/test.html"> </iframe
></iframe>
```

and the parent html doc and the iframe htm doc have the same

- domain
- port
- protocol

---

but if `sandbox=""` then there will not be any direct access possible between parent and the child

```html
<iframe sandbox="" src="/test.html"> </iframe>
```
