const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('[name="filename"]');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const bodyModalOpen = document.querySelector('body');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effectsPreview = document.querySelectorAll('.effects__preview');
const lengthMessage = 140;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload--error'
});

// проверки по хэштегам

function checkCount (value) {
  const v = value.trim();
  const newArray = v.split(' ').filter(Boolean);
  return !newArray || newArray.length < 6;
}
function checkGrid (value) {
  const v = value.trim();
  const newArray = v.split(' ').filter(Boolean);
  return !newArray || newArray.every((tag) => tag.startsWith('#'));
}

function checkLength (value) {
  const v = value.trim();
  const newArray = v.split(' ').filter(Boolean);

  return !newArray || newArray.every((tag) => tag.length >= 2 && tag.length <= 20);
}

function checkSymbols(value) {
  const v = value.trim().toLowerCase();
  const newArray = v.split(' ').filter(Boolean);

  return !newArray || newArray.every((tag) => /^#[a-zа-яё0-9]+$/.test(tag));
}

function checkRepeats(value) {
  const v = value.trim().toLowerCase();
  const newArray = v.split(' ').filter(Boolean);
  const l = newArray;

  return !newArray || !l.some((tag, i) => (i < l.length - 1) && l.slice(i + 1).includes(tag));
}

function checkMessageLength(value) {
  return value.length <= lengthMessage;
}

const hashTags = imgUploadForm.querySelector('.text__hashtags');
const textMessage = imgUploadForm.querySelector('.text__description');

hashTags.addEventListener('keydown',(e) => e.stopPropagation());
textMessage.addEventListener('keydown',(e) => e.stopPropagation());

// Валидация хэшегов

pristine.addValidator(hashTags, checkCount, 'максимум 5 хэштегов', 1, true);
pristine.addValidator(hashTags, checkGrid, 'хэш-тег начинается с символа # (решётка)', 1, true);
pristine.addValidator(hashTags, checkLength, 'от 2 до 20 символов');
pristine.addValidator(hashTags, checkSymbols, 'содержит только буквы и цифры');
pristine.addValidator(hashTags, checkRepeats, 'хэштеги не повторяются');

// Валидация комментариев

pristine.addValidator(textMessage, checkMessageLength, `длина комментария не может составлять больше ${lengthMessage} символов`);


imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const getPreview = (file, fn) => new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    fn(e.target?.result);
    resolve(e.target.result);
  };
  reader.readAsDataURL(file);
});

imgUploadInput.addEventListener('change', (evt) => {
  evt.preventDefault();
  imgUploadOverlay.classList.remove('hidden');
  getPreview(imgUploadInput.files[0], (url) => {
    imgUploadPreview.querySelector('img:not([class])').src = url;
    effectsPreview.forEach((element) => {
      element.style.backgroundImage = `url(${url})`;
    });
    bodyModalOpen.classList.add('modal-open');
  });
});


const isEscapeImg = (evt) => evt.key === 'Escape';

document.addEventListener('keydown', (evt) => {
  if (isEscapeImg(evt)) {
    imgUploadOverlay.classList.add('hidden');
    bodyModalOpen.classList.remove('modal-open');
  }
});

const onImgClose = (evt) => {
  evt.preventDefault();
  imgUploadOverlay.classList.add('hidden');
  bodyModalOpen.classList.remove('modal-open');
};

imgUploadCancel.addEventListener('click', onImgClose);
