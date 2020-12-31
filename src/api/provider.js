import {isOnline} from '../util';

const createStoreStructure = (items) => {
  return items.reduce((acc, current) => {
    return Object.assign({}, acc, {
      [current.id]: current,
    });
  }, {});
};

export default class Provider {
  constructor(api, store) {
    this._api = api;
    this._store = store;
  }

  getFilms() {
    if (isOnline()) {
      return this._api.getFilms()
      .then((films) => {
        this._store.setItems(createStoreStructure(films.map(this._api.adaptFilmToServer)));
        return films;
      });
    }
    return Promise.resolve(
        Object.values(this._store.getItems()).map(this._api.adaptFilmToClient)
    );
  }

  updateFilm(film) {
    if (isOnline()) {
      return this._api.updateFilm(film)
        .then((updatedFilm) => {
          this._store.setItem(updatedFilm.id, this._api.adaptFilmToServer(updatedFilm));
          return updatedFilm;
        });
    }

    this._store.setItem(film.id, this._api.adaptFilmToServer(Object.assign({}, film)));

    return Promise.resolve(film);
  }

  sync() {
    if (isOnline()) {
      const updatedFilms = Object.values(this._store.getItems()).filter((film) => !film.isSynced);

      console.log(updatedFilms);
    }

    return Promise.reject(new Error(`No connection to sync`));
  }
}
