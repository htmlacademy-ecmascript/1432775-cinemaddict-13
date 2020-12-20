import FilmsNumberView from './view/films-number';
import MockFilm from './mock/films';
import UserMock from './mock/user';
import {comments} from './mock/comments';
import {render} from './util.js';
import CatalogPresenter from './presenter/catalog-presenter';
import FiltersPresenters from './presenter/filters-presenter';
import FilmsModel from './model/films-model';
import FilterModel from './model/filter-model';
import CommentsModel from './model/comments-model';


const MOCK_FILMS = 15;
const AVAILABLE_FILMS = `123 456`;

const films = new Array(MOCK_FILMS).fill().map(() => {
  return new MockFilm().getNewFilm();
});
const user = new UserMock().userStats;

const filmsModel = new FilmsModel();
filmsModel.setFilms(films);

const filterModel = new FilterModel();

const commentsModel = new CommentsModel();
commentsModel.setComments(comments);

const siteMain = document.querySelector(`.main`);

const filtersPresenter = new FiltersPresenters(filmsModel, filterModel);
filtersPresenter.init(siteMain);

const catalogPresenter = new CatalogPresenter(filmsModel, filterModel, commentsModel);
catalogPresenter.init(user, siteMain);

const siteFooter = document.querySelector(`.footer`);
const footerStats = siteFooter.querySelector(`.footer__statistics`);
render(footerStats, new FilmsNumberView(AVAILABLE_FILMS));
