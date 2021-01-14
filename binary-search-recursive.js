function findElement(sortedArray, elementToSearchFor, currentIndex = 0) {
  const length = sortedArray.length;
  let halfwayPoint;

  if (length % 2 === 0) {
    halfwayPoint = length / 2;
  } else {
    halfwayPoint = Math.floor((sortedArray.length - 1) / 2);
  }

  const elementAtHalf = sortedArray[halfwayPoint];

  if (elementAtHalf === elementToSearchFor) {
    return currentIndex + halfwayPoint;
  }

  if (elementAtHalf < elementToSearchFor) {
    return findElement(
      sortedArray.slice(halfwayPoint),
      elementToSearchFor,
      (currentIndex += halfwayPoint)
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
