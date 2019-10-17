const getFactors = function(n) {
  const factors = [1];
  for (let i = 2; i < (n+1)/2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

export const classify = (n) => {
  if (n < 1) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  if (n === 1) {
    return 'deficient'; // ¯\_(ツ)_/¯
  }

  const factorSum = getFactors(n).reduce((x, y) => x + y);
  if (factorSum == n) {
    return 'perfect';
  }

  if (factorSum > n) {
    return 'abundant';
  }

  if (factorSum < n) {
    return 'deficient';
  }
};
