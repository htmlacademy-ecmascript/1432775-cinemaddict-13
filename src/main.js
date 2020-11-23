import {createUserIcon} from './view/user-icon';
import {createSiteMenu} from './view/site-menu';
import {createSiteSort} from './view/site-sort';
import {createFilmsNumber} from './view/films-number';
import {createFilmCard} from './view/film-card';
import {createFilmsCatalog} from './view/films-catalog';
import {createShowMoreButton} from './view/show-more-button';
import {createTopRaitedContainer} from './view/top-raited-container';
import {createMostCommentedContainer} from './view/most-commented-container';
import {createMockFilm, AVAILABLE_FILMS} from './mock/films';
import {user} from './mock/user';
import {createFilmPopup} from './view/film-popup';

const MOCK_LILMS = 15;
const FILMS_CARDS_NUMBER = 5;
const FILMS_STEP_LOAD = 5;
const FILMS_TOP_RAITED_CARDS_NUMBER = 2;
const FILMS_MOST_COMMENTED_CARDS_NUMBER = 2;

const render = (container, place, content) => {
  container.insertAdjacentHTML(place, content);
};

const films = new Array(MOCK_LILMS).fill().map(createMockFilm);

const siteHeader = document.querySelector(`.header`);
render(siteHeader, `beforeend`, createUserIcon(user.avatar, user.raiting));

const siteMain = document.querySelector(`.main`);
render(siteMain, `afterbegin`, createSiteMenu(user));
render(siteMain, `beforeend`, createSiteSort());
render(siteMain, `beforeend`, createFilmsCatalog());

const filmsListContainer = siteMain.querySelector(`.films-list__container`);
for (let i = 0; i < Math.min(FILMS_CARDS_NUMBER, films.length); i++) {
  render(filmsListContainer, `beforeend`, createFilmCard(films[i]));
}

if (films.length > Math.max(FILMS_STEP_LOAD, FILMS_CARDS_NUMBER)) {
  let renderedFilms = FILMS_CARDS_NUMBER;

  const filmsCatalog = siteMain.querySelector(`.films-list`);
  render(filmsCatalog, `beforeend`, createShowMoreButton());

  const showBoreButton = filmsCatalog.querySelector(`.films-list__show-more`);
  showBoreButton.addEventListener(`click`, () => {
    films.slice(renderedFilms, renderedFilms + FILMS_STEP_LOAD).forEach((film) => render(filmsListContainer, `beforeend`, createFilmCard(film)));

    renderedFilms += FILMS_STEP_LOAD;

    if (renderedFilms >= films.length) {
      showBoreButton.remove();
    }
  });
}

const filmsContainer = siteMain.querySelector(`.films`);
render(filmsContainer, `beforeend`, createTopRaitedContainer());
render(filmsContainer, `beforeend`, createMostCommentedContainer());

const topRaitedFilmsContainer = filmsContainer.querySelector(`.films-list--extra .films-list__container`);
const filmsSortedByRaiting = films.slice().sort((previous, current) => {
  return current.raiting - previous.raiting;
});
for (let i = 0; i < FILMS_TOP_RAITED_CARDS_NUMBER; i++) {
  render(topRaitedFilmsContainer, `beforeend`, createFilmCard(filmsSortedByRaiting[i]));
}

const mostCommentedFilmsContainer = filmsContainer.querySelector(`.films-list--commented .films-list__container`);
for (let i = 0; i < FILMS_MOST_COMMENTED_CARDS_NUMBER; i++) {
  render(mostCommentedFilmsContainer, `beforeend`, createFilmCard(films.slice().sort((previous, current) => {
    return current.comments.length - previous.comments.length;
  })[i]));
}

const siteFooter = document.querySelector(`.footer`);
const footerStats = siteFooter.querySelector(`.footer__statistics`);
render(footerStats, `beforeend`, createFilmsNumber(AVAILABLE_FILMS));

const pageBody = document.querySelector(`.body`);
render(pageBody, `beforeend`, createFilmPopup(films[0]));
