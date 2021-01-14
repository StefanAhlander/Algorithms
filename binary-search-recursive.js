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

const array = [3, 6, 56, 78, 102, 256, 257, 1000, 1180, 1234];

array.forEach((el) => {
  console.log(findElement(array, el));
});
