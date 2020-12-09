import {render, isKeyPressed} from './util.js';
import FilmPopupView from './view/film-popup';
import FilmCardView from './view/film-card';

const pageBody = document.querySelector(`body`);
let popup;

export default class CardPresenter {
  constructor() {
    this._card = null;
  }

  init(container, film) {
    this._film = film;
    this._container = container;

    this._card = new FilmCardView(this._film);

    this._card.setPosterClickHandler(this._onCardPosterClick);
    this._card.setTitleClickHandler(this._onCardTitleClick);
    this._card.setCommentsClickHandler(this._onCardCommentsClick);

    this._closePopup = this._closePopup.bind(this);
    this._openPopup = this._openPopup.bind(this);

    render(this._container, this._card);
  }

  _closePopup() {
    if (pageBody.querySelector(`.film-details`)) {
      popup.getElement().remove();
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
