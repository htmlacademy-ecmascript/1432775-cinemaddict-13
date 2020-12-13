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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: EMOTIONS, SortType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMOTIONS", function() { return EMOTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RAITING: `raiting`,
  UP: `up`,
  DOWN: `down`
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_films_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/films-number */ "./src/view/films-number.js");
/* harmony import */ var _mock_films__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/films */ "./src/mock/films.js");
/* harmony import */ var _mock_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock/user */ "./src/mock/user.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./src/util.js");
/* harmony import */ var _presenter_catalog_presenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presenter/catalog-presenter */ "./src/presenter/catalog-presenter.js");






const MOCK_FILMS = 15;
const AVAILABLE_FILMS = `123 456`;

const films = new Array(MOCK_FILMS).fill().map(() => {
  return new _mock_films__WEBPACK_IMPORTED_MODULE_1__["default"]().getNewFilm();
});
const user = new _mock_user__WEBPACK_IMPORTED_MODULE_2__["default"]().userStats;

const presenter = new _presenter_catalog_presenter__WEBPACK_IMPORTED_MODULE_4__["default"]();
presenter.init(films, user);

const siteFooter = document.querySelector(`.footer`);
const footerStats = siteFooter.querySelector(`.footer__statistics`);
Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["render"])(footerStats, new _view_films_number__WEBPACK_IMPORTED_MODULE_0__["default"](AVAILABLE_FILMS));


/***/ }),

/***/ "./src/mock/films.js":
/*!***************************!*\
  !*** ./src/mock/films.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MockFilm; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const MAX_DESCRIPTION_SENTENCES = 5;
const MAX_COMMENTS = 5;

const FILMS = [
  {poster: `./images/posters/made-for-each-other.png`,
    title: `Made for Each Other`},
  {poster: `./images/posters/popeye-meets-sinbad.png`,
    title: `Popeye the Sailor Meets Sindbad the Sailor`},
  {poster: `./images/posters/sagebrush-trail.jpg`,
    title: `Sagebrush Trail`},
  {poster: `./images/posters/santa-claus-conquers-the-martians.jpg`,
    title: `Santa Claus Conquers the Martians`},
  {poster: `./images/posters/the-dance-of-life.jpg`,
    title: `The Dance of Life`},
  {poster: `./images/posters/the-great-flamarion.jpg`,
    title: `The Great Flamarion`},
  {poster: `./images/posters/the-man-with-the-golden-arm.jpg`,
    title: `The Man with the Golden Arm`}
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const DIRECTORS = [
  `Anthony Mann`,
  `Nick Go`,
  `Tim Top`,
  `Anna Svetlova`,
  `Kate White`
];

const WRITERS = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Wigton Heinz`,
  `Weil Wigton`,
];

const ACTORS = [
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Stroheim Dan`,
  `Beth Erich`,
  `Anna Mann`,
  `Anthony Richard`,
];

const GENRES = [`comedy`, `drama`, `romantic`, `classic`, `cartoon`, `thriller`];

const COUNTRIES = [`USA`, `UK`, `USSR`, `Germany`, `France`];

const AGES = [`12`, `16`, `18`];

const generateDescription = () => {
  let description = [];
  for (let i = 0; i < MAX_DESCRIPTION_SENTENCES; i++) {
    description.push(DESCRIPTIONS[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, DESCRIPTIONS.length - 1)]);
  }
  return description.join(` `);
};

const generateDuration = () => {
  const duration = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(30, 240);
  const hours = duration / 60;
  const minutes = duration % 60;
  return hours < 1 ? `${minutes}m` : `${Math.floor(hours)}h ${minutes}m`;
};

const generateComments = () => {
  const NAMES = [`Ann`, `Greg`, `Igor`, `Kate`];

  const createNewComment = () => {
    return {
      text: DESCRIPTIONS[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, DESCRIPTIONS.length - 1)],
      emotion: _const_js__WEBPACK_IMPORTED_MODULE_1__["EMOTIONS"][Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const_js__WEBPACK_IMPORTED_MODULE_1__["EMOTIONS"].length - 1)],
      author: NAMES[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, NAMES.length - 1)],
      date: new Date(`${Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(2005, 2020)} ${Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 11)} ${Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 31)} ${Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 23)}:${Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 59)}`)
    };
  };

  return new Array(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, MAX_COMMENTS)).fill().map(createNewComment);
};

const generateRandomSet = (array) => {
  let newArr = [];
  for (let i = 0; i < Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, array.length - 1); i++) {
    newArr.push(array[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, array.length - 1)]);
  }
  return Array.from(new Set(newArr));
};

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

class MockFilm {
  constructor() {
    this._id = generateId();
    this._filmIndex = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, FILMS.length - 1);
    this._poster = FILMS[this._filmIndex].poster;
    this._title = FILMS[this._filmIndex].title;
    this._originalTitle = FILMS[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, FILMS.length - 1)].title;
    this._raiting = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 10);
    this._date = new Date(`${Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1935, 2020)},${Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 12)},${Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 31)}`);
    this._duration = generateDuration();
    this._genre = generateRandomSet(GENRES);
    this._description = generateDescription();
    this._comments = generateComments();
    this._director = DIRECTORS[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, DIRECTORS.length - 1)];
    this._writers = generateRandomSet(WRITERS);
    this._actors = generateRandomSet(ACTORS);
    this._country = COUNTRIES[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, COUNTRIES.length - 1)];
    this._age = AGES[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, AGES.length - 1)];
    this._isInWatchlist = Boolean(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1));
    this._isInHistory = Boolean(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1));
    this._isFavourite = Boolean(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1));
  }

  getNewFilm() {
    return {
      id: this._id,
      poster: this._poster,
      title: this._title,
      originalTitle: this._originalTitle,
      raiting: this._raiting,
      date: this._date,
      duration: this._duration,
      genre: this._genre,
      description: this._description,
      comments: this._comments,
      director: this._director,
      writers: this._writers,
      actors: this._actors,
      country: this._country,
      age: this._age,
      isInWatchlist: this._isInWatchlist,
      isInHistory: this._isInHistory,
      isFavourite: this._isFavourite
    };
  }
}


/***/ }),

