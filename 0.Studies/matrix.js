

// Вывод элементов матрицы
function logEachMatrixItem(matrix) {
    console.log('\nLog each matrix item:');

    for (let i = 0; i < matrix.length; i++) { // проходим по каждой строчке
        for (let j = 0; j < matrix[i].length; j++) { // проходим по каждому элементу в строчке
            console.log(`  item {${i}, ${j}} - ${matrix[i][j]}`); // Вывод информации
        }
    }
}

//Вывод матрицы
function showMatrix(matrix) {
    console.log('\nShow matrix:');

    for (let i = 0; i < matrix.length; i++) {
        console.log( matrix[i].join(' ') ); // объединяем все элементы в одну строку с разделителем
    }
}

//Вывод суммы строки элементов
function showSumByRow(matrix) {
    console.log('\nShow sum by row:');

    let sumResults = []; // массив для складирования результатов
    let sum; // переменная для накопления суммы

    for (let i = 0; i < matrix.length; i++) { // обход каждой строчки
        sum = 0; // обнуляем счетчик

        for (let j = 0; j < matrix[i].length; j++) { // проходимся по каждому элементу выбраннойстрочки
            sum += matrix[i][j]; // накапливаем
        }

        sumResults.push(sum); //Массив результатов
    }

    console.log('  result -', sumResults);
}

// Поиск колонок если есть НОЛЬ - поиск индекса колонок
function findColumnsWithZero(matrix) {
    console.log('\nFind columns with 0:');

    let columnsWithZeroIdx = []; // массив для накопления результатов

    let columnCount = matrix[0].length; // количество колонок

    for (let i = 0; i < columnCount; i++) { // проходимся по столбцам
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) { // обращаемся стразу к строке чтобы пройтись по столбцу 
                columnsWithZeroIdx.push(i); // и - индекс столбца где есть элемент 0
                break; // прекращение цикла
            }
        }
    }

    console.log('  result indexes -', columnsWithZeroIdx);
}

// Обход матрицы по типу змеи - меняеться направление обхода строки
function snakeBypass(matrix) {
    console.log('\nSnake bypass:');

    for (let i = 0; i < matrix.length; i++) { // проходимся по каждой строке
        for (let j = 0; j < matrix[i].length; j++) { // цикл от начала до последнего элемента
            let columnIdx = i % 2 === 0  // Если четное  то идем слева на право
                ? j // индекс не изменяем
                : (matrix[i].length - j - 1); // если нечетное - индекс равен длине данной строки минус ДЖЕЙ по циклу - чтобы идти справа на лево - и минус 1 чтобы получить верный индекс по длине массива
            // Более  развертнуты пример
            // let columnIdx = i % 2 ;
            // if( columnIdx == 0 ) {
            //     columnIdx = j;
            // } else {
            //     columnIdx = matrix[i].length - j - 1
            // }
            console.log( matrix[i][columnIdx] );
        }
    }
}

// Вывод главной диагонали два индекса всегда совпадают
function logMainDiag(matrix) {
    console.log('\nMain diag:');

    for (let i = 0; i < matrix.length; i++) {
        console.log( matrix[i][i] );// Вывод главной диагонали два индекса всегда совпадают
    }
}

// Вывод побочной диагонали
function logSideDiag(matrix) {
    console.log('\nSide diag:');

    let n = matrix.length; // длина матрицы - матрица у нас квадратная

    for (let i = 0; i < n; i++) {
        console.log( matrix[i][n - i - 1] ); // второй индекс = длина матрицы минус И, чтобы был обратный вывод, - 1 чтобы учитывать особенности индекса длины массива
    }
}

// Вывод нижнего треугольника ниже главной диагонали
function showBottomMainTriangle(matrix) {
    console.log('\nBottom main triangle:');

    let row; // для набора элементов

    for (let i = 0; i < matrix.length; i++) { // обходим каждую строчку
        row = []; // обнуление массива

        for (let j = 0; j <= i; j++) { // запускаем циклы для вывода элементов ДО индекс строки
        // action
            row.push( matrix[i][j] ); // записываем элементы 
        }

        console.log( row.join(' ') );
    }
}

console.log('s01e03 - Matrix\n');

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [0, 3, 6, 9],
    [6, 8, 0, 2],
];

// logEachMatrixItem(matrix);
// showMatrix(matrix);

// showSumByRow(matrix);

// findColumnsWithZero(matrix);

// let smallMatrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// showMatrix(smallMatrix);
// snakeBypass(smallMatrix);

// logMainDiag(matrix);
// logSideDiag(matrix);

// showMatrix(matrix);
// showBottomMainTriangle(matrix);