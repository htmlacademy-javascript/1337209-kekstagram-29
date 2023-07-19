
const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const renderComments = (comments, append) => {
  if(!append) {
    socialComments.innerHTML = '';
  }
  const boxFragment = document.createDocumentFragment();
  comments.forEach((element) => {
    const templateCopy = commentTemplate.cloneNode(true);
    templateCopy.querySelector('.social__picture').src = element.avatar;
    templateCopy.querySelector('.social__picture').alt = element.name;
    templateCopy.querySelector('.social__text').textContent = element.message;
    boxFragment.append(templateCopy);
  });
  socialComments.append(boxFragment);
};

const renderPicture = ({url, likes, description, comments}) => {

  renderComments(comments);
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
};

export {
  renderComments,
  renderPicture
};
