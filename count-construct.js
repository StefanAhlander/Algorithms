const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const numWaysForRest = canConstruct(
        target.slice(word.length),
        wordBank,
        memo
      );
      totalCount += numWaysForRest;
    }
  }

  memo[target] = totalCount;
  return totalCount;
};

console.log(canConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
);
