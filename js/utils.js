const getRandomPositiveInclusive = (min, max) => {
  min = Math.ceil(Math.min(Math.abs(max), Math.abs(min)));
  max = Math.floor(Math.max(Math.abs(max), Math.abs(min)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEscKey = (evt) => evt.keyCode === 27;

export { getRandomPositiveInclusive,isEscKey };
