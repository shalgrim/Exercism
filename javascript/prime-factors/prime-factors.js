const isPrime = function(number) {
  console.log(`isPrime number: ${number}`)
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
  console.log(`number: ${number}`)
  let remaining = number;
  const answer = [];
  let lastPrime = 2;
  
  console.log(`remaining: ${remaining}`)
  while (remaining >=2) {
    console.log(`remaining: ${remaining}`)
    // return;  // last place where I can get stuff to stop
    if (isPrime(remaining)) {
      console.log('entering if')
      answer.push(remaining);
      console.log(`answer: ${answer}`)
      remaining = 1;
      console.log(`remaining: ${remaining}`)
    }
    console.log('through if')
    // return;  // get it to stop here but not when testing...

    console.log(`lastPrime: ${lastPrime}`); // 2
    console.log(`remaining: ${remaining}`); // 1...so remaining % i is never 0
    return;
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

// export {isPrime, primeFactors};
module.exports = { isPrime, primeFactors };
