import ViewWithHandler from './view-with-handlers';

const createShowMoreButton = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMoreButton extends ViewWithHandler {
  getTemplate() {
    return createShowMoreButton();
  }
}
