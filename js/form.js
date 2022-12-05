import { isEscKey } from './util.js';
import { onFormInput, refreshPrinstine } from './validate.js';

const imgUploadFileInput = document.querySelector('.img-upload__input');
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const closingButton = document.querySelector('#upload-cancel');

const noFocus = (evt) =>
  !evt.target.classList.contains('text__hashtags') &&
  !evt.target.classList.contains('text__description');

const closeClick = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  form.reset();
  imgUploadFileInput.value = '';

  refreshPrinstine();
  form.removeEventListener('submit', onFormInput);
  closingButton.removeEventListener('click', closeClick);
};

const closeEscKey = (evt) => {
  if (isEscKey(evt) && noFocus(evt)) {
    closeClick();
    document.removeEventListener('keydown', closeEscKey);
  }
};

const fileInput = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closingButton.addEventListener('click', closeClick);
  document.addEventListener('keydown', closeEscKey);
  form.addEventListener('submit', onFormInput);
};

imgUploadFileInput.addEventListener('input', fileInput);
