## Service Worker

---

> **A service worker is run in a worker context: it therefore has no DOM access, and runs on a different thread to the main JavaScript that powers your app, so it is non-blocking. It is designed to be fully async; as a consequence, APIs such as <span style="color:red">synchronous XHR</span> and <span style="color:red">Web Storage (localStorage and sessionStorage)</span> can't be used inside a service worker.**

### Life Cycle
