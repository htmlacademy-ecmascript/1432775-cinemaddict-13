const MAX_DESCRIPTION_SENTENCES = 5;

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const films = [
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

const descriptions = [
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

const generateDescription = () => {
  let description = [];
  for (let i = 0; i < MAX_DESCRIPTION_SENTENCES; i++) {
    description.push(descriptions[getRandomInteger(0, descriptions.length - 1)]);
  }
  return description.join(` `);
};

const generateDuration = () => {
  const duration = getRandomInteger(30, 240);
  const hours = duration / 60;
  const minutes = duration % 60;
  if (hours < 1) {
    return `${minutes}m`;
  } else {
    return `${Math.floor(hours)}h ${minutes}m`;
  }
};

export const createMockFilm = () => {
  const filmIndex = getRandomInteger(0, films.length - 1);
  return {
    poster: films[filmIndex].poster,
    title: films[filmIndex].title,
    raiting: getRandomInteger(1, 10),
    year: getRandomInteger(1935, 2000),
    duration: generateDuration(),
    genre: 0,
    description: generateDescription(),
    comments: 0
  };
};
