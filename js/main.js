const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min){
    return 'Введены Неккоректные данные';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const сheckLength = (line,maxLenth) => line.length <= maxLenth;
