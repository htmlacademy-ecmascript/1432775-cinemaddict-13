import UserIconView from '../view/user-icon';
import SiteMenuView from '../view/site-menu';
import SiteSortView from '../view/site-sort';
// import FilmsNumberView from './view/films-number';
import SiteCatalogView from '../view/films-catalog';
import ShowMoreButtonView from '../view/show-more-button';
import TopRaitedContainerView from '../view/top-raited-container';
import MostCommentedContainerView from '../view/most-commented-container';
import {render} from '../util.js';
import {renderCard} from '../render-card';
import FilmCardPresenter from './film-card-presenter';

export default class Catalog {
  constructor() {
    this._siteSortView = new SiteSortView();
    this._showMoreButton = new ShowMoreButtonView();
    this._topRaitedContainerView = new TopRaitedContainerView();
    this._mostCommentedContainerView = new MostCommentedContainerView();
    this._userIconView = null;
    this._siteMenuView = null;
    this._siteCatalog = null;

    this._FILMS_CARDS_NUMBER = 5;
    this._FILMS_STEP_LOAD = 5;
    this._FILMS_TOP_RAITED_CARDS_NUMBER = 2;
    this._FILMS_MOST_COMMENTED_CARDS_NUMBER = 2;
    this._renderedFilms = this._FILMS_CARDS_NUMBER;

    this._onShowMoreButtonClick = this._onShowMoreButtonClick.bind(this);
  }

  init(films, user) {
    this._films = films;
    this._user = user;
    this._userIconView = new UserIconView(this._user.avatar, this._user.raiting);
    this._siteMenuView = new SiteMenuView(this._user);

    const siteHeader = document.querySelector(`.header`);
    render(siteHeader, this._userIconView);

    this._siteMain = document.querySelector(`.main`);
    render(this._siteMain, this._siteMenuView, `afterbegin`);

    this._renderCatalog();
  }

  _renderNoFilms() {
    if (this._films.length < 1) {
      render(this._siteMain, this._siteCatalog);
      return;
    }
  }

  _renderSort() {
    render(this._siteMain, this._siteSortView);
  }

  // _renderCard(container, film) {
  //   const filmPresenter = new FilmCardPresenter();
  //   filmPresenter.init(container, film);
  // }

  _renderFilmCards() {
    for (let i = 0; i < Math.min(this._FILMS_CARDS_NUMBER, this._films.length); i++) {
      renderCard(this._filmsListContainer, this._films[i]);
    }
  }

  _onShowMoreButtonClick() {
    this._films.slice(this._renderedFilms, this._renderedFilms + this._FILMS_STEP_LOAD).forEach((film) => renderCard(this._filmsListContainer, film));

    this._renderedFilms += this._FILMS_STEP_LOAD;

    if (this._renderedFilms >= this._films.length) {
      this._showMoreButton.getElement().remove();
    }
  }

  _renderShowMoreButton() {
    if (this._films.length > Math.max(this._FILMS_STEP_LOAD, this._FILMS_CARDS_NUMBER)) {

      render(this._siteCatalog.getElement().querySelector(`.films-list`), this._showMoreButton);

      this._showMoreButton.setClickHandler(this._onShowMoreButtonClick);
    }
  }

  _renderTopRaitedContainer() {
    render(this._siteCatalog, this._topRaitedContainerView);
  }

  _renderMostCommentedContainer() {
    render(this._siteCatalog, this._mostCommentedContainerView);
  }

  _renderTopRaitedFilms() {
    const topRaitedFilmsContainer = this._siteCatalog.getElement().querySelector(`.films-list--extra .films-list__container`);
    const filmsSortedByRaiting = this._films.slice().sort((previous, current) => {
      return current.raiting - previous.raiting;
    });
    for (let i = 0; i < Math.min(this._FILMS_TOP_RAITED_CARDS_NUMBER, filmsSortedByRaiting.length); i++) {
      renderCard(topRaitedFilmsContainer, filmsSortedByRaiting[i]);
    }
  }

  _renderMostCommentedFilms() {
    const mostCommentedFilmsContainer = this._siteCatalog.getElement().querySelector(`.films-list--commented .films-list__container`);
    const filmsSortedByComments = this._films.slice().sort((previous, current) => {
      return current.comments.length - previous.comments.length;
    });
    for (let i = 0; i < Math.min(this._FILMS_MOST_COMMENTED_CARDS_NUMBER, filmsSortedByComments.length); i++) {
      renderCard(mostCommentedFilmsContainer, filmsSortedByComments[i]);
    }
  }

  _renderCatalog() {
    this._siteCatalog = new SiteCatalogView(this._films.length < 1);

    this._renderNoFilms();

    this._renderSort();
    render(this._siteMain, this._siteCatalog);

    this._filmsListContainer = this._siteCatalog.getElement().querySelector(`.films-list__container`);
    this._renderFilmCards();

    this._renderShowMoreButton();

    this._renderTopRaitedContainer();
    this._renderMostCommentedContainer();

    this._renderTopRaitedFilms();
    this._renderMostCommentedFilms();
  }
}
