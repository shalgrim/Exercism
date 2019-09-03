//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  toString() {
    const output = "";
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

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
