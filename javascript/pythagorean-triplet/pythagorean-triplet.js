import { removeTypeDuplicates } from "@babel/types";

export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return [this.a, this.b, this.c].reduce((x, y) => x + y);
  }

  product() {
    return [this.a, this.b, this.c].reduce((x, y) => x * y);
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 == this.c ** 2;
  }

  toString() {
    return this.a.toString() + this.b.toString() + this.c.toString();
  }

  static where(o) {
    const minFactor = o.minFactor || 1;
    const maxFactor = o.maxFactor;
    const triplets = [];
    let t;

    for (let c = maxFactor; c >= minFactor; c--) {
      for (let b = c-1; b >= minFactor; b--) {
        for (let a = b-1; a >= minFactor; a--) {
          t = new Triplet(a, b, c);
          if (t.isPythagorean()) {
            if (!o.sum || (o.sum && t.sum() == o.sum)) {
              triplets.push(t);
            }
          }
        }
      }
    }
    
    return triplets;
  }
}
