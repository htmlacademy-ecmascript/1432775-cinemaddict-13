import Observer from './observer';

export default class FilmModel extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(films) {
    this._films = films.slice();
  }

  getFilms() {
    return this._films;
  }

  updateFilm(updateType, elementToUpdate) {
    const index = this._films.findIndex((element) => element.id === elementToUpdate.id);
    if (index === -1) {
      throw new Error(`Film doesn't exist`);
    }

    this._films.splice(index, 1, elementToUpdate);

    this.notify(updateType, elementToUpdate);
  }
}
