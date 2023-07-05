// import {arrayDescriptionPublication} from './data.js';

const getPictures = (func) => {
  const pictures = document.querySelector('.pictures');
  const Template = document.querySelector('#picture').content.querySelector('.picture');

  const BoxPicturesFragment = document.createDocumentFragment();

  func.forEach((element) => {
    const copyTemplate = Template.cloneNode(true);
    copyTemplate.querySelector('.picture__img').alt = element.description;
    copyTemplate.querySelector('.picture__img').src = element.url;
    copyTemplate.querySelector('.picture__comments').textContent = element.comment.length;
    copyTemplate.querySelector('.picture__likes').textContent = element.likes;
    BoxPicturesFragment.append(copyTemplate);
  });

  pictures.append(BoxPicturesFragment);
};

export {getPictures};
