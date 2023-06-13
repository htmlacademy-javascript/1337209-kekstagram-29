// задача №1
const toStr = function (str, numb) {
  return (str.length <= numb);
};

toStr('привет', 6);

// задача №2

const chekOnPolydrome = (str) => {
  str = str.replaceAll(' ', '').toLowerCase();
  const newStr = str;
  let resultStr = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    resultStr += str[i];
  }

  resultStr = resultStr.replaceAll(' ', '').toLowerCase();

  if (str === resultStr) {
    return true;
  } else {
    return false;
  }
};
chekOnPolydrome('д овоД');
