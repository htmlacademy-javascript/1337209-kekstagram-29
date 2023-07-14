import {publications} from './data.js';
import {isEscapeKey, isEnterKey} from './util.js';
import {renderPicture} from './render.js';

const closeButtonPicture = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bodyModalOpen = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.pictures');

function onClickOpen (evt) {
  const picture = evt.target.closest('.picture');
  if (picture) {
    openBigPicture(picture);
  }
}

function openBigPicture(element) {
  if(!bigPicture.classList.contains('hidden')){
    return;
  }
  const { pictureId } = element.dataset;
  const item = publications.find(({ id }) => id === parseInt(pictureId, 10));
  renderPicture(item);
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bodyModalOpen.classList.add('modal-open');
}

document.addEventListener('keydown', (evt) => {
  const active = document.activeElement;
  if(active && active.classList.contains('picture') && isEnterKey(evt)) {
    evt.preventDefault();
    openBigPicture(active);
    active.blur();
  }
});

const onClickClose = function (evt) {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
};


document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});

pictures.addEventListener('click', onClickOpen);
closeButtonPicture.addEventListener('click', onClickClose);


