import SiteMenuView from '../view/site-menu';
import {UpdateType, UserAction} from "../const.js";
import {remove, render, replace} from '../util';

export default class Filters {
  constructor(filmsModel, filterModel) {
    this._filmsModel = filmsModel;
    this._filterModel = filterModel;
    this._siteMenuView = null;

    this._onModelAction = this._onModelAction.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._filterModel.addObserver(this._onModelAction);
  }

  init(container = this.container) {
    this.container = container;
    this._currentFilter = this._filterModel.getFilter();

    const prevFiltersView = this._siteMenuView;

    this._siteMenuView = new SiteMenuView(this._filmsModel.getFilms(), this._currentFilter);
    this._siteMenuView.setFilterChangeHandler(this._onFilterChange);

    if (!prevFiltersView) {
      render(this.container, this._siteMenuView, `afterbegin`);
      return;
    }

    replace(this._siteMenuView, prevFiltersView);
    remove(prevFiltersView);
  }

  _onViewAction(eventType, updateType, update) {
    switch (eventType) {
      case UserAction.UPDATE_FILTER:
        this._filterModel.updateFilter(updateType, update);
    }
  }

  _onModelAction(updateType, update) {
    // switch (updateType) {
    //   case UpdateType.PATCH:
    //     this._changeFilter(update);
    // }
    this.init();
  }

  _changeFilter(newFilter) {
    if (this._currentFilter === newFilter) {
      return;
    }

    if (!this._filtersButtons) {
      this._filtersButtons = Array.from(this._siteMenuView.getElement().querySelectorAll(`.main-navigation__item`));
    }

    this._filtersButtons.forEach((filterButton) => {
      if (filterButton.dataset.filterType === newFilter) {
        filterButton.classList.add(`main-navigation__item--active`);
        return;
      }
      filterButton.classList.remove(`main-navigation__item--active`);
    });
  }

  _onFilterChange(filterType) {
    this._onViewAction(UserAction.UPDATE_FILTER, UpdateType.MAJOR, filterType);
  }
}


