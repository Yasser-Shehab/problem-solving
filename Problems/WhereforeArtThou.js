function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const sourceKeys = Object.keys(source);

  return collection.filter((collection) => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (
        !collection.hasOwnProperty(sourceKeys[i]) ||
        collection[sourceKeys[i]] !== source[sourceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  whatIsInAName([whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 })])
);
