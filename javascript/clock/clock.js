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
    const total_minutes = minute + this.minute;
    this.minute = total_minutes % 60;
    this.hour = (this.hour + Math.trunc(total_minutes/60)) % 24;
    return this;
  }

  minus(minute) {
    const total_minutes = this.minute - minute;

    if (total_minutes < 0) {
      this.minute = (total_minutes % 60) + 60;
      this.hour = (this.hour + Math.trunc(total_minutes/60) - 1);
      if (this.hour < 0) {
        this.hour = ((this.hour % 24) + 24) % 24;
      }
    } else {
      this.minute = total_minutes;
    }

    return this;
  }

  equals(other) {
    return this.hour == other.hour && this.minute == other.minute;
  }
}
