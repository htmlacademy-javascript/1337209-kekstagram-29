import {getRandomNumber} from './util.js';
import {getRandomArrayElement} from './util.js';
import {generationId} from './util.js';

let userId = 0;

const QUANTITY_COMMENTS = 30;

const MAX_ID_PHOTOS = 25;

const QUANTITY_AVATARS = {
  min: 1,
  max: 6
};

const LIKES = {
  min: 15,
  max: 200
};

const ID_COMMENTS = {
  min: 1,
  max: 99
};

const MESSAGE_COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION_PHOTOS = [
  'Сияние разума',
  'Волны',
  'Вольный полёт',
  'Синий раскол',
  'Стан',
  'Сонный пир'
];

const NAMES = ['Сергей', 'Роман', 'Виктория', 'Любовь', 'Анатолий', 'Александр'];

const arrayGenerationId = generationId (ID_COMMENTS.min, ID_COMMENTS.max);
const arrayGenerationComment = generationId(0, QUANTITY_COMMENTS);

// Функция описания комментария

const createComment = () => ({
  id: arrayGenerationId(),
  avatar: `img/avatar-${getRandomNumber(QUANTITY_AVATARS.min, QUANTITY_AVATARS.max)}.svg`,
  name: getRandomArrayElement(NAMES),
  message: getRandomArrayElement(MESSAGE_COMMENT)
});

// Функция описания публикации пользователя

const descriptionPublication = () => {
  const arrayComment = () => Array.from({length: getRandomNumber(0, arrayGenerationComment(0))}, createComment);
  userId++;
  return {
    id: userId,
    url: `photos/${userId}.jpg`,
    description: getRandomArrayElement(DESCRIPTION_PHOTOS),
    likes: getRandomNumber(LIKES.min, LIKES.max),
    comment: arrayComment()
  };
};

const arrayDescriptionPublication = () => Array.from({length: MAX_ID_PHOTOS}, descriptionPublication);

export {arrayDescriptionPublication};


