import AbstractView from './abstract-view';

export default class ViewWithHandler extends AbstractView {
  constructor() {
    super();
    this._callback = {};
  }
  setHandler(event, cb, childIdentifier) {
    if (childIdentifier) {
      this._callback[childIdentifier] = cb;
      this.getElement().querySelector(`${childIdentifier}`).addEventListener(`${event}`, this._callback[event]);
    } else {
      this._callback[event] = cb;
      this.getElement().addEventListener(`${event}`, this._callback[event]);
    }
  }

  removeHandler(event) {
    this.getElement().removeEventListener(`${event}`, this._callback[event]);
  }
}
