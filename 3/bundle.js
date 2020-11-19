/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_user_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/user-icon */ "./src/view/user-icon.js");
/* harmony import */ var _view_site_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/site-menu */ "./src/view/site-menu.js");
/* harmony import */ var _view_site_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/site-sort */ "./src/view/site-sort.js");
/* harmony import */ var _view_films_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/films-number */ "./src/view/films-number.js");
/* harmony import */ var _view_film_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/film-card */ "./src/view/film-card.js");
/* harmony import */ var _view_films_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/films-catalog */ "./src/view/films-catalog.js");
/* harmony import */ var _view_show_more_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/show-more-button */ "./src/view/show-more-button.js");
/* harmony import */ var _view_top_raited_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/top-raited-container */ "./src/view/top-raited-container.js");
/* harmony import */ var _view_most_commented_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/most-commented-container */ "./src/view/most-commented-container.js");











const FILMS_CARDS_NUMBER = 5;
const FILMS_TOP_RAITED_CARDS_NUMBER = 2;
const FILMS_MOST_COMMENTED_CARDS_NUMBER = 2;

const render = (container, place, content) => {
  container.insertAdjacentHTML(place, content);
};

const siteHeader = document.querySelector(`.header`);
render(siteHeader, `beforeend`, Object(_view_user_icon__WEBPACK_IMPORTED_MODULE_0__["createUserIcon"])());

const siteMain = document.querySelector(`.main`);
render(siteMain, `afterbegin`, Object(_view_site_menu__WEBPACK_IMPORTED_MODULE_1__["createSiteMenu"])());
render(siteMain, `beforeend`, Object(_view_site_sort__WEBPACK_IMPORTED_MODULE_2__["createSiteSort"])());
render(siteMain, `beforeend`, Object(_view_films_catalog__WEBPACK_IMPORTED_MODULE_5__["createFilmsCatalog"])());

const filmsListContainer = siteMain.querySelector(`.films-list__container`);
for (let i = 0; i < FILMS_CARDS_NUMBER; i++) {
  render(filmsListContainer, `beforeend`, Object(_view_film_card__WEBPACK_IMPORTED_MODULE_4__["createFilmCard"])());
}

const filmsCatalog = siteMain.querySelector(`.films-list`);
render(filmsCatalog, `beforeend`, Object(_view_show_more_button__WEBPACK_IMPORTED_MODULE_6__["createShowMoreButton"])());

const filmsContainer = siteMain.querySelector(`.films`);
render(filmsContainer, `beforeend`, Object(_view_top_raited_container__WEBPACK_IMPORTED_MODULE_7__["createTopRaitedContainer"])());
render(filmsContainer, `beforeend`, Object(_view_most_commented_container__WEBPACK_IMPORTED_MODULE_8__["createMostCommentedContainer"])());

const topRaitedFilmsContainer = filmsContainer.querySelector(`.films-list--extra .films-list__container`);
for (let i = 0; i < FILMS_TOP_RAITED_CARDS_NUMBER; i++) {
  render(topRaitedFilmsContainer, `beforeend`, Object(_view_film_card__WEBPACK_IMPORTED_MODULE_4__["createFilmCard"])());
}

const mostCommentedFilmsContainer = filmsContainer.querySelector(`.films-list--commented .films-list__container`);
for (let i = 0; i < FILMS_MOST_COMMENTED_CARDS_NUMBER; i++) {
  render(mostCommentedFilmsContainer, `beforeend`, Object(_view_film_card__WEBPACK_IMPORTED_MODULE_4__["createFilmCard"])());
}

const siteFooter = document.querySelector(`.footer`);
const footerStats = siteFooter.querySelector(`.footer__statistics`);
render(footerStats, `beforeend`, Object(_view_films_number__WEBPACK_IMPORTED_MODULE_3__["createFilmsNumber"])());


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: createFilmCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCard", function() { return createFilmCard; });
const createFilmCard = () => {
  return `<article class="film-card">
  <h3 class="film-card__title">Title</h3>
  <p class="film-card__rating">0</p>
  <p class="film-card__info">
    <span class="film-card__year">0000</span>
    <span class="film-card__duration">0m</span>
    <span class="film-card__genre">genre</span>
  </p>
  <img src="./images/posters/900x1366.png" alt="" class="film-card__poster">
  <p class="film-card__description">description</p>
  <a class="film-card__comments">0 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};


/***/ }),

/***/ "./src/view/films-catalog.js":
/*!***********************************!*\
  !*** ./src/view/films-catalog.js ***!
  \***********************************/
/*! exports provided: createFilmsCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsCatalog", function() { return createFilmsCatalog; });
const createFilmsCatalog = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>`;
};


/***/ }),

/***/ "./src/view/films-number.js":
/*!**********************************!*\
  !*** ./src/view/films-number.js ***!
  \**********************************/
/*! exports provided: createFilmsNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsNumber", function() { return createFilmsNumber; });
const createFilmsNumber = () => {
  return `<p>130 291 movies inside</p>`;
};


/***/ }),

/***/ "./src/view/most-commented-container.js":
/*!**********************************************!*\
  !*** ./src/view/most-commented-container.js ***!
  \**********************************************/
/*! exports provided: createMostCommentedContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMostCommentedContainer", function() { return createMostCommentedContainer; });
const createMostCommentedContainer = () => {
  return `<section class="films-list films-list--extra films-list--commented">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container"></div>
  </section>`;
};


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: createShowMoreButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShowMoreButton", function() { return createShowMoreButton; });
const createShowMoreButton = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: createSiteMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteMenu", function() { return createSiteMenu; });
const createSiteMenu = () => {
  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};


/***/ }),

/***/ "./src/view/site-sort.js":
/*!*******************************!*\
  !*** ./src/view/site-sort.js ***!
  \*******************************/
/*! exports provided: createSiteSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteSort", function() { return createSiteSort; });
const createSiteSort = () => {
  return `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;
};


/***/ }),

/***/ "./src/view/top-raited-container.js":
/*!******************************************!*\
  !*** ./src/view/top-raited-container.js ***!
  \******************************************/
/*! exports provided: createTopRaitedContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopRaitedContainer", function() { return createTopRaitedContainer; });
const createTopRaitedContainer = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2><div class="films-list__container"></div></section>`;
};


/***/ }),

/***/ "./src/view/user-icon.js":
/*!*******************************!*\
  !*** ./src/view/user-icon.js ***!
  \*******************************/
/*! exports provided: createUserIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserIcon", function() { return createUserIcon; });
const createUserIcon = () => {
  return `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map