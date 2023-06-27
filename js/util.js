// Поиск случайного элемента

function getRandomNumber(a, b) {
  const minValues = Math.ceil(Math.min(a, b));
  const maxValues = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (maxValues - minValues + 1) + minValues);
}

// Определение случайного элемента массива

const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

// Генерация уникального случайного элемента массива

const generationId = (a, b) => {
  const previusValues = [];
  return function () {
    let randomId = getRandomNumber(a, b);
    if(previusValues.length >= (b - a + 1)) {
      return null;
    }
    while(previusValues.includes(randomId)) {
      randomId = getRandomNumber(a, b);
    }
    previusValues.push(randomId);
    return randomId;
  };
};

export {getRandomNumber, generationId, getRandomArrayElement};
