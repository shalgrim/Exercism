export class Squares {
  constructor(n) {
    this.n = n; 
  }

  get sumOfSquares() {
    if (!this.squares) {
      this.squares = [];
      for (let i = 1; i <=this.n; i++) {
        this.squares.push(i*i);
      }

    }
    return this.squares.reduce((a, b) => a + b);
  }

  get squareOfSum() {
    if (!this.sum) {
      this.sum = 0;
      for (let i = 1; i <= this.n; i++) {
        this.sum += i;
      }

    }

    return this.sum * this.sum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
