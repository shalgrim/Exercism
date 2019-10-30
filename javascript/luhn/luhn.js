import { getConsoleOutput } from "@jest/console";

const DIGIT_DOUBLER = {
  '0': '0',
  '1': '2',
  '2': '4',
  '3': '6',
  '4': '8',
  '5': '1',
  '6': '3',
  '7': '5',
  '8': '7',
  '9': '9',
};

const digitDoubler = function(digit) {
  return (digit < 5) ? digit * 2 : digit * 2 - 9;
}

export class Luhn {
  constructor(number) {
    this.number = number;
  }

  get valid() {
    if (this.number.length < 2) {
      return false;
    }

    const doubledDigits = this.number.split("").reverse().map((item, i) => {
      return (i % 2 == 1) ? digitDoubler(parseInt(item)) : parseInt(item);
    }).reverse();

    const sum = doubledDigits.reduce((x, y) => x + y);

    return (sum % 10 == 0) ? true : false;
  }
}
