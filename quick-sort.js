function quickSort([...arr]) {
  if (arr.length <= 1) {
    return arr;
  }

  const smallerElementsArray = [];
  const biggerElementsArray = [];
  const pivotElement = arr.shift();
  const equalsArray = [pivotElement];

  while (arr.length) {
    const currentElement = arr.shift();
    if (currentElement === pivotElement) {
      equalsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }
  }

  const smallerElementsSortedArray = quickSort(smallerElementsArray);
  const biggerElementsSortedArray = quickSort(biggerElementsArray);

  return [
    ...smallerElementsSortedArray,
    ...equalsArray,
    ...biggerElementsSortedArray,
  ];
}

const unsortedArray = [3, 6, 10, 4, -3, 99, 1, -3, 100];

console.log(quickSort(unsortedArray));

// Time Complexity
// Recursive step runtime: O(n^logb(a)) => O(n^log2(2)) => O(n)
// where a = number of subproblems and b = relative subproblem size (what is the original divided by?)
// Runtime outside of the recursion: O(n)
// Algorithm runtime: O(n^logb(a) * log(n)) => O(n * log n)
