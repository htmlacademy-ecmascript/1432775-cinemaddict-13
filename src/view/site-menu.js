import AbstractView from './abstract-view';
import {Category} from "../const.js";

const createSiteMenu = (films, currentSort) => {
  let inWatchlist = 0;
  let inHistory = 0;
  let favourites = 0;
  films.forEach((film) => {
    if (film.isInWatchlist) {
      inWatchlist++;
    }
    if (film.isInHistory) {
      inHistory++;
    }
    if (film.isFavourite) {
      favourites++;
    }
  });

  const getActiveHtmlClass = (elementFilterType) => {
    return (elementFilterType === currentSort) ? ` main-navigation__item--active` : ``;
  };

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item${getActiveHtmlClass(Category.All)}" data-filter-type="${Category.All}">All movies</a>
    <a href="#watchlist" class="main-navigation__item${getActiveHtmlClass(Category.WATCHLIST)}" data-filter-type="${Category.WATCHLIST}">Watchlist <span class="main-navigation__item-count">${inWatchlist}</span></a>
    <a href="#history" class="main-navigation__item${getActiveHtmlClass(Category.HISTORY)}" data-filter-type="${Category.HISTORY}">History <span class="main-navigation__item-count">${inHistory}</span></a>
    <a href="#favorites" class="main-navigation__item${getActiveHtmlClass(Category.FAVOURITES)}" data-filter-type="${Category.FAVOURITES}">Favorites <span class="main-navigation__item-count">${favourites}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};

export default class SiteMenu extends AbstractView {
  constructor(films, currentFilter) {
    super();
    this._films = films;
    this._currentFilter = currentFilter;

    this._FilterChangeHandler = this._FilterChangeHandler.bind(this);
    this._statsButtonClickHandler = this._statsButtonClickHandler.bind(this);
  }

  getTemplate() {
    return createSiteMenu(this._films, this._currentFilter);
  }

  _FilterChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.dataset.filterType);
  }

  _statsButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.siteStateChange(evt);
  }

  setFilterChangeHandler(cb) {
    this._callback.filterTypeChange = cb;
    this.getElement().querySelector(`.main-navigation__items`).addEventListener(`click`, this._FilterChangeHandler);
  }

  setStatsButtonClickHandler(cb) {
    this._callback.siteStateChange = cb;
    this.getElement().querySelector(`.main-navigation__additional`).addEventListener(`click`, this._statsButtonClickHandler);
  }
}
