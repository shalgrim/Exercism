const ALLERGENS = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats',
]
export class Allergies {
  constructor(number) {
    this.bits = number.toString(2).split('').reverse().map(s => parseInt(s));
  }

  list() {
    const answer = [];
    for (var i = 0; i < ALLERGENS.length; i++) {
      if (this.bits[i]) {
        answer.push(ALLERGES[i]);
      }
    }
    return answer;
  }

  allergicTo(allergen) {
    return this.bits[ALLERGENS.indexOf(allergen)] == 1;
  }
}
