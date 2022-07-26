function destroyer(arr, ...args) {
  const result = arr.filter((number) => !args.includes(number));
  return result;
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
