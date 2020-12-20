import Observer from './observer';


export default class CommentsModel extends Observer {
  constructor() {
    super();
    this._comments = [];
  }

  setComments(comments) {
    this._comments = comments;
  }

  getComments() {
    return this._comments;
  }

  deleteComment(updateType, commentToDelete) {
    this._comments.filter((comment) => (comment.id !== commentToDelete.id));
    this.notify(updateType);
  }

  addComment(updateType, commentToAdd) {
    this._comments.push(commentToAdd);
    this.notify(updateType);
  }
}
