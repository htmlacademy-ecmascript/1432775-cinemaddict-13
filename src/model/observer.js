export default class Observer {
  constructor() {
    this._observers = [];
  }

  addObserver(cb) {
    this._observers.push(cb);
  }

  removeObserver(cb) {
    this._observers.filter((observer) => observer !== cb);
  }

  notify(event, payload) {
    this._observers.forEach((observer) => observer(event, payload));
  }
}
