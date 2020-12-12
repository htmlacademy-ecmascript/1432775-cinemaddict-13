import {render} from '../util.js';
import FilmCardView from '../view/film-card';
import {replace, remove} from '../util.js';
import AbstractFilmCardPresenter from './abstract-card-presenter';
import DuplicatedFilmPresenter from './duplicated-card-presenter';

export default class CardPresenter extends AbstractFilmCardPresenter {
  constructor(filmChangeCb, userChangeCb, closePopupsCb) {
    super(filmChangeCb, userChangeCb, closePopupsCb);

    this._closePopups = closePopupsCb;
    this._duplicatedCards = [];
  }

  init(film, user, container = this._container) {
    this._film = film;
    this._user = user;
    this._container = container;

    const prevFilmCardView = this._card;

    this._card = new FilmCardView(this._film, this._user);

    this._setEventListeners();

    if (prevFilmCardView === null) {
      render(this._container, this._card);
      return;
    }

    if (this._container.contains(prevFilmCardView.getElement())) {
      replace(this._card, prevFilmCardView);
    }

    remove(prevFilmCardView);
    this._duplicatedCards.forEach((card) => card.init());
  }

  duplicateCard(container) {
    const duplicatedCard = new DuplicatedFilmPresenter(this._filmChange, this._userChange, this, this._closePopups);
    this._duplicatedCards.push(duplicatedCard);
    duplicatedCard.init(container);
  }

  closePopup() {
    this._duplicatedCards.forEach((card) => card.closePopup());
    if (this._popup) {
      remove(this._popup);
      document.removeEventListener(`keyup`, this._onPopupEscPress);
      this._pageBody.classList.remove(`hide-overflow`);
    }
  }

  destroy() {
    this._duplicatedCards.forEach((card) => card.destroy());
    remove(this._card);
  }
}
