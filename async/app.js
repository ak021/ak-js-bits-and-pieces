// console.log("i am the first one");

// setTimeout(() => {
//   console.log("i am the second one");
// }, 0);

// console.log("i am the third one");

//callback hell

const btn = document.querySelector("button");

setTimeout(() => {
  btn.style.transform = `translateX(100px)`;
  setTimeout(() => {
    btn.style.transform = `translateX(200px)`;
    setTimeout(() => {
      btn.style.transform = `translateX(300px)`;
    }, 1000);
  }, 1000);
}, 1000);
