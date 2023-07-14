// Поиск случайного элемента

function getRandomNumber(a, b) {
  const minValues = Math.ceil(Math.min(a, b));
  const maxValues = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (maxValues - minValues + 1) + minValues);
}

// Определение случайного элемента массива

const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

export {getRandomNumber, getRandomArrayElement, isEscapeKey, isEnterKey};
