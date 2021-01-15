function cartesianProduct(setA, setB) {
  const product = [];
  for (let itemA of setA) {
    if (!Array.isArray(itemA)) {
      itemA = [itemA];
    }
    for (const itemB of setB) {
      product.push([...itemA, itemB]);
    }
  }
  return product;
}

function cartesian(...sets) {
  return sets.reduce(cartesianProduct);
}

const colors = new Set(['blue', 'red']);
const sizes = new Set(['s', 'm', 'l', 'xl']);
const styles = new Set(['round neck', 'v neck']);

console.log(cartesian(colors, sizes, styles));

// Big O: O(n^x), x = number of input sets
// Space Complexity: O(n^x), x = number of input sets
