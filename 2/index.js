const Steps = {
  step: 0,
  Increase() {
    return (this.step += 1);
  },
  Decrease() {
    return (this.step -= 1);
  },
  Reset() {
    return (this.step = 0);
  },
  Read() {
    return this.step;
  },
};
console.log(Steps.Increase());
console.log(Steps.Increase());
console.log(Steps.Increase());
console.log(Steps.Increase());
console.log(Steps.Increase());
console.log(Steps.Reset());
console.log(Steps.Read());
