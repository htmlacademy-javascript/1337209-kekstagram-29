// задача №1
/*
const toStr = function (str, numb) {
  console.log (str.length <= numb);
};

toStr('привет', 6);
*/

// задача №2
/*
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
  }return false;
};
chekOnPolydrome('д овоД'); */

// задача №2, 2-ой вариант

// const chekOnPolydrome = function (str) {
//   return str.replaceAll(' ', '').toLowerCase() === str.replaceAll(' ', '').toLowerCase().split('').reverse('').join('');
// };

// chekOnPolydrome('ДоВод');
