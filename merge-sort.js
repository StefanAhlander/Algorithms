function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  const mergedArray = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;

  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length
  ) {
    if (
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArray.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArray.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }

  return mergedArray;
}

const unsortedArray = [-10, 33, 5, 10, 9, 3, -19, -99, 100];

console.log(mergeSort(unsortedArray));

// Time Complexity
// recursive step runtime time complexity: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// outside of the recursive step: O(n)
// Algorithm time complexity: O(n * log n);
