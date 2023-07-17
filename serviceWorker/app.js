const APP = {
  SW: null,
  init() {
    console.log({ init: this });
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then((reg) => {
          this.SW = reg.installing || reg.waiting || reg.active;
          console.log("service worker registered");
          this.sayHello();  
        })
        .catch((err) => {
          console.log("error registering service worker");
          console.log(err);
        });
    } else {
      console.log("service worker registration failed!");
    }
  },
  sayHello() {
    console.log({ hello: this });
  },
};

document.addEventListener("DOMContentLoaded", () => APP.init());
