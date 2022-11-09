import {getSimilarPosts} from './data.js';

const getPhoto = (like,commentLength,url, id) =>
  ` <a href="#" class="picture js-picture">
  <img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография" data-id = "${id}">
  <p class="picture__info">
  <span class="picture__comments">${commentLength}</span>
  <span class="picture__likes">${like}</span>
  </p>
  </a>`;


const pictures = document.querySelector('.pictures');

const getPhotos = () => {
  getSimilarPosts().forEach((photo) => {
    pictures.insertAdjacentHTML('beforeend', getPhoto(photo.likes, photo.comment.length, photo.url, photo.id));
  });
};

export { getPhotos };
