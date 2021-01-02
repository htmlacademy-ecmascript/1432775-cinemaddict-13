import {render, remove, replace} from '../util.js';
import UserIconView from '../view/user-icon';
import {ModelMethod, UserRaiting} from '../const';

export default class UserPresenter {
  constructor(userModel) {
    this._userModel = userModel;

    this._onUserRaitingChange = this._onUserRaitingChange.bind(this);

    this._userModel.addObserver(ModelMethod.UPDATE_USER_RAITING, this._onUserRaitingChange);
  }

  init(container = this._container) {
    this._container = container;
    const prevUserView = this._userView;

    this._userView = new UserIconView(this._userModel.getRaiting());

    if (!prevUserView) {
      render(this._container, this._userView);
      return;
    }

    replace(this._userView, prevUserView);
    remove(prevUserView);
  }

  _getWatchedFilmsNumber(films) {
    let watched = 0;
    films.forEach((film) => {
      if (film.isInHistory) {
        watched++;
      }
    });
    return watched;
  }

  _getUserRaiting(watchedFilms) {
    if (watchedFilms > 20) {
      return UserRaiting.MOVIE_BUFF;
    } else if (watchedFilms > 10 && watchedFilms <= 20) {
      return UserRaiting.FAN;
    } else {
      return UserRaiting.NOVICE;
    }
  }

  _onUserRaitingChange() {
    this.init();
  }
}
