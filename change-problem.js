const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetAmount = 129;

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

const change = computeChange(availableCoins, targetAmount);
console.log(change);
