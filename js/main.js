const getRandomPositiveInclusive = (min, max) => {
  min = Math.ceil(Math.min(Math.abs(max), Math.abs(min)));
  max = Math.floor(Math.max(Math.abs(max), Math.abs(min)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const сheckMaxLengthString = (line, maxLenth) => line.length <= maxLenth;
getRandomPositiveInclusive();
сheckMaxLengthString();

const getRandomName = () =>{
  const names = ['Антон','Максим','Геннадий','Юлия','Наталья','Григорий','Михаил','Роман','Анастасия','Дмитрий'];
  return names[getRandomPositiveInclusive(0, names.length - 1)];
};

const getRandomComment = () =>{
  const comment = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  return comment[getRandomPositiveInclusive(0, comment.length - 1)];
};

const getDescription = () => {
  const description = [  'Тут я отдыхаю', 'Здесь я работаю', 'Очень красиво', 'Ух как классно', 'Смотрюсь тут очень классно', 'Поставьте лайк и подпишитесь на меня','Хочу лайки-лайки',];
  return description[getRandomPositiveInclusive(0, description.length - 1)];
};

const getRandomNonRepeatingNumber = (maxNumber) => {
  const randomStart = 1;
  const array= [];

  for(let i = randomStart; i <= maxNumber ; i++){
    array.push(i);
  }
  const array2 = [];

  for(let countCycles = 0; countCycles < maxNumber; countCycles++){
    array2[countCycles] = (array.splice(Math.random()*array.length,1)[0]);
  }
  return (array2[getRandomPositiveInclusive(0,maxNumber - 1)]);

};
const makeComment = () =>({
  id: getRandomNonRepeatingNumber(1000),
  avatar: 'img/avatar-' + getRandomPositiveInclusive(1,6) + '.svg',
  message: getRandomComment(),
  name: getRandomName(),
});


const makePhoto = () => {
  return{
    id: getRandomNonRepeatingNumber(25),
    url: 'photos/' + getRandomNonRepeatingNumber(25) +  '.jpg',
    description: getDescription(),
    likes: getRandomPositiveInclusive(15,200),
    comment: Array.from({length: getRandomPositiveInclusive(1,5)}, makeComment),
  };
};

const similarPosts = Array.from({length: 25}, makePhoto);
console.log(similarPosts);
