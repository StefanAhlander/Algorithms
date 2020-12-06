/**
 * Each item can be used only once.
 */

const items = [
  { name: 'a', value: 3, weight: 3 },
  { name: 'b', value: 6, weight: 8 },
  { name: 'c', value: 10, weight: 3 },
];

const maxCap = 8;

function knapsackFn(items, cap, itemIndex, memo) {
  if (memo[cap][itemIndex]) {
    return memo[cap][itemIndex];
  }

  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (cap < items[itemIndex].weight) {
    return knapsackFn(items, cap, itemIndex - 1);
  }

  const sackWithItem = knapsackFn(
    items,
    cap - items[itemIndex].weight,
    itemIndex - 1
  );

  const sackWithoutItem = knapsackFn(items, cap, itemIndex - 1);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;

  let result;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };

    result = updatedSack;
  } else {
    result = sackWithoutItem;
  }

  return result;
}

function knapsack(items, cap, itemIndex) {
  const memo = Array.from(Array(cap + 1), () =>
    Array(items.length).fill(undefined)
  );
  return knapsackFn(items, cap, itemIndex, memo);
}

const sack = knapsack(items, maxCap, items.length - 1);
console.log(sack);
