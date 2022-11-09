
function checkAnagrams(left, right) { // функция принимаем  левое и правое слово
  console.log(left, right) 
  if (left.length !== right.length) { // если их длины не равны то они не анаграмы
    console.log('ДЛИНЫ РАЗНЫЕ')
    return false;
  }

  let leftMap = {}; // создание объекта

  console.log('FOR -> '+left)
  for (let i = 0; i < left.length; i++) { // проходим циклом по всем слову чтобы собрать карту букв с ключами
    let symbol = left[i]; // получение текущего символо который будем рассматривать
    console.log('symbol for left - ' + symbol);
    leftMap[symbol] = (leftMap[symbol] || 0) + 1; // в наш объект по ключу symbol - вложим следующее =  Если был элемент то добавим 1, если нет то ноль и прибавим +1
    console.log(leftMap[symbol]);
    console.log(leftMap);
  }

  console.log('FOR -> '+right)
  for (let i = 0; i < right.length; i++) { // проходим циклом по правому слову
    let symbol = right[i];// получение текущего символа который будем рассматривать
    // console.log(leftMap);
    console.log('symbol for right - ' + symbol);
    if (!leftMap[symbol]) { // если текущего символа нет или равен 0
      return false;
    }

    leftMap[symbol] = leftMap[symbol] - 1; // от присутствующего количество символов отнимаем 1 еедницу
    console.log(leftMap);
  }
  return true;
}

// console.log('s01e08 - Anagram');

console.log('  abc cba', checkAnagrams('abc', 'cba'));
// console.log('  abc cbaa', checkAnagrams('abc', 'cbaa'));
// console.log('  aabc cbaa', checkAnagrams('aabc', 'cbaa'));
// console.log('  abcz abcx', checkAnagrams('abcz', 'abcx'));
// console.log('  aabc cbaa', checkAnagrams('aabc', 'cbaa'));