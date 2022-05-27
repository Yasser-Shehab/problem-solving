// var numberOfSteps = function (num) {
//   let stepsCounter = 0;
//   while (num > 0) {
//     if (num % 2 == 0) {
//       num /= 2;
//       stepsCounter++;
//     } else {
//       num -= 1;
//       stepsCounter++;
//     }
//   }
//   return stepsCounter;
// };

// console.log(numberOfSteps(123));
// var countOperations = function (num1, num2) {
//   let counter = 0;
//   while (num1 > 0 && num2 > 0) {
//     if (num1 >= num2) {
//       num1 -= num2;
//       counter++;
//     } else {
//       num2 -= num1;
//       counter++;
//     }
//   }
//   return counter;
// };

// console.log(countOperations(2, 3));

function filtering(string) {
  let filteredArray = string.split("#").join(",").split("$").join(",").split(",");
  let sortedArray = [];
  for (let i = 0; i < filteredArray.length; i++) {
    if (filteredArray[i]) {
      sortedArray.push(filteredArray[i]);
    }
  }

  return sortedArray.sort();
}

console.log(filtering("apple,banana,,,apple,student####student$$apple"));
