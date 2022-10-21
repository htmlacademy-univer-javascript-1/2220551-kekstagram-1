import { getRandomPositiveInclusive } from './util.js';

const MAX_COUNT_PHOTOS = 25;
const CountLike = {
  MIN: 15,
  MAX: 200
};
const AvatarSvg = {
  MIN: 1,
  MAX: 6
};
const NumberComments = {
  MIN: 1,
  MAX: 5
};

const getRandomName = () => {
  const NAMES = ['Антон', 'Максим', 'Геннадий', 'Юлия', 'Наталья', 'Григорий', 'Михаил', 'Роман', 'Анастасия', 'Дмитрий'];
  return NAMES[getRandomPositiveInclusive(0, NAMES.length - 1)];
};

const getRandomComment = () => {
  const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  return COMMENTS[getRandomPositiveInclusive(0, COMMENTS.length - 1)];
};

const getDescription = () => {
  const DESCTIPTION = ['Здеась я кайфую', 'Здесь я работаю', 'Так нравится это фото', 'Прекрасно', 'Кайфули', 'Поставьте лайк пж'];
  return DESCTIPTION[getRandomPositiveInclusive(0, DESCTIPTION.length - 1)];
};

const makeComment = (id) => ({
  id: id,
  avatar: `img/avatar-/${getRandomPositiveInclusive(AvatarSvg.MIN, AvatarSvg.MAX)}.svg`,
  message: getRandomComment(),
  name: getRandomName(),
});


const makePhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getDescription(),
  likes: getRandomPositiveInclusive(CountLike.MIN, CountLike.MAX),
  comment: Array.from({ length: getRandomPositiveInclusive(NumberComments.MIN, NumberComments.MAX) }).map((value, index) => makeComment(index + 1))

});

const getSimilarPosts = () => Array.from({ length: MAX_COUNT_PHOTOS }).map((value, index) => makePhoto(index + 1));

export { getSimilarPosts };
