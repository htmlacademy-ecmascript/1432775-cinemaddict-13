import {createElement} from '../util.js';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't create Abstract class`);
    }
    this._callback = {};
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Can't run abstract method`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  setHandler(event, cb, childIdentifier) {
    if (childIdentifier) {
      this._callback[childIdentifier] = {event: cb};
      this.getElement().querySelector(`${childIdentifier}`).addEventListener(`${event}`, this._callback[childIdentifier].event);
    } else {
      this._callback[event] = cb;
      this.getElement().addEventListener(`${event}`, this._callback[event]);
    }
  }

  removeHandler(event, childIdentifier) {
    if (childIdentifier) {
      this.getElement().querySelector(`${childIdentifier}`).removeEventListener(`${event}`, this._callback[childIdentifier].event);
      if (Object.keys(this._callback[childIdentifier]).length === 1) {
        delete this._callback[childIdentifier];
      } else {
        delete this._callback[childIdentifier].event;
      }
    } else {
      this.getElement().removeEventListener(`${event}`, this._callback[event]);
      delete this._callback[event];
    }
  }
}
