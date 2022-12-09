import { isEscKey } from './util.js';
import { pristine, refreshPrinstine } from './validate.js';

const imgUploadFileChange = document.querySelector('.img-upload__input');
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const closingButton = document.querySelector('#upload-cancel');

const isFocus = (evt) =>
  !evt.target.classList.contains('text__hashtags') &&
  !evt.target.classList.contains('text__description');

const onFormInput = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

const onFormCloseBtnClick = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  form.reset();
  imgUploadFileChange.value = '';

  refreshPrinstine();
  form.removeEventListener('submit', onFormInput);
  closingButton.removeEventListener('click', onFormCloseBtnClick);
};

const onEscClick = (evt) => {
  if (isEscKey(evt) && isFocus(evt)) {
    onFormCloseBtnClick();
    document.removeEventListener('keydown', onEscClick);
  }
};

const onImgUploadFieldСhange  = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closingButton.addEventListener('click', onFormCloseBtnClick);
  document.addEventListener('keydown', onEscClick);
  form.addEventListener('submit', onFormInput);
};

imgUploadFileChange.addEventListener('input', onImgUploadFieldСhange );
