function findElement(sortedArray, elementToSearchFor, currentIndex = 0) {
  let halfwayPoint = Math.floor((sortedArray.length - 1) / 2);

  const elementAtHalf = sortedArray[halfwayPoint];

  if (elementAtHalf === elementToSearchFor) {
    return currentIndex + halfwayPoint;
  }

  if (elementAtHalf < elementToSearchFor) {
    return findElement(
      sortedArray.slice(halfwayPoint + 1),
      elementToSearchFor,
      (currentIndex += halfwayPoint + 1)
    );
  } else {
    return findElement(
      sortedArray.slice(0, halfwayPoint),
      elementToSearchFor,
      currentIndex
    );
  }
}

const array_1 = [3, 6, 56, 78, 102, 256, 257, 1000, 1180, 1234];
const array_2 = [3, 6, 56, 78, 102, 256, 257, 1000, 1180, 1234, 2345];

array_1.forEach((el) => {
  console.log(findElement(array_1, el));
});

array_2.forEach((el) => {
  console.log(findElement(array_2, el));
});
