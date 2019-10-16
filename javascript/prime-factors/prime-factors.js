const isPrime = function(number) {
  if (number < 2) {
    return false;
  }

  if (number == 2) {
    return true;
  }

  if (number % 2 == 0) {
    return false;
  }

  for (var i = 3; i <= (number + 1) / 2; i += 2) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

const primeFactors = number => {
  let remaining = number;
  const answer = [];
  let lastPrime = 2;
  
  while (remaining >=2) {
    if (isPrime(remaining)) {
      answer.push(remaining);
      remaining = 1;
    }

    for (let i = lastPrime; remaining > 1; i++) {
      if (isPrime(i) && remaining % i == 0) {
        answer.push(i);
        lastPrime = i;
        remaining = remaining / i;
        break;
      }
    }
  }

  return answer;
};

module.exports = { isPrime, primeFactors };
