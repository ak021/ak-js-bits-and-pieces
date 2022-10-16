const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//what if i need to convert the above to a function
//also check if there is enough space to move

const moveX = (element, amount, delay, onSuccess, onFailure) => {
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currentLeft = element.getBoundingClientRect().left;

  if (elRight + amount > bodyBoundary) {
    console.log("Done - cant move that far");
    if (onFailure) onFailure();
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${currentLeft + amount}px)`;
      if (onSuccess) onSuccess();
    }, delay);
  }
};

// moveX(btn, 100, 1000, () =>
//   moveX(btn, 100, 1000, () =>
//     moveX(btn, 100, 1000, () =>
//       moveX(btn, 100, 1000, () =>
//         moveX(btn, 1000, 1000, () => moveX(btn, 1000, 1000))
//       )
//     )
//   )
// );

//if we have two callbacks then it is real pain in the ass, code get messy after each callback

moveX(
  btn,
  100,
  1000,
  () => {
    //success
    moveX(
      btn,
      100,
      1000,
      () => {
        //success
      },
      () => {
        //fail
      }
    );
  },
  () => {
    //fail
    alert("cannot move further");
  }
);
