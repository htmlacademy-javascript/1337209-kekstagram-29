const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const step = 25;
const maxValue = 100;
const minValue = 25;

const decreaseStep = () => {
  const v = Math.max(minValue, parseInt(scaleControlValue.value, 10) - step);
  scaleControlValue.value = `${v}%`;
  imgUploadPreview.querySelector('img').style.transform = `scale(${v / 100})`;
};

scaleControlValue.addEventListener('change', () => {
});

const increaseStep = () => {
  const v = Math.min(maxValue, parseInt(scaleControlValue.value, 10) + step);
  scaleControlValue.value = `${Math.min(maxValue, v + step)}%`;
  imgUploadPreview.querySelector('img').style.transform = `scale(${v / 100})`;
};

scaleControlSmaller.addEventListener('click', decreaseStep);
scaleControlBigger.addEventListener('click', increaseStep);
