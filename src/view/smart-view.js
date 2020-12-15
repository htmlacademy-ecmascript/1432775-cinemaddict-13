import AbstractView from './abstract-view';

export default class SmartView extends AbstractView {
  constructor() {
    super();
    this._data = {};
    this._data.scroll = null;
  }
  updateElement() {
    this._getScroll();
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();
    const newElement = this.getElement();
    parent.replaceChild(newElement, prevElement);
    this._restoreHandlers();
    this._scrollToY();
  }

  _restoreHandlers() {
    throw new Error(`Can't run abstract method: _restoreHandlers`);
  }

  updateData(updatedData, isWithoutReloading) {
    this._data = Object.assign({}, this._data, updatedData);
    if (isWithoutReloading) {
      return;
    }
    this.updateElement();
  }

  _scrollToY() {
    this.getElement().scroll(0, this._data.scroll);
  }

  _getScroll() {
    this._data.scroll = this.getElement().scrollTop;
  }
}
