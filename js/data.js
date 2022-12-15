import { getRandomPositiveInclusive } from './utils.js';
import  { NAMES, MESSAGES, DESCRIPTIONS, CountLike, AvatarSvg, CountComment, MAX_COUNT_PHOTOS } from './consts.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInclusive(AvatarSvg.MIN, AvatarSvg.MAX)}.svg`,
  message: MESSAGES[getRandomPositiveInclusive(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInclusive(0, NAMES.length - 1)],
});

const createComments = () => Array.from({length: getRandomPositiveInclusive(CountComment.MIN, CountComment.MAX)}, (_, index) => createComment(index + 1));

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomPositiveInclusive(0, DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInclusive(CountLike.MIN, CountLike.MAX),
  comments: createComments()
});

const createPhotos = () => Array.from({length: MAX_COUNT_PHOTOS}, (_, index) => createPhoto(index + 1));

export { createPhotos };
