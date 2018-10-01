module.exports = function check(str, bracketsConfig) {
  // your solution
  let newStr = str;
  let isTrue = false;
  let unicElemArr = [];
  let bracketsArr = [];
  const specialSymbols = '[ \ ^ $ . | ? * + ( )'.split(' ');
  const checkIsSpecialSymbol = str => specialSymbols.includes(str);

  if (str.length%2 !== 0) {
    return false
  }

  findBrackets = (stroke, brackets) => {
    if (stroke.length === 0) {
      isTrue = true;
    }
    if (stroke.indexOf(brackets) !== -1 ) {
      newStr = stroke.replace(brackets, '');
      findBrackets(newStr, brackets)
    } else {
      return stroke;
    }
  }

  Array.from(bracketsConfig).forEach(item => {
    let firstBracket = item[0];
    let lastBracket = item[1];
    let pairBracket = firstBracket + lastBracket;
    bracketsArr.push(pairBracket);
  });

  for (let i = 0, len = bracketsArr.length + 1; i < len; i++) {
    bracketsArr.forEach(item => {
      findBrackets(newStr, item);
    });
  }

  return isTrue;
}