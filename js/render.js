
const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const renderComments = (comments) => {
  const boxFragment = document.createDocumentFragment();
  socialComments.innerHTML = '';
  comments.forEach((element) => {
    const copytemplate = commentTemplate.cloneNode(true);
    copytemplate.querySelector('.social__picture').src = element.avatar;
    copytemplate.querySelector('.social__picture').alt = element.name;
    copytemplate.querySelector('.social__text').textContent = element.message;
    boxFragment.append(copytemplate);
  });
  socialComments.append(boxFragment);
};

const renderPicture = ({url, likes, description, comments}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  renderComments(comments);
};

export {
  renderComments,
  renderPicture
};
