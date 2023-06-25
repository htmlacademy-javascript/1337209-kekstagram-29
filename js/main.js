let userId = 0;

const quantityOfComments = 30;

const maxIdPublishedPhotos = 25;

const avatarNumb = {
  min: 1,
  max: 6
};

const likes = {
  min: 15,
  max: 200
};

const uniqueNumberComment = {
  min: 1,
  max: 99
};

const messageComment = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const descriptionPhoto = [
  'Сияние разума',
  'Волны',
  'Вольный полёт',
  'Синий раскол',
  'Стан',
  'Сонный пир'
];

const nameAuthorComment = ['Сергей', 'Роман', 'Виктория', 'Любовь', 'Анатолий', 'Александр'];

// Поиска целого случайного элемента

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

const arrayGenerationId = generationId (uniqueNumberComment.min, uniqueNumberComment.max);
const arrayGenerationComment = generationId(0, quantityOfComments);

const createComment = () => ({
  id: arrayGenerationId(),
  avatar: `img/avatar-${getRandomNumber(avatarNumb.min, avatarNumb.max)}.svg`,
  name: getRandomArrayElement(nameAuthorComment),
  message: getRandomArrayElement(messageComment),
});

const arrayComment = () => Array.from({length: getRandomNumber(0, arrayGenerationComment(0))}, createComment);

// Функция описания публикации пользователя

const descriptionPublication = () => {
  userId++;
  return {
    id: userId,
    url: `photos/${userId}.jpg`,
    description: getRandomArrayElement(descriptionPhoto),
    likes: getRandomNumber(likes.min, likes.max),
    comment: arrayComment()
  };
};

const arrayDescriptionPublication = () => Array.from({length: maxIdPublishedPhotos}, descriptionPublication);

arrayDescriptionPublication();
