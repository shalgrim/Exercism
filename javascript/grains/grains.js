import BigInt from './lib/big-integer'

export class Grains {
  square(square_number) {
    return BigInt(2).pow(square_number-1).toString();
  }

  total() {
    throw new Error("Remove this statement and implement this function");
  }
}
