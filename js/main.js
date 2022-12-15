import { createPhotos } from './data.js';
import { initThumbnails } from './thumbnails.js';
import { sendRequest } from './fetch.js';
import './form.js';

initThumbnails(createPhotos());

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  initThumbnails(photos);
};


const onFail = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.left = 0;
  messageAlert.style.top = 0;
  messageAlert.style.right = 0;
  messageAlert.style.textAlign = 'center';
  messageAlert.style.fontSize = '30px';
  messageAlert.style.backgroundColor = 'red';
  messageAlert.textContent = 'Ошибка загрузки данных';
  document.body.append(messageAlert);
};

sendRequest(onSuccess, onFail, 'GET');
