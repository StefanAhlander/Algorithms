const availableCoins = [8, 6, 5, 1];
const targetAmount = 63;

function computeChange(coins, amount) {
  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(amount / coin);

    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    amount -= count * coin;
  }

  return calculatedChange;
}

function computeChangeBruteForce(coins, amount) {
  let results = [];
  for (let i = 0; i < coins.length; i++) {
    results.push(computeChange(coins.slice(i), amount));
  }

  let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER;
  let finalResult;
  for (result of results) {
    if (result.numberOfCoins < smallestAmountOfCoins) {
      smallestAmountOfCoins = result.numberOfCoins;
      finalResult = result;
    }
  }

  return finalResult;
}

const change = computeChangeBruteForce(availableCoins, targetAmount);
console.log(change);

// time complexity gready algorithm = 0(n)
// time complexity brute force algorithm = 0(n^2)
//
