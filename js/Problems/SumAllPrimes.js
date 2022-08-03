// function sumPrimes(num) {
//   // Check all numbers for primality
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     if (primes.every((prime) => i % prime !== 0)) primes.push(i);
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0);
// }

// console.log(sumPrimes(10));

var str = "abcdefoihewfojias".split("");
var nth = 4; // the nth character you want to replace
var replaceWith = "|"; // the character you want to replace the nth value
for (var i = nth - 1; i < str.length - 1; i += nth) {
  str[i] = replaceWith;
}

console.log(str.join(""));
