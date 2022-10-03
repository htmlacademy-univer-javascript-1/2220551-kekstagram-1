
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

const getRandomPositiveInclusive = (min, max) => {
  min = Math.ceil(Math.min(Math.abs(max), Math.abs(min)));
  max = Math.floor(Math.max(Math.abs(max), Math.abs(min)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const сheckMaxLengthString = (line, maxLenth) => line <= maxLenth;

getRandomPositiveInclusive();
сheckMaxLengthString();

const getRandomName = () => {
  const names = ['Антон', 'Максим', 'Геннадий', 'Юлия', 'Наталья', 'Григорий', 'Михаил', 'Роман', 'Анастасия', 'Дмитрий'];
  return names[getRandomPositiveInclusive(0, names.length - 1)];
};

const getRandomComment = () => {
  const comment = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  return comment[getRandomPositiveInclusive(0, comment.length - 1)];
};

const getDescription = () => {
  const description = ['Здеась я кайфую', 'Здесь я работаю', 'Так нравится это фото', 'Прекрасно', 'Кайфули', 'Поставьте лайк пж'];
  return description[getRandomPositiveInclusive(0, description.length - 1)];
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

const similarPosts = Array.from({ length: MAX_COUNT_PHOTOS }).map((value, index) => makePhoto(index + 1)
);
console.log(similarPosts);
