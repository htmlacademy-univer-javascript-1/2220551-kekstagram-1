import { isEscKey } from './utils.js';
import { pristine, refreshPrinstine } from './validate.js';
import { setDefaultScale, onScaleControlClick } from './scale.js';
import { setDefaultEffects } from './effects.js';
import { sendData } from './sending.js';

const imgUploadFileChange = document.querySelector('.img-upload__input');
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const closingButton = document.querySelector('#upload-cancel');
const scaleField = overlay.querySelector('.img-upload__scale');

const isNoFocus = (evt) =>
  !evt.target.classList.contains('text__hashtags') &&
  !evt.target.classList.contains('text__description');

const onFormInput = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendData();
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
  scaleField.removeEventListener('click', onScaleControlClick);
};

const onClosingButtonClick = () => {
  onFormCloseBtnClick();
  closingButton.removeEventListener('click', onFormCloseBtnClick);
};

const onEscClick = (evt) => {
  if (isEscKey(evt) && isNoFocus(evt)) {
    onFormCloseBtnClick();
    closingButton.removeEventListener('click', onFormCloseBtnClick);
    document.removeEventListener('keydown', onEscClick);
    scaleField.removeEventListener('click', onScaleControlClick);
  }
};

const onImgUploadFieldСhange = () => {
  setDefaultScale();
  scaleField.addEventListener('click', onScaleControlClick);
  setDefaultEffects();
  overlay.classList.remove('hidden');

  document.body.classList.add('modal-open');

  closingButton.addEventListener('click', onClosingButtonClick);
  document.addEventListener('keydown', onEscClick);
  form.addEventListener('submit', onFormInput);
};

imgUploadFileChange.addEventListener('input', onImgUploadFieldСhange);

export { onEscClick, onFormCloseBtnClick };
