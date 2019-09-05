export class Clock {
  constructor(hour, minute=0) {
    this.hour = (hour + Math.trunc(minute / 60)) % 24;
    if (this.hour < 0) {
      this.hour = 24 + this.hour;
    }

    if (minute < 0) {
      this.hour -= 1;
    }

    this.minute = minute % 60;

    if (this.minute < 0) {
      this.minute = 60 + this.minute;
    }
  }

  toString() {
    let output = "";
    if (this.hour < 10)
    {
      output += "0";
    }

    output += this.hour + ':';

    if (this.minute < 10)
    {
      output += "0";
    }

    output += this.minute;
    return output;
  }

  plus(minute) {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
