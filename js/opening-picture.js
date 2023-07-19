import {publications} from './data.js';
import {isEscapeKey, isEnterKey} from './util.js';
import {renderPicture, renderComments} from './render.js';

const closeButtonPicture = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bodyModalOpen = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.pictures');
const STEP_COMMENT = 5;
let currentComments;
let currentCommentsCounter = 0;

function dataLoad (item) {
  renderComments(item.comments.slice(0, STEP_COMMENT));
  currentComments = item.comments;
  currentCommentsCounter = STEP_COMMENT;
  if(currentComments.length <= currentCommentsCounter) {
    currentCommentsCounter = currentComments.length;
    commentsLoader.classList.add('hidden');
  } socialCommentCount.innerHTML = `${currentCommentsCounter} из ${currentComments.length} комментариев`;
}

commentsLoader.addEventListener('click', () => {
  if(currentComments.length > currentCommentsCounter) {
    renderComments(currentComments.slice(currentCommentsCounter,currentCommentsCounter + STEP_COMMENT), true);
    currentCommentsCounter += STEP_COMMENT;

    if(currentComments.length < currentCommentsCounter || currentComments.length === currentCommentsCounter) {
      currentCommentsCounter = currentComments.length;
      commentsLoader.classList.add('hidden');
    }
    socialCommentCount.innerHTML = `${currentCommentsCounter} из ${currentComments.length} комментариев`;
  } else {
    return null;
  }
});


function openBigPicture(element) {
  if(!bigPicture.classList.contains('hidden')){
    return;
  }
  const { pictureId } = element.dataset;
  const item = publications.find(({ id }) => id === parseInt(pictureId, 10));
  renderPicture(item);
  commentsLoader.classList.remove('hidden');
  dataLoad(item);
  bigPicture.classList.remove('hidden');
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

function onClickOpen (evt) {
  const picture = evt.target.closest('.picture');
  if (picture) {
    openBigPicture(picture);
  }
}

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


