// function abc() {
//   if (true) {
//     var a = 10;
//     let b = 12;
//     console.log(a);
//     console.log(b);
//     if (true) {
//       if (1) {
//         var c = 200;
//         console.log(c);
//       }
//     }
//   }
//   console.log(a);
//   console.log({ c });
// }

// abc();

// function abc() {
//   console.log(b);
// }

// var b = 120;
// abc();

function scope() {
  if (true) {
    if (1) {
      if (1) {
        var x = 1234;
      }
    }
  }
  console.log(x);
}

scope();