/***/ "./src/mock/user.js":
/*!**************************!*\
  !*** ./src/mock/user.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
class User {
  constructor() {
    this._raiting = `Movie Buff`;
    this._avatar = `./images/bitmap@2x.png`;
  }

  get userStats() {
    return {
      raiting: this._raiting,
      avatar: this._avatar
    };
  }
}


/***/ }),

/***/ "./src/presenter/catalog-presenter.js":
/*!********************************************!*\
  !*** ./src/presenter/catalog-presenter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Catalog; });
/* harmony import */ var _view_user_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/user-icon */ "./src/view/user-icon.js");
/* harmony import */ var _view_site_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-menu */ "./src/view/site-menu.js");
/* harmony import */ var _view_site_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/site-sort */ "./src/view/site-sort.js");
/* harmony import */ var _view_films_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/films-catalog */ "./src/view/films-catalog.js");
/* harmony import */ var _view_show_more_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/show-more-button */ "./src/view/show-more-button.js");
/* harmony import */ var _view_top_raited_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/top-raited-container */ "./src/view/top-raited-container.js");
/* harmony import */ var _view_most_commented_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/most-commented-container */ "./src/view/most-commented-container.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util.js */ "./src/util.js");
/* harmony import */ var _film_card_presenter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./film-card-presenter */ "./src/presenter/film-card-presenter.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../const.js */ "./src/const.js");











