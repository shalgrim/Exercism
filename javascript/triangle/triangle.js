//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }

  kind() {
    if (this.s1 <= 0 || this.s2 <= 0 || this.s3 <= 0)
    {
      throw new Error('All sides need positive length');
    } else if (this.s1 + this.s2 < this.s3 || this.s1 + this.s3 < this.s2 || this.s2 + this.s3 < this.s1) {
      throw new Error('triangle inequality violated')
    } else if (this.s1 == this.s2 && this.s2 == this.s3) {
      return 'equilateral';
    } else if (this.s1 == this.s2 || this.s1 == this.s3 || this.s2 == this.s3) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}
