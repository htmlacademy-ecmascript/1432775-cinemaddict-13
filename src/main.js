import FilmsNumberView from './view/films-number';
import MockFilm from './mock/films';
import UserMock from './mock/user';
import {render} from './util.js';
import CatalogPresenter from './presenter/catalog-presenter';
import FiltersPresenters from './presenter/filters-presenter';
import FilmsModel from './model/films-model';
import FilterModel from './model/filter-model';


const MOCK_FILMS = 15;
const AVAILABLE_FILMS = `123 456`;

const films = new Array(MOCK_FILMS).fill().map(() => {
  return new MockFilm().getNewFilm();
});
const user = new UserMock().userStats;

const filmsModel = new FilmsModel();
filmsModel.setFilms(films);

const filterModel = new FilterModel();

const siteMain = document.querySelector(`.main`);

const filtersPresenter = new FiltersPresenters(filmsModel, filterModel);
filtersPresenter.init(siteMain);

const catalogPresenter = new CatalogPresenter(filmsModel, filterModel);
catalogPresenter.init(user, siteMain);

const siteFooter = document.querySelector(`.footer`);
const footerStats = siteFooter.querySelector(`.footer__statistics`);
render(footerStats, new FilmsNumberView(AVAILABLE_FILMS));