class Catalog {
  constructor() {
    this._siteSortView = new _view_site_sort__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._showMoreButton = new _view_show_more_button__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._topRaitedContainerView = new _view_top_raited_container__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._mostCommentedContainerView = new _view_most_commented_container__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this._userIconView = null;
    this._siteMenuView = null;
    this._siteCatalog = null;
    this._filmCardPresenter = {
      catalog: {},
      raited: {},
      commented: {}
    };
    this._sortType = {
      current: _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DEFAULT,
      date: _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].UP,
      raiting: _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].UP
    };

    this._FILMS_CARDS_NUMBER = 5;
    this._FILMS_STEP_LOAD = 5;
    this._FILMS_TOP_RAITED_CARDS_NUMBER = 2;
    this._FILMS_MOST_COMMENTED_CARDS_NUMBER = 2;
    this._renderedFilms = this._FILMS_CARDS_NUMBER;

    this._onShowMoreButtonClick = this._onShowMoreButtonClick.bind(this);
    this._onFilmChange = this._onFilmChange.bind(this);
    this._onUserPropertyChange = this._onUserPropertyChange.bind(this);
    this._closeAllPopups = this._closeAllPopups.bind(this);
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
  }

  init(films, user) {
    this._presenterBlocks = Object.keys(this._filmCardPresenter);
    this._films = films;
    this._user = user;
    this._sourcedFilms = films.slice();
    this._userIconView = new _view_user_icon__WEBPACK_IMPORTED_MODULE_0__["default"](this._user.avatar, this._user.raiting);
    this._siteMenuView = new _view_site_menu__WEBPACK_IMPORTED_MODULE_1__["default"](this._films);

    const siteHeader = document.querySelector(`.header`);
    Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["render"])(siteHeader, this._userIconView);

    this._siteMain = document.querySelector(`.main`);
    Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._siteMain, this._siteMenuView, `afterbegin`);

    this._renderCatalog();
  }

  _onFilmChange(filmToUpdate) {
    this._films = Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["updateElement"])(this._films, filmToUpdate);
    this._updatePresenters(filmToUpdate);
  }

  _onUserPropertyChange(property, newPropertyArr, film) {
    this._user[property] = newPropertyArr;
    this._updatePresenters(film);
  }

  _updatePresenters(film) {
    for (let i = 0; i < this._presenterBlocks.length; i++) {
      if (this._filmCardPresenter[this._presenterBlocks[i]][film.id]) {
        this._filmCardPresenter[this._presenterBlocks[i]][film.id].init(film);
      }
    }
  }

  _clearCatalog() {
    for (let i = 0; i < this._presenterBlocks.length; i++) {
      Object.values(this._filmCardPresenter[this._presenterBlocks[i]]).forEach((presenter) => presenter.destroy());
      this._filmCardPresenter[this._presenterBlocks[i]] = {};
    }
    this._renderedFilms = this._FILMS_CARDS_NUMBER;
    Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._showMoreButton);
  }

  _closeAllPopups() {
    for (let i = 0; i < this._presenterBlocks.length; i++) {
      Object.values(this._filmCardPresenter[this._presenterBlocks[i]]).forEach((presenter) => presenter.closePopup());
    }
  }

  _renderNoFilms() {
    Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._siteMain, this._siteCatalog);
  }

  _changeSort(type) {
    switch (type) {
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].RAITING:
        if (this._sortType.raiting === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DOWN) {
          this._films = this._filmsSortedByRaiting.reverse();
          this._sortType.raiting = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].UP;
          break;
        }
        this._films = this._filmsSortedByRaiting;
        this._sortType.raiting = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DOWN;
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DEFAULT:
        this._films = this._sourcedFilms;
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DATE:

        if (this._sortType.date === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DOWN) {
          this._films = this._filmsSortedByDate.reverse();
          this._sortType.date = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].UP;
          break;
        }
        this._films = this._filmsSortedByDate;
        this._sortType.date = _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DOWN;
        break;
    }
    this._sortType.current = type;
  }

  _onSortTypeChange(type) {
    if (this._sortType.current === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DEFAULT && type === _const_js__WEBPACK_IMPORTED_MODULE_9__["SortType"].DEFAULT) {
      return;
    }
    this._changeSort(type);
    this._clearCatalog();
    this._renderCatalog();
  }

  _renderSort() {
    Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._siteMain, this._siteSortView);
    this._siteSortView.setSortTypeChangeHandler(this._onSortTypeChange);
  }

  _renderCard(container, film, block) {
    const filmPresenter = new _film_card_presenter__WEBPACK_IMPORTED_MODULE_8__["default"](this._onFilmChange, this._onUserPropertyChange, this._closeAllPopups);
    filmPresenter.init(film, container);
    switch (block) {
      case `raited`:
        this._filmCardPresenter.raited[film.id] = filmPresenter;
        break;
      case `commented`:
        this._filmCardPresenter.commented[film.id] = filmPresenter;
        break;
      default:
        this._filmCardPresenter.catalog[film.id] = filmPresenter;
    }
  }

  _renderFilmCards() {
    for (let i = 0; i < Math.min(this._FILMS_CARDS_NUMBER, this._films.length); i++) {
      this._renderCard(this._filmsListContainer, this._films[i]);
    }
  }

  _onShowMoreButtonClick() {
    this._films.slice(this._renderedFilms, this._renderedFilms + this._FILMS_STEP_LOAD).forEach((film) => this._renderCard(this._filmsListContainer, film));

    this._renderedFilms += this._FILMS_STEP_LOAD;

    if (this._renderedFilms >= this._films.length) {
      Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["remove"])(this._showMoreButton);
    }
  }

  _renderShowMoreButton() {
    if (this._films.length > Math.max(this._FILMS_STEP_LOAD, this._FILMS_CARDS_NUMBER)) {

      Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._siteCatalog.getElement().querySelector(`.films-list`), this._showMoreButton);

      this._showMoreButton.setClickHandler(this._onShowMoreButtonClick);
    }
  }

  _renderTopRaitedContainer() {
    Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._siteCatalog, this._topRaitedContainerView);
  }

  _renderMostCommentedContainer() {
    Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._siteCatalog, this._mostCommentedContainerView);
  }

  _generateFilmsSortedByDate() {
    this._filmsSortedByDate = this._films.slice().sort((previous, current) => {
      return current.date - previous.date;
    });
  }

  _renderTopRaitedFilms() {
    const topRaitedFilmsContainer = this._siteCatalog.getElement().querySelector(`.films-list--extra .films-list__container`);
    this._filmsSortedByRaiting = this._films.slice().sort((previous, current) => {
      return current.raiting - previous.raiting;
    });
    for (let i = 0; i < Math.min(this._FILMS_TOP_RAITED_CARDS_NUMBER, this._filmsSortedByRaiting.length); i++) {
      this._renderCard(topRaitedFilmsContainer, this._filmsSortedByRaiting[i], `raited`);
    }
  }

  _renderMostCommentedFilms() {
    const mostCommentedFilmsContainer = this._siteCatalog.getElement().querySelector(`.films-list--commented .films-list__container`);
    const filmsSortedByComments = this._films.slice().sort((previous, current) => {
      return current.comments.length - previous.comments.length;
    });
    for (let i = 0; i < Math.min(this._FILMS_MOST_COMMENTED_CARDS_NUMBER, filmsSortedByComments.length); i++) {
      this._renderCard(mostCommentedFilmsContainer, filmsSortedByComments[i], `commented`);
    }
  }

  _renderCatalog() {
    if (!(this._siteCatalog)) {
      this._siteCatalog = new _view_films_catalog__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }

    if (this._films.length < 1) {
      this._renderNoFilms();
      return;
    }

    this._renderSort();
    Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["render"])(this._siteMain, this._siteCatalog);

    this._filmsListContainer = this._siteCatalog.getElement().querySelector(`.films-list__container`);
    this._renderFilmCards();

    this._renderShowMoreButton();

    this._renderTopRaitedContainer();
    this._renderMostCommentedContainer();

    this._renderTopRaitedFilms();
    this._renderMostCommentedFilms();
    this._generateFilmsSortedByDate();
  }
}


