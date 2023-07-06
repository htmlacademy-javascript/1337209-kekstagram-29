const getPictures = (arrayPattern) => {
  const pictures = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content.querySelector('.picture');

  const boxPicturesFragment = document.createDocumentFragment();

  arrayPattern.forEach((element) => {
    const copyTemplate = template.cloneNode(true);
    copyTemplate.querySelector('.picture__img').alt = element.description;
    copyTemplate.querySelector('.picture__img').src = element.url;
    copyTemplate.querySelector('.picture__comments').textContent = element.comment.length;
    copyTemplate.querySelector('.picture__likes').textContent = element.likes;
    boxPicturesFragment.append(copyTemplate);
  });

  pictures.append(boxPicturesFragment);
};

export {getPictures};
