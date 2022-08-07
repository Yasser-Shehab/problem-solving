// let view;

// function initialize() {
//   let called = 0;
//   return function () {
//     if (called > 0) {
//       return;
//     } else {
//       view = "🙂";
//       called++;
//       console.log("view has been set!");
//     }
//   };
// }

// const initializeView = initialize();

// console.log(initializeView());
// console.log(initializeView());
// console.log(initializeView());

// console.log(view);
//------------------------------
//Exercise Two (First Solution)
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log(`I am at index ${i}`);
  }, 3000);
}
//(Second Solution)
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log(`I am at index ${array[closureI]}`);
    }, 3000);
  })(i);
}
