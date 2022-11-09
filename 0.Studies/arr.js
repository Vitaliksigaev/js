

function arrayCreation() {
    let arrayWithInitSize = new Array(4); //Создание массива с длиной - 4 (4 ячейки) 
    let arrayWithOneValue = new Array('5');//Создание массива с одним элементом - строкой '5'
    let arrayWithPreset = new Array(5, 6);//Создание массива с двумя эдементами 5 и 6
    let arrayWithInitValue = Array.of(4);//Создание массива с элементом массива 4
    let arrayWithInitValues = Array.of(4, 5, 6);//Создание массива с элементами массива 4 5 6 
    let simpleWayArray = ['a', 'b', 'c']; // Вариант создания массива

    console.log('\nArray creation:');
    console.log('arrayWithInitSize:', arrayWithInitSize);
    console.log('arrayWithOneValue:', arrayWithOneValue);
    console.log('arrayWithPreset:', arrayWithPreset);
    console.log('arrayWithInitValue:', arrayWithInitValue);
    console.log('arrayWithInitValues:', arrayWithInitValues);
    console.log('simpleWayArray:', simpleWayArray);
}

function arrayBypass() {
    function logEachElement(array) { // функция вывода всех жлементов массива в консоль
        for (let i = 0; i < array.length; i++) { // цикл по всей длине массива
        console.log(`[elem with index ${i}] is ${array[i]}`); // вывод элементов в консоль
        }
    }

    function findSum(array) { // найти сумму всех элементов массива
        logEachElement(array);

        let sum = 0; // переменная для накопления суммы

        for (let i = 0; i < array.length; i++) { // циклом пройдемся по каждому элементу массива 
            sum += array[i]; //обновим значение прибавляя текущий элемент к переменной сум - накапливая все элементы
        }

        console.log(`sum = ${sum}`); // выводим какая сумма у нас получилась
    }

    function findMin(array) { // поиск минимального элемента
        let min = array.length ? array[0] : 0; // проверка массива на наличие элемента и обьявление стартового значения МИН

        for (let i = 0; i < array.length; i++) { // проходимся циклом по всем элементам
            if (array[i] < min) { // если текущее значение массива меньше минимума -
                min = array[i]; // то мы обновляем значение  МИН
            }
        }
        console.log(`min is ${min}`);
    }

    function findAvg(array) { // функция на среднее арифметическое среи элементов массива
        logEachElement(array);

        let sum = 0;// переменная для накопления суммы

        for (let i = 0; i < array.length; i++) {
            sum += array[i]; // накапливаем сумму
        }

        let avg = array.length ? sum / array.length : 0; // если элементы были то полученную сумму деллим на длину массива или =0

        console.log(`avg = ${avg}`);
    }

console.log('\nArray bypass:');

let array = [21, 22, 23, 24, 25, 26, 27]; // объявлеие массива

// logEachElement(array);
// array = [5, 1, 10, 23];
// findSum(array);
// findMin(array);
// findAvg(array);
}

// console.log('s01e01 - Array\n');
// arrayCreation();
// arrayBypass();


// МЕТОДЫ В МАССИВЕ


function arrayHasSome() {
console.log('\nHas Some:');

function hasSome(array, checkFn) { // если в нашем массиве один элемент удовлетворяющий нас по условию - массив и функция 
    for (let i = 0; i < array.length; i++) { //пробегаемся по всем элементам
        if ( checkFn(array[i]) ) {
            return true;
        }
    }

    return false;
}

let arr = [1, 2, 4, 8, 16];

console.log('  array:', arr, '\n');

console.log('  has > 5:', hasSome( arr, (item) => item > 5 ));
console.log('  has > 20:', hasSome( arr, (item) => item > 20 ));

// метод к массиву some для проверки условий

// console.log('  has > 5 .some:', arr.some( (item) => item > 5 )); 
// console.log('  has > 20 .some:', arr.some( (item) => item > 20 ));
}

function arrayIsEvery() { // проверка всех элементов на одно условие 
console.log('\nIs Every:');

function isEvery(array, checkFn) {
    for (let i = 0; i < array.length; i++) { // проходимся по всем элементам нашего массива
        if ( !checkFn(array[i]) ) { // если хоть кто нибудь кто не подходит под наше описание
            return false;
        }
    }

    return true;
}

let arr = [1, 2, 4, 8, 16];

console.log('  array:', arr, '\n');

console.log('  is every < 5:', isEvery( arr, (item) => item < 5 ));
console.log('  is every < 100:', isEvery( arr, (item) => item < 100 ));

// МЕТОД every

// console.log('  is every < 5 .every:', arr.every( (item) => item < 5 ));
// console.log('  is every < 100 .every:', arr.every( (item) => item < 100 ));
}

function arrayTransform() {
console.log('\nTransform:');

function transform(array, transformer) { // передаем массив и функция для преобразования элемента
    let result = []; // создаем новый массив чтобы сохранять обновленные значения

    for (let i = 0; i < array.length; i++) { // обходим весь массив
        result.push( // помещаем в массив результат после трансформации элемента
            transformer(array[i])
        );
    }

    return result;
}

let arr = [1, 2, 4, 8, 16];

console.log('  before:', arr, '\n');

let transformed = transform( arr, (item) => item * 10 );
console.log('  after transformation:', transformed);

// let res = arr.map( (item) => item * 10 ); // Метод МАП -
// console.log('  after .map:', res);
}

