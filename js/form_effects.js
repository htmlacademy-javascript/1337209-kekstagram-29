const sliderElement = document.querySelector('.img-upload__effect-level');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelNone = document.querySelector('.effects__preview--none');
const effectChrome = document.querySelector('.effects__preview--chrome');
const effectSepia = document.querySelector('.effects__preview--sepia');
const effectMarvin = document.querySelector('.effects__preview--marvin');
const effectPhobos = document.querySelector('.effects__preview--phobos');
const effectHeat = document.querySelector('.effects__preview--heat');

if(effectLevelNone) {
  sliderElement.classList.add('hidden');
}
const original = () => {
  sliderElement.classList.add('hidden');
};

let setFilter;
let isInitSlider = false;

const initSlider = () => {
  if(sliderElement.noUiSlider) {
    sliderElement.noUiSlider.set(100);
  }
  sliderElement.classList.remove('hidden');
  if(isInitSlider) {
    return;
  }
  isInitSlider = true;
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 0,
    step: 1,
  });
  sliderElement.noUiSlider.on('update',() => {
    const v = sliderElement.noUiSlider.get();
    effectLevelValue.value = v;
    uploadPreviewImg.style.filter = setFilter(v);
  });
};

effectChrome.addEventListener('click',() => {
  setFilter = (v) => `grayscale(${v / 100})`;
  initSlider();
});

effectSepia.addEventListener('click',() => {
  setFilter = (v) => `sepia(${v / 100})`;
  initSlider();
});

effectMarvin.addEventListener('click',() => {
  setFilter = (v) => `invert(${v}%)`;
  initSlider();
});

effectPhobos.addEventListener('click',() => {
  setFilter = (v) => `blur(${v / 100 * 3}px)`;
  initSlider();
});

effectHeat.addEventListener('click', () => {
  setFilter = (v) => `brightness(${v / 100 * 3})`;
  initSlider();
});

effectLevelNone.addEventListener('click', original);
