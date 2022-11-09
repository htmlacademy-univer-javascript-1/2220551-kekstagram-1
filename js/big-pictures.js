import { getSimilarPosts } from './data.js';

const pictures = document.querySelectorAll('.js-picture');
const bigPhoto = document.querySelector('.big-picture');
const listComments = document.querySelector('.social__comment');

const getComment = (message,name,avatar) =>
  `<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="${name}" width="35"
    height="35">
  <p class="social__text">${message}</p>
</li>`;

const getComments = () => {
  getSimilarPosts().forEach((photo) => {
    photo.comment.forEach((comment) => {
      listComments.insertAdjacentHTML('afterend', getComment(comment.message,comment.name, comment.avatar));
    });
  });
};

const getPosts = getSimilarPosts();

const onPictureClick = (evt) => {
  evt.preventDefault();
  const target = evt.target;
  const parent = target.closest('.js-picture');
  bigPhoto.querySelector('.big-picture__src').src =  parent.querySelector('.picture__img').src ;
  bigPhoto.querySelector('.likes-count').textContent = parent.querySelector('.picture__likes').textContent;
  bigPhoto.querySelector('.comments-count').textContent = parent.querySelector('.picture__comments').textContent;
  const firstCommentsCount = +parent.querySelector('.picture__comments').textContent;
  if (firstCommentsCount <= 5){
    bigPhoto.querySelector('.js-comments').textContent = firstCommentsCount;
  }
  getComments();

  let index = 0;
  bigPhoto.querySelector('.social__caption').textContent = getPosts[index].description;
  index = index + 1;

  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');

  bigPhoto.classList.remove('hidden');

};

const getBigPicture = () =>{
  pictures.forEach((photo) => {
    photo.addEventListener('click', onPictureClick);
  });

};

const closeButton  = document.querySelector('.big-picture__cancel');

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPhoto.classList.add('hidden');
});

document.addEventListener('keydown', (evt) =>{
  evt.preventDefault();
  if (evt.keyCode === 27){
    bigPhoto.classList.add('hidden');
  }
});

export { getBigPicture };
