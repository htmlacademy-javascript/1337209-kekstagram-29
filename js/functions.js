// задача №1
const cheсkStrLength = function (str, numb) {
  return (str.length <= numb);
};

cheсkStrLength('привеsт', 6);

// задача №2

const chekOnPolydrome = (str) => {
  str = str.replaceAll(' ', '').toLowerCase();
  let resultStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultStr += str[i];
  }
  return str === resultStr;
};

chekOnPolydrome('д овоД');
