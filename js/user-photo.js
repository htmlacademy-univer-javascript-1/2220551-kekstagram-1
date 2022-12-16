const FILE_TYPES = ['png', 'jpeg', 'jpg', 'gif'];

const form = document.querySelector('.img-upload__form');
const fileChooser = document.querySelector(
  '.img-upload__start input[type=file]'
);
const imgPreview = form.querySelector('.user-picture');
const effectPreviews = document.querySelectorAll('.effects__preview');

const onFileChooserChanged = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const newPictureUrl = URL.createObjectURL(file);
    imgPreview.src = newPictureUrl;

    effectPreviews.forEach((effect) => {
      effect.style.backgroundImage = `url(${newPictureUrl})`;
    });
  }
};

fileChooser.addEventListener('change', onFileChooserChanged);
