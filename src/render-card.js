import {render, isKeyPressed} from './util.js';
import FilmPopupView from './view/film-popup';
import FilmCardView from './view/film-card';

const pageBody = document.querySelector(`body`);

export const renderCard = (container, film) => {
  const card = new FilmCardView(film);
  const popup = new FilmPopupView(film);

  const closePopup = () => {
    popup.getElement().remove();
    popup.getElement().querySelector(`.film-details__close-btn`).removeEventListener(`click`, onPopupCrossClick);
    // popup.removeHandler();
    document.removeEventListener(`keyup`, onPopupEscPress);
    pageBody.classList.remove(`hide-overflow`);
  };

  const openPopup = (evt) => {
    evt.preventDefault();
    if (pageBody.querySelector(`.film-details`)) {
      closePopup();
    }
    render(pageBody, popup.getElement());
    popup.setHandler(`click`, onPopupCrossClick, `.film-details__close-btn`);
    document.addEventListener(`keyup`, onPopupEscPress);
    pageBody.classList.add(`hide-overflow`);
  };

  const onCardPosterClick = (evt) => {
    openPopup(evt);
  };

  const onCardTitleClick = (evt) => {
    openPopup(evt);
  };

  const onCardCommentsClick = (evt) => {
    openPopup(evt);
  };

  const onPopupEscPress = (evt) => {
    isKeyPressed(evt, closePopup, `Escape`);
  };

  const onPopupCrossClick = () => {
    closePopup();
  };

  card.setHandler(`click`, onCardPosterClick, `.film-card__poster`);
  card.setHandler(`click`, onCardTitleClick, `.film-card__title`);
  card.setHandler(`click`, onCardCommentsClick, `.film-card__comments`);

  render(container, card.getElement());
};