/***/ }),

/***/ "./src/presenter/film-card-presenter.js":
/*!**********************************************!*\
  !*** ./src/presenter/film-card-presenter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardPresenter; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");
/* harmony import */ var _view_film_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/film-card */ "./src/view/film-card.js");
/* harmony import */ var _view_film_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/film-popup */ "./src/view/film-popup.js");




class CardPresenter {
  constructor(filmChangeCb, userChangeCb, closePopupsCb) {

    this._closePopups = closePopupsCb;

    this._card = null;
    this._filmChange = filmChangeCb;
    this._userChange = userChangeCb;
    this._closePopups = closePopupsCb;
    this._pageBody = document.querySelector(`body`);
    this._popup = null;

    this.closePopup = this.closePopup.bind(this);
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

  init(film, container = this._container) {
    this._film = film;
    this._container = container;

    const prevFilmCardView = this._card;

    this._card = new _view_film_card__WEBPACK_IMPORTED_MODULE_1__["default"](this._film);

    this._card.setPosterClickHandler(this._onCardPosterClick);
    this._card.setTitleClickHandler(this._onCardTitleClick);
    this._card.setCommentsClickHandler(this._onCardCommentsClick);
    this._card.setToWatchListButtonClickHandler(this._onCardWatchlistClick);
    this._card.setWatchedButtonClickHandler(this._onCardToHistoryClick);
    this._card.setToFavouritesButtonClickHandler(this._onCardFavouritesClick);

    if (prevFilmCardView === null) {
      Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, this._card);
      return;
    }

    if (this._container.contains(prevFilmCardView.getElement())) {
      Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["replace"])(this._card, prevFilmCardView);
    }

    Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(prevFilmCardView);
  }

  destroy() {
    Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(this._card);
  }

  closePopup() {
    if (this._popup) {
      Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(this._popup);
      document.removeEventListener(`keyup`, this._onPopupEscPress);
      this._pageBody.classList.remove(`hide-overflow`);
    }
  }

  _openPopup(evt) {
    evt.preventDefault();
    this._closePopups();
    this._popup = new _view_film_popup__WEBPACK_IMPORTED_MODULE_2__["default"](this._film);
    Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._pageBody, this._popup);
    this._popup.setCrossClickHandler(this._onPopupCrossClick);
    document.addEventListener(`keyup`, this._onPopupEscPress);
    this._pageBody.classList.add(`hide-overflow`);
  }

  _onCardWatchlistClick() {
    this._filmChange(Object.assign(
        {},
        this._film,
        {
          isInWatchlist: !this._film.isInWatchlist
        }
    ));
  }

  _onCardFavouritesClick() {
    this._filmChange(Object.assign(
        {},
        this._film,
        {
          isFavourite: !this._film.isFavourite
        }
    ));
  }

  _onCardToHistoryClick() {
    this._filmChange(Object.assign(
        {},
        this._film,
        {
          isInHistory: !this._film.isInHistory
        }
    ));
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
    Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["isKeyPressed"])(evt, this.closePopup, `Escape`);
  }

  _onPopupCrossClick() {
    this.closePopup();
  }
}


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: getRandomInteger, createElement, render, replace, remove, isKeyPressed, updateElement, updateUserPropertyArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyPressed", function() { return isKeyPressed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateElement", function() { return updateElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserPropertyArray", function() { return updateUserPropertyArray; });
/* harmony import */ var _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/abstract-view */ "./src/view/abstract-view.js");


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const render = (container, element, place = `beforeend`) => {
  if (container instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }
  if (element instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    element = element.getElement();
  }
  switch (place) {
    case `beforeend`:
      container.append(element);
      break;
    case `afterbegin`:
      container.prepend(element);
      break;
  }
};

