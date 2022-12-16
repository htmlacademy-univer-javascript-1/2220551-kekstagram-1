import { initThumbnails } from './thumbnails.js';
import { sendRequest } from './api.js';
import './form.js';
import './filters.js';

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  initThumbnails(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
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

const getData = () => photos;

sendRequest(onSuccess, onFail, 'GET');

export { getData };
