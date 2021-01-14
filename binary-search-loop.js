function findElement(sortedArray, elementToSearchFor) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (sortedArray[middleIndex] === elementToSearchFor) {
      return middleIndex;
    }

    if (sortedArray[middleIndex] < elementToSearchFor) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

const array = [3, 6, 56, 78, 102, 256, 257, 1000, 1180, 1234];

array.forEach((el) => {
  console.log(findElement(array, el));
});
