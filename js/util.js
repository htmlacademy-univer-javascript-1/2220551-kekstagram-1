const getRandomPositiveInclusive = (min, max) => {
  min = Math.ceil(Math.min(Math.abs(max), Math.abs(min)));
  max = Math.floor(Math.max(Math.abs(max), Math.abs(min)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const сheckMaxLengthString = (line, maxLenth) => line.length <= maxLenth;
сheckMaxLengthString('Я строка', 100);

export { getRandomPositiveInclusive, сheckMaxLengthString };
