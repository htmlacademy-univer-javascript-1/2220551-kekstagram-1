const Scale = {
  STEP: 25,
  MIN_VALUE: 25,
  MAX_VALUE: 100,
};

const overlay = document.querySelector('.img-upload__overlay');
const scaleField = overlay.querySelector('.img-upload__scale');
const scale = scaleField.querySelector('.scale__control--value');
const imagePreview = overlay
  .querySelector('.img-upload__preview')
  .querySelector('img');

const setDefaultScale = () => {
  scale.value = `${Scale.MAX_VALUE}%`;
  imagePreview.style = `transform: scale(${1})`;
};

const setCorrectScaleValue = (scaleValue) => {
  if (scaleValue < Scale.MIN_VALUE) {
    return Scale.MIN_VALUE;
  }
  if (scaleValue > Scale.MAX_VALUE) {
    return Scale.MAX_VALUE;
  }
  return scaleValue;
};

const onScaleFieldClick = (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    let value = scale.value;
    value = scale.value.slice(0, value.length - 1);
    let scaleCoefficient = 1;

    if (evt.target.classList.contains('scale__control--smaller')) {
      scaleCoefficient = -1;
    }
    value = parseInt(value, 10) + Scale.STEP * scaleCoefficient;
    value = setCorrectScaleValue(value);

    imagePreview.style = `transform: scale(${value / 100})`;
    scale.value = `${value}%`;
  }
};

scaleField.addEventListener('click', onScaleFieldClick);

export { setDefaultScale };