const replace = (newElement, oldElement) => {
  if (newElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newElement = newElement.getElement();
  }
  if (oldElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldElement = oldElement.getElement();
  }

  const parentElement = oldElement.parentElement;

  if (parentElement === null || newElement === null || oldElement === null) {
    throw new Error(`One of elements doesn't exist in case of replacement`);
  }

  parentElement.replaceChild(newElement, oldElement);
};

const remove = (element) => {
  if (!(element instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove view components only`);
  }
  element.getElement().remove();
  element.removeElement();
};

const isKeyPressed = (evt, cb, keyName) => {
  if (evt.key === keyName) {
    cb();
  }
};

const updateElement = (elementsArr, elementToUpdate) => {
  const index = elementsArr.findIndex((element) => element.id === elementToUpdate.id);
  if (index === -1) {
    return elementsArr;
  }

  return [
    ...elementsArr.slice(0, index), elementToUpdate, ...elementsArr.slice(index + 1)
  ];
};

const updateUserPropertyArray = (idArr, filmId) => {
  const index = idArr.findIndex((id) => id === filmId);

  if (index === -1) {
    idArr.push(filmId);
    return idArr;
  }

  idArr.splice(index, 1);
  return idArr;
};


/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractView; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't create Abstract class`);
    }
    this._callback = {};
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Can't run abstract method`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createFilmCard = (film) => {

  const getActiveClass = (property) => {
    return (film[property] === true) ? ` film-card__controls-item--active` : ``;
  };

  const {title, raiting, date, duration, genre, poster, description, comments} = film;
  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${raiting}</p>
  <p class="film-card__info">
    <span class="film-card__year">${date.getFullYear()}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genre.join(` `)}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">${comments.length} ${comments.length === 1 ? `comment` : `comments`}</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist${getActiveClass(`isInWatchlist`)}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched${getActiveClass(`isInHistory`)}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite${getActiveClass(`isFavourite`)}" type="button">Mark as favorite</button>
  </div>
