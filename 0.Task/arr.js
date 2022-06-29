"use strict";

//Создайте массив с элементами 'a', 'b' и 'c'. Выведите его на экран с помощью функции alert, а также выведите его в консоль с помощью console.log.
/*
let arr = ['a', 'b', 'c']
alert(arr)
console.log(arr)
*/

//Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.
/*
let arr = ['a', 'b', 'c', 'd']
alert(arr[0] + '+' + arr[1] + '+' +arr[2] + '+' + arr[3])*/

//Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.
/*
let arr = [1, 2, 3]
alert(arr[0] + arr[1] +arr[2]);
*/

//Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
/*
let arr = [2, 5, 3, 9]
let result = arr[0]*arr[1] + arr[2]*arr[3]
alert(result);
*/

//Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
/*
let arr = [2, 5, 3]
arr[0]++
arr[1]++
arr[2]++
alert(arr);
*/

//ОБЪЕКТЫ
//Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.
/*
let obj = {a: '1', b: '2', c: '3'};

console.log(Number(obj['a']) + Number(obj['b']) +Number(obj['c']))
*/
//Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.
/*

let obj = {'1a': '1', '2b': '2', 'c-c': '3'};
console.log(Number(obj['1a']) + Number(obj['2b']) +Number(obj['c-c']))
*/

//Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.
/*
let obj = {key1: 1, key2: 2, key3: 3};
let c = obj.key1 + obj.key2 + obj.key3 ;
alert(c);*/


//Создайте объект user с ключами name, surname, patronymic и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
/*
let user = { name:'Vitalik', surname:'Sigaev', work:'JS'};
alert(user.surname + ' ' + user.name +' '+ user.work + ' !')
*/

//Создайте объект date с ключами year, month и day и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.
/*
let date = { year: 2022, manth: 6, day: 22,}
alert(date.year+'-'+date.manth+'-'+date.day)
*/
/*
let obj = {};
obj.a = 1;
obj.b = 2;
obj.c = 3;
console.log(obj);
*/

/*
let obj = {a: 1, b: 2, c: 3};
alert(Object.keys(obj).length);
*/
/*
let test1 = 3;
let test2 = '3';
		
if (test1 != test2) {
	alert('верно');
} else {
	alert('неверно');
}
*/
/*
let num1 = 5;
if (!(num1 >= 0 || num2 <= 10)) {
	alert('верно');
} else {
	alert('неверно');
}
*/



/*if-else*/

/*
let test = -1;

if (test) {
	alert('верно');
} else {
	alert('неверно');
}*/
/*
let test = 0;

if (test == 0) 	alert('верно');
*/

//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
/*
let day = 24;

if (day < 10) alert("first");
if (day>10 && day <= 20) alert("Sec");
if (day > 20) alert("Fif");
*/

//Решите предыдущую задачу на декады месяца через конструкцию else if.
/*
let day = 24;

if (day < 10) {
    alert("first");
} else if (day>10 && day <= 20) {
    alert("Sec");
}else if (day > 20) {
    alert("Fif");
}
*/

//Пусть в переменной num хранится число. Если это число не попадает в диапазон от 10 до 99, то выведите на экран сообщение об этом. Если же число попадает в указанный диапазон, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите на экран сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двузначна.


/*
let num = 66;
let sumNum;
if (num> 10 && num <99) {
    sumNum = String(num);
    sumNum = (Number(sumNum[0]) + Number(sumNum[1]));
    alert(sumNum);
    if (sumNum <= 9) {
        alert("summa odnoznachno")
    } else {
        alert("2h znacna")
    }
}
*/


//Найдите сумму элементов, ключи которых хранятся в наших переменных.
/*
let arr = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
alert(arr[key1] + arr[key2])
*/

//Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью переменной key соответствующий элемент объекта.
/*
let obj = {'a': 1, 'b': 2, 'c': 3};
let key = 'a';
console.log(obj[key]);
*/



//Дан следующий массив:
/* 
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];*/

//Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
/* 
console.log(arr[3][2])
console.log(arr[1][1])
console.log(arr[2][0])
console.log(arr[0][0])
*/

/*
//Дан следующий массив:
let arr = [[1, 2], [3, 4], [5, 6]];
//Обращаясь к каждому элементу массива найдите сумму всех его элементов.

let sum = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        let sumAll = 0;
        for (var j = 0; j < arr[j].length; j++){
            sumAll = sumAll + arr[i][j];
        }
        console.log(sumAll);
    }
}
sum(arr);

*/

/*
//Дан следующий массив:

let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
//Обращаясь к каждому элементу массива найдите сумму всех его элементов.

let sum = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var c = 0; c < arr[i].length; c++) {
            let sumAll = 0;
            for (var j = 0; j < arr[c].length; j++){
                sumAll = sumAll + arr[i][c][j];
            }
            console.log(sumAll);
        }
    }
}
sum(arr);
*/
/*
//Дан двухмерный массив с числами:
let arr = [[1, 2, 3], [4, 5], [6]];
//С помощью вложенных циклов найдите сумму элементов этого массива.

for (let i = 0; i < arr.length; i++) {
    let sumAll = 0;
	for (let j = 0; j < arr[i].length; j++) {
        sumAll = sumAll + arr[i][j];
	}
    console.log(sumAll);
}
sum(arr);
*/

/*
//Дан трехмерный массив с числами:

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
//С помощью вложенных циклов найдите сумму элементов этого массива.

let sum = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var c = 0; c < arr[i].length; c++) {
            let sumAll = 0;
            for (var j = 0; j < arr[c].length; j++){
                sumAll = sumAll + arr[i][c][j];
            }
            console.log(sumAll);
        }
    }
}
sum(arr);
*/

