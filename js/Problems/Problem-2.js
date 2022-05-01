// Number Reverse

//Solution 1
// function reverseStringOfNumbers(numbers) {
//   const reversedArr = [];
//   const numbArray = numbers.toString().split("");

//   for (let i = numbArray.length - 1; i >= 0; i--) {
//     reversedArr.push(numbArray[i]);
//   }
//   return reversedArr;
// }
// console.log(reverseStringOfNumbers(987654));

//Solution 2
function reverseStringOfNumbers(numbers) {
  const reversedArr = [];
  const numbArray = numbers.toString().split("");
  for (let i = 0; i < numbArray.length; i++) {
    reversedArr.unshift(numbArray[i]);
  }
  return reversedArr;
}

console.log(reverseStringOfNumbers(987654));