</article>`;
};

class FilmCard extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._posterClickHandler = this._posterClickHandler.bind(this);
    this._titleClickHandler = this._titleClickHandler.bind(this);
    this._commentsClickHandler = this._commentsClickHandler.bind(this);
    this._toWatchListButtonClickHandler = this._toWatchListButtonClickHandler.bind(this);
    this._toFavouritesButtonClickHandler = this._toFavouritesButtonClickHandler.bind(this);
    this._watchedButtonClickHandler = this._watchedButtonClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCard(this._film);
  }

  _posterClickHandler(evt) {
    evt.preventDefault();
    this._callback.posterClick(evt);
  }

  setPosterClickHandler(cb) {
    this._callback.posterClick = cb;
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._posterClickHandler);
  }

  _titleClickHandler(evt) {
    evt.preventDefault();
    this._callback.titleClick(evt);
  }

  setTitleClickHandler(cb) {
    this._callback.titleClick = cb;
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._titleClickHandler);
  }

  _commentsClickHandler(evt) {
    evt.preventDefault();
    this._callback.commentsClick(evt);
  }

  setCommentsClickHandler(cb) {
    this._callback.commentsClick = cb;
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._commentsClickHandler);
  }

  _toWatchListButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchListClick();
  }

  setToWatchListButtonClickHandler(cb) {
    this._callback.watchListClick = cb;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._toWatchListButtonClickHandler);
  }

  _toFavouritesButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.favouritesClick();
  }

  setToFavouritesButtonClickHandler(cb) {
    this._callback.favouritesClick = cb;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._toFavouritesButtonClickHandler);
  }

  _watchedButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  setWatchedButtonClickHandler(cb) {
    this._callback.watchedClick = cb;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedButtonClickHandler);
  }
}


/***/ }),

/***/ "./src/view/film-popup.js":
/*!********************************!*\
  !*** ./src/view/film-popup.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmPopup; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const createFilmPopup = (film) => {
  const {title, originalTitle, raiting, date, duration, genre, poster, description, comments, director, writers, actors, country, age} = film;

  const genres = genre.map((value, index) => {
    return `<span class="film-details__genre">${genre[index]}</span>`;
  }).join(``);

  const filmComments = comments.map((value, index) => {
    const {text, author, date: commentDate, emotion} = comments[index];

    return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
    </span>
    <div>
  <p class="film-details__comment-text">${text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${dayjs__WEBPACK_IMPORTED_MODULE_1___default()(commentDate).format(`YYYY/MM/DD HH:mm`)}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
  }).join(``);

  const emojiRadio = _const_js__WEBPACK_IMPORTED_MODULE_2__["EMOTIONS"].map((value, index) => {
    const emotion = _const_js__WEBPACK_IMPORTED_MODULE_2__["EMOTIONS"][index];
    return `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emotion}" value="${emotion}">
    <label class="film-details__emoji-label" for="emoji-${emotion}">
      <img src="./images/emoji/${emotion}.png" width="30" height="30" alt="emoji">
    </label>`;
  }).join(``);

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${poster}" alt="">

          <p class="film-details__age">${age}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${originalTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${raiting}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).format(`DD MMMM YYYY`)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                ${genres}
            </tr>
          </table>

          <p class="film-details__film-description">
          ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">${filmComments}</ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
          ${emojiRadio}
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

class FilmPopup extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._crossClickHandler = this._crossClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmPopup(this._film);
  }

  _crossClickHandler(evt) {
    evt.preventDefault();
    this._callback.crossClick(evt);
  }

  setCrossClickHandler(cb) {
    this._callback.crossClick = cb;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._crossClickHandler);
  }
}


/***/ }),

/***/ "./src/view/films-catalog.js":
/*!***********************************!*\
  !*** ./src/view/films-catalog.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteCatalog; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createFilmsCatalog = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>
</section>`;
};

