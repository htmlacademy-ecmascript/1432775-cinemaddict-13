import {render, isKeyPressed} from '../util.js';
import FilmPopupView from '../view/film-popup';
import FilmCardView from '../view/film-card';
import {replace, remove, updateUserPropertyArray} from '../util.js';

const pageBody = document.querySelector(`body`);
let popup;

export default class CardPresenter {
  constructor(filmChangeCb, userChangeCb) {
    this._card = null;
    this._filmChange = filmChangeCb;
    this._userChange = userChangeCb;
    this._duplicatedCards = [];

    this._closePopup = this._closePopup.bind(this);
    this._openPopup = this._openPopup.bind(this);
    this._onCardPosterClick = this._onCardPosterClick.bind(this);
    this._onCardTitleClick = this._onCardTitleClick.bind(this);
    this._onCardCommentsClick = this._onCardCommentsClick.bind(this);
    this._onPopupEscPress = this._onPopupEscPress.bind(this);
    this._onPopupCrossClick = this._onPopupCrossClick.bind(this);
    this._onCardWatchlistClick = this._onCardWatchlistClick.bind(this);
    this._onCardToHistoryClick = this._onCardToHistoryClick.bind(this);
    this._onCardFavouritesClick = this._onCardFavouritesClick.bind(this);
  }

  init(film, user, container = this._container) {
    this._film = film;
    this._user = user;
    this._container = container;

    const prevFilmCardView = this._card;

    this._card = new FilmCardView(this._film, this._user);

    this._card.setPosterClickHandler(this._onCardPosterClick);
    this._card.setTitleClickHandler(this._onCardTitleClick);
    this._card.setCommentsClickHandler(this._onCardCommentsClick);
    this._card._setToWatchListButtonClickHandler(this._onCardWatchlistClick);
    this._card._setWatchedButtonClickHandler(this._onCardToHistoryClick);
    this._card._setToFavouritesButtonClickHandler(this._onCardFavouritesClick);

    if (prevFilmCardView === null) {
      render(this._container, this._card);
      return;
    }

    if (this._container.contains(prevFilmCardView.getElement())) {
      replace(this._card, prevFilmCardView);
    }

    remove(prevFilmCardView);
  }

  duplicateCard(container) {
    // console.log(this._card);
    const duplicatedCard = Object.assign({}, this._card);
    duplicatedCard._element = duplicatedCard._element.cloneNode(true);
    duplicatedCard.setPosterClickHandler(this._onCardPosterClick);
    this._duplicatedCards.push(duplicatedCard);
    console.log(duplicatedCard);
    render(container, duplicatedCard._element);
  }

  destroy() {
    remove(this._card);
  }

  _closePopup() {
    if (pageBody.querySelector(`.film-details`)) {
      remove(popup);
      document.removeEventListener(`keyup`, this._onPopupEscPress);
      pageBody.classList.remove(`hide-overflow`);
    }
  }

  _openPopup(evt) {
    evt.preventDefault();
    this._closePopup();
    popup = new FilmPopupView(this._film);
    render(pageBody, popup);
    popup.setCrossClickHandler(this._onPopupCrossClick);
    document.addEventListener(`keyup`, this._onPopupEscPress);
    pageBody.classList.add(`hide-overflow`);
  }

  _onCardWatchlistClick() {
    this._userChange(`watchlist`, updateUserPropertyArray(this._user.watchlist, this._film.id), this._film);
  }

  _onCardFavouritesClick() {
    this._userChange(`favourites`, updateUserPropertyArray(this._user.favourites, this._film.id), this._film);
  }

  _onCardToHistoryClick() {
    this._userChange(`history`, updateUserPropertyArray(this._user.history, this._film.id), this._film);
  }

  _onCardPosterClick(evt) {
    this._openPopup(evt);
  }

  _onCardTitleClick(evt) {
    this._openPopup(evt);
  }

  _onCardCommentsClick(evt) {
    this._openPopup(evt);
  }

  _onPopupEscPress(evt) {
    isKeyPressed(evt, this._closePopup, `Escape`);
  }

  _onPopupCrossClick() {
    this._closePopup();
  }
}
