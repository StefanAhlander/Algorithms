function bubbleSort([...list], correctOrder) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (!correctOrder(list[i], list[j])) {
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
  }

  return list;
}

const unsortedList = [3, 6, 2, 88, 1, 65, -3, 76, 42, 23, 99];

function ascending(a, b) {
  return a < b;
}

function descending(a, b) {
  return a > b;
}

console.log(bubbleSort(unsortedList, ascending));
console.log(bubbleSort(unsortedList, descending));
