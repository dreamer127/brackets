module.exports = function check(str, bracketsConfig) {
  let strLength, regex, pairsBrackets, numb;
  if (str.length % 2 != 0){
    return false;
  }
  do {
    strLength = str.length;
    for (let i = 0; i < bracketsConfig.length; i++) {
      numb = +bracketsConfig[i].join('');
      if (numb == bracketsConfig[i].join(''))
        pairsBrackets = bracketsConfig[i].join('');
      else
        pairsBrackets = "\\" + bracketsConfig[i][0] + "\\" + bracketsConfig[i][1];
      regex = new RegExp(pairsBrackets, 'g');
      str = str.replace(regex, '');
    }
    } 
  while (strLength != str.length);

  if(str.length === 0) {
      return true;
    }
    else
      return false;
}
