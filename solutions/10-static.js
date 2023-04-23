export default class Time {
  // BEGIN
  static fromString(string) {
    let [ hours, minutes ] = string.split(':');
    return new this(hours, minutes)
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