function arrayFilter() { // метод фильтрации
console.log('\nFilter:');

function filter(array, checkFn) {
    let result = []; // массив результатов

    for (let i = 0; i < array.length; i++) { // по всем элементам
        if ( checkFn(array[i]) ) { // если элемент проходит по нашим условиям
            result.push(array[i]);
        }
    }

    return result;
}

let arr = [1, 2, 4, 8, 16];

console.log('  before:', arr, '\n');

let filtered = filter( arr, (item) => item > 5 );
console.log('  after filtration:', filtered);

// let res = arr.filter( (item) => item > 5 ); // МЕТОД ФИЛЬТР
// console.log('  after .filter:', res);
}


// console.log('s01e06 - Array Methods');
// arrayHasSome();
  // arrayIsEvery();
  // arrayTransform();
  // arrayFilter();

  // ОБХОДЫ  И МЕТОДЫ

let commentList = [
  {
    id: '#com1',
    author: { id: '#aut1', name: 'John Doe'},
    text: 'Cool!',
    postId: '#post1',
  },
  {
    id: '#com2',
    author: { id: '#aut1', name: 'John Doe'},
    text: 'Cool!',
    postId: '#post2',
  },
  {
    id: '#com3',
    author: { id: '#aut2', name: 'Anthony Hopkins'},
    text: 'Nice comment, John! :)',
    postId: '#post1',
  },
  {
    id: '#com4',
    author: { id: '#aut1', name: 'John Doe'},
    text: 'Thanks!',
    postId: '#post1',
  },
];


// Задача вывести все комментарии к определенному посту
// в функция передаем весь список комментариев и номер поста

function getCommentsByPostId(commentList, postId) {
    console.log(`\nGet all comments for post with id = ${postId}:`); // выводим в консоль номер ид поста
    let comments = commentList
        .filter(comment => comment.postId === postId) // фильтруем наш массив по пост Айди
        .map( comment => comment.text); //возвращаем содержимое комментария
        console.log('  comments:', comments);
}

// getCommentsByPostId(commentList, '#post1');
// getCommentsByPostId(commentList, '#post2');

// function getAuthorNames(commentList) { // Получение имен автора
//     console.log('\nGet author names:');

//     let authors = commentList  // записываем имена авторов в переенную
//         .map( comment => comment.author ) // возвращаем объект автор из элемента массива
//         .filter( (author, index, currentList) => // фильтруем полученный массив после map , чтобы имена оставить в единственном экземпляре
//         currentList.findIndex( item => item.id === author.id ) === index
//         )
//         .map( author => author.name );
//         console.log(commentList.map( comment => comment.author ))
//         console.log(commentList.map( comment => comment.author ).filter( (author, index, currentList) => 
//         currentList.findIndex( item => item.id === author.id ) === index
//         ))

//     console.log('  authors:', authors);
// }
// getAuthorNames(commentList)

// попробую более детально разобрать этот метод

function getAuthorNames(commentList) { // Получение имен автора
    console.log('\nGet author names:');

    let coomentListMap = commentList.map( comment => comment.author ) // возвращаем объект автор из элемента массива
    console.log(coomentListMap);

    // фильтруем полученный массив после map , чтобы имена оставить в единственном экземпляре
    let coomentListMapFilter = coomentListMap.filter((author, index, currentList) =>  
    // на вход в функцию (по результатам которой будем проводить фильтр) мы получаем елемент + его индекс + массив => 
    // в массиве мы находим элементы в которых
    currentList.findIndex( item => item.id === author.id ) === index) 

    console.log(coomentListMap.map(item => console.log(item.id))); // выводим все индексы после МАП
    console.log(coomentListMap.map((author, index, currentList) => 
        console.log('author = ' + author + '/index= ' + index  + '/currentList = ' + currentList ))
        );
    console.log(coomentListMapFilter);

    let authors = coomentListMapFilter.map( author => author.name ); // возвращаем в массив имена уникальных авторов
    console.log('  authors:', authors);
}
// getAuthorNames(commentList)





//Задача посчитать количество комментариев на 1 уникального автора
function getAuthorsStatistics(commentList) {
    console.log('\nGet authors statistics: <AuthorID, CommentCount>');

let statistics = commentList
    .map( comment => comment.author.id ) // Возвращаем массив с айдишек авторов
    .reduce( (dict, item) => {  //применяет функцию reducer к каждому элементу массива, возвращая одно  значение.
        console.log(item)
        dict[item] = (dict[item] || 0) + 1; // dict = аккамулятор - переменная в которой накапливаем значения
        console.log(dict[item])
    return dict;
    }, {}); // начинаем с пустого массива
    console.log(commentList.map( comment => comment.author.id ))

    console.log('  statistics:', statistics);
}
getAuthorsStatistics(commentList)