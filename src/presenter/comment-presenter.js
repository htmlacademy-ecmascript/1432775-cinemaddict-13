import {render, replace, remove, isKeyPressed} from '../util.js';
import FilmCardView from '../view/film-card';
import FilmPopupView from '../view/film-popup';
import {CATEGORIES, UpdateType, UserAction} from "../const.js";
import CommentView from '../view/comment-view'

export default class Comment {
  constructor(comment) {
    this._comment = comment;
  }

  init(container) {
    this._commentView = new CommentView(this._comment);
    render(container, this._commentView);
  }
}
