import BigInt from './lib/big-integer'

export class Grains {
  square(square_number) {
    return BigInt(2).pow(square_number-1).toString();
  }

  total() {
    let total = BigInt.zero;
    for (let i = 0; i < 64; i++) {
      total = BigInt(2).pow(i).add(total);
    }

    return total.toString();
  }
}
