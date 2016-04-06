export default class State {
  getErrors() {
    const errors = [];
    return errors;
  }

  isValid() {
    return !this.getErrors().length;
  }
}
