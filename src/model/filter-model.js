import Observer from './observer';
import {CATEGORIES} from "../const";

export default class FilterModel extends Observer {
  constructor() {
    super();
    this._filter = CATEGORIES.All;
  }

  getFilter() {
    return this._filter;
  }

  updateFilter(updateType, filterType) {
    this._filter = filterType;

    this.notify(updateType, filterType);
  }
}
