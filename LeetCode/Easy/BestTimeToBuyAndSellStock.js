//Not Working as Expected
var maxProfit = function (prices) {
  let getMin = Math.min(...prices);
  let indexOfMin = prices.indexOf(getMin);
  let arrayAfterMin = prices.slice(indexOfMin, prices.length);
  let maxNum = 0;
  for (let i = 1; i < arrayAfterMin.length; i++) {
    if (arrayAfterMin[i] > maxNum) {
      maxNum = arrayAfterMin[i];
    }
  }

  let res = maxNum - getMin;

  return res > 0 ? res : 0;
};

//Solution
var maxProfit2 = function (prices) {
  let largestNum = 0;
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[largestNum] > prices[i]) {
      largestNum = i;
    } else {
      result = Math.max(result, prices[i] - prices[largestNum]);
    }
  }
  return result;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
