// задача №1

// let toStr = function (str, numb) {
//   console.log (str.length <= numb);
// }
// toStr('привет', 6);

// задача №2

let chekOnPolydrome = (str) => {
  str = str.replaceAll(' ', '').toLowerCase();
  let newStr = str;
  let resultStr = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    resultStr += str[i];
  }

  resultStr = resultStr.replaceAll(' ', '').toLowerCase();

  if (str === resultStr) {
    console.log('это полиндром');
  }
  else {
    console.log('не полиндром');
  }
}
chekOnPolydrome('д овоД');

// задача №2, 2-ой вариант

// let chekOnPolydrome = (str) => {
//   return str.replaceAll(' ', '').toLowerCase() === str.replaceAll(' ', '').toLowerCase().split('').reverse('').join('');
// }

// console.log(chekOnPolydrome('ДоВод'));
