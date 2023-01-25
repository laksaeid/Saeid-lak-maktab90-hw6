const Steps = {
  step: 0,
  Increase() {
    this.step++;
    return this;
  },
  Decrease() {
    this.step--;
    return this;
  },
  Reset() {
    this.step = 0
    return this;
  },
  Read() {
    return this.step;
  },
};
Steps.Increase().Increase().Increase().Decrease().Reset();
console.log(Steps.step);
