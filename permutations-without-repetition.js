function getPermutations(options) {
  const permutations = [];

  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutations(options.slice(1));

  const firstOption = options[0];

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      permutations.push(
        permutationInFront.concat([firstOption], permutationAfter)
      );
    }
  }

  return permutations;
}

const todoListItems = [
  'Walk the dog',
  'Clean the toilet',
  'Buy groceries',
  'Order food',
  'Do homework',
];

console.log(getPermutations(todoListItems));

// Time Complexity: O(n!) => factorial time complexity