class SiteCatalog extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsCatalog();
  }
}


/***/ }),

/***/ "./src/view/films-number.js":
/*!**********************************!*\
  !*** ./src/view/films-number.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsNumber; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createFilmsNumber = (filmsNumber) => {
  return `<p>${filmsNumber} movies inside</p>`;
};

class FilmsNumber extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filmsNumber) {
    super();
    this._filmsNumber = filmsNumber;
  }

  getTemplate() {
    return createFilmsNumber(this._filmsNumber);
  }
}


/***/ }),

/***/ "./src/view/most-commented-container.js":
/*!**********************************************!*\
  !*** ./src/view/most-commented-container.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MostCommentedContainer; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createMostCommentedContainer = () => {
  return `<section class="films-list films-list--extra films-list--commented">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container"></div>
  </section>`;
};

class MostCommentedContainer extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMostCommentedContainer();
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createShowMoreButton = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class ShowMoreButton extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }
  getTemplate() {
    return createShowMoreButton();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click(evt);
  }

  setClickHandler(cb) {
    this._callback.click = cb;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createSiteMenu = (films) => {
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
  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${inWatchlist}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${inHistory}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favourites}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};

class SiteMenu extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(films) {
    super();
    this._films = films;
  }

  getTemplate() {
    return createSiteMenu(this._films);
  }
}


/***/ }),

/***/ "./src/view/site-sort.js":
/*!*******************************!*\
  !*** ./src/view/site-sort.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteSort; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const createSiteSort = () => {
  return `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DEFAULT}">Sort by default</a></li>
  <li><a href="#" class="sort__button" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DATE}">Sort by date</a></li>
  <li><a href="#" class="sort__button" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].RAITING}">Sort by rating</a></li>
</ul>`;
};

class SiteSort extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }
  getTemplate() {
    return createSiteSort();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(cb) {
    this._callback.sortTypeChange = cb;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}


/***/ }),

/***/ "./src/view/top-raited-container.js":
/*!******************************************!*\
  !*** ./src/view/top-raited-container.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopRaitedContainer; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createTopRaitedContainer = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2><div class="films-list__container"></div></section>`;
};

class TopRaitedContainer extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTopRaitedContainer();
  }
}


/***/ }),

/***/ "./src/view/user-icon.js":
/*!*******************************!*\
  !*** ./src/view/user-icon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserIcon; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createUserIcon = (avatar, raiting) => {
  return `<section class="header__profile profile">
  <p class="profile__rating">${raiting}</p>
  <img class="profile__avatar" src="${avatar}" alt="Avatar" width="35" height="35">
</section>`;
};

class UserIcon extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(avatar, raiting) {
    super();
    this._userRaiting = raiting;
    this._userAvatar = avatar;
  }

  getTemplate() {
    return createUserIcon(this._userAvatar, this._userRaiting);
  }
}


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