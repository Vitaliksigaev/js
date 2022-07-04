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



// Видимиость

//Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода. Вот проблемный код:
/*
let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

alert(adult);*/

//Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода. Вот проблемный код:
/*
let age = 17;
let adult;

if (age >= 18) {
	let adult = true;
} else {
	let adult = false;
}

console.log(adult);*/
/*
let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);

*/


//Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. После проверки кода оказалось, что если возраст равен или больше 18 лет, то в переменную adult записывается true, как и должно быть, однако, если возраст меньше 18, то переменная adult имеет значение undefined. Исправьте ошибку автора кода. Вот проблемный код:
/*
let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	let adult = false;
}

console.log(adult);*/

/*
let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);*/

//Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.
/*
let age = 17;
let result;

if (age >= 18) {
	if (age <= 23) {
		 result = 'от 18 до 23';
	} else {
		 result = 'больше 23';
	}
} else {
	result = 'меньше 18';
}

console.log(result);*/

//Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined. Исправьте ошибку автора кода
/*
let age = 19;
let result;

if (age >= 18) {
	if (age <= 23) {
		result = 'от 18 до 23';
	} else {
		result = 'больше 23';
	}
} else {
	result = 'меньше 18';
}

console.log(result);*/


// Видимость VAR
/*
let num = 1;
		
if (num == 1) {
	var result = 'верно';
} else {
	var result = 'неверно';
}

console.log(result);*/
/*
let num = 1;
		
if (num == 1) {
	var result = 'верно';
} else {
	let result = 'неверно';
}

console.log(result);*/
/*
let min = 10;

if (min >= 0 && min <= 19) {
	console.log('1 четверть');
}

if (min >= 20 && min <= 39) {
	console.log('2 четверть');
}

if (min >= 40 && min <= 60) {
	console.log('3 четверть');
}
*/

/*
let str = '12345';

if (str.length >= 3) {
	console.log('!');
}
*/


//В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.
/*
let arr = [1,2,3];
let sum1;
if (arr.length == 3) {
    alert('3')
    sum1 = arr[0] + arr[1] + arr[2];
    alert(sum1);
}*/

//Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.
/*
let num = 1240;
if (num%2 == 0) {
    alert('0');
}*/


//Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
/*let num = 32546;

if (num%2 == 0) {
    alert("4etnoe")
} else {
    alert('ne4etnoe')
}*/

//Дано число. Проверьте, что оно делится на 3.
/*
let num = 9;
let rest = num%3;
if (rest == 0) {
    alert('deli')
} else {
    alert('ne deli')
}

*/

//Практика на условия if-else в JavaScript

//В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
/*
let month = 11;

if (month >= 1 && month <= 3) {
	console.log('1 четверть');
}
if (month >= 4 && month <= 6) {
	console.log('2 четверть');
}

if (month >= 7 && month <= 9) {
	console.log('3 четверть');
}
if (month >= 10 && month <= 12) {
	console.log('4 четверть');
}*/


//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
/*
let num = 'abcde';
console.log(num);
console.log(num.length);
console.log(num[0]);
if (num[0] == 'a') {
    alert('a')
}*/


//Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
/*
let num = 12345;
let num1 = String(num);
let num2 = Number(num1[0]);
if ( num2 == 1 || num2 == 2 || num2 == 3) {
    alert('yes');
}

*/


//Дано трехзначное число. Найдите сумму цифр этого числа.
/*
let num = 598;
let num1 = String(num);
let sum = Number(num1[0]) + Number(num1[1]) + Number(num1[2]);
alert(sum);

*/

//Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

/*
let num = 123321;
let num1 = String(num);
let sum = Number(num1[0]) + Number(num1[1]) + Number(num1[2]);
let sum1 = Number(num1[3]) + Number(num1[4]) + Number(num1[5]);
if (sum == sum1) {
    alert('yes')
}*/

//Переменная num может принимать значения 1, 2, 3 или 4. Если она имеет значение 1, то выведите на экран текст 'зима', если значение 2 - 'весна' и так далее. Если в переменной будет какое-то другое значение - выведите на экран сообщение об ошибке. Решите задачу через switch-case.

/*
let num = 3;
switch (num) {
    case 1:
        alert('zima');
        break;
    case 2:
        alert('vesna');
        break;
    case 3:
        alert('leto');
        break;
    case 4:
        alert('osen');
        break;
    default:
        alert('bolshe 4');
        break;
}*/

// Тернарный оператор


//Пусть дана переменная num, которая может быть либо отрицательной, либо положительной. Запишите в переменную result число 1, если переменная num больше или равна нулю, и число -1, если переменная num меньше нуля.
/*
let num = 3;
let result = num >=0 ? 1 : -1;
console.log(result)
console.log(num >=0 ? 1 : -1)
*/

//Логические операции в JavaScript
/*
let a = 1;
let b = 2;

console.log(a == b);
*/
/*
let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b);
*/

/*
let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a > b);
*/

//Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет.
/*
let a = 2 ** 4;
let b = 4 ** 2;
console.log(a != b);
*/

//Функция confirm


//Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен
/*
let ok = confirm('18 есть?');
if (ok) {
    alert('dlya vzroslih')
} else {
    alert('kids')
}*/

/*
let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}*/
/*
let num = 123;

if (Number(String(num)[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}
*/

/*
let num = 12;

if ((String(num).length) === 2) {
	console.log('+++');
} else {
	console.log('---');
}
*/
/*
let num = 12;

if (String(num).length == String(2)) {
	console.log('+++');
} else {
	console.log('---');
}
*/
/*
let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}
*/
/*
let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам 

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}*/



/// Циклы while
/*
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}*/
/*
let i = 1;

while (i <= 100) {
	console.log(i);
	i += 2; }*/
/*
let i = 30;

while (i >= 0) {
    console.log(i);
    i--;
}*/

/*
let i = 10;

while (i >= 1) {
	console.log(i);
    i--;

}*/

/*
let i = 10;

while (i >= 1) {
	console.log(i);
	i--;
}*/
/*
let i = 10;

while (i >= 0) {
	console.log(i);
	i--;
}
*/
/*
let i = 10;

while (i >= 0) {
	console.log(i);
	i--;
}
*/

/*
let i = 10;

while (i >= 1) {
	console.log(i);
	i--;
}
*/


// Цикл ФОР

//С помощью цикла for выведите в консоль числа от 1 до 100.
/*
for ( let i = 1 ; i<=100; i++) {
    console.log(i);
    console.log('+');
}
*/

//С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
/*
for ( let  i = 0 ; i<=100; i+=2) {
    console.log(i);
}*/
//С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
/*
for ( let  i = 1 ; i<=100; i+=2) {
    console.log(i);
}*/
//С помощью цикла for выведите в консоль числа от 100 до 0.
/*
for ( let  i = 100 ; i>=1; i--) {
    console.log(i);
}*/



// 66 Накопление результата в цикле JavaScript
//_____________________

/*
let result = 0;
for ( let i = 1; i <= 100; i++) {
    result = result + i;
}
console.log(result);
*/

//Найдите произведение целых чисел от 1 до 20.

/*
let result = 0;
for( let i = 1; i<=20; i++) {
    result =  result + i;
}
console.log(result);
*/

//Найдите сумму четных чисел от 2 до 100.

/*
let result1 = 0;
for( let i = 0; i<=100; i += 2) {
    result1 =  result1 + i;
}
console.log(result1);
*/

//Найдите сумму нечетных чисел от 1 до 99.

/*
let result2 = 0;
for( let i = 1; i<=99; i += 2) {
    result2 =  result2 + i;
}
console.log(result2);
*/

// 67 Цикл for для массивов в JavaScript
//_____________________

/*
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}
*/

//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.
/*
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 !== 0) {
        console.log(arr[i]);
    }
}*/

//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.
/*
let result = 1;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	result *= arr[i];
}
console.log(result);*/

//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива.
/*
let result = 1;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	result += arr[i]**2;
}
console.log(result);*/

//Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
/*
let arr = [2, 5, 9, 15, 1, 4];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
        console.log(arr[i]);
    }
}
*/

//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
/*
let arr = [2, -5, 9, -15, 1, -4];
let result = 0;
let result1 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i]
    } else {
        result1 += arr[i]
    }
}
console.log('Сумма положительных = ' + result);
console.log('Сумма отрицательных = ' + result1);*/

//Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.
/*
let arr = [1, 2, 3, 4, 5];
let result = 0;

for (let i = 0; i < arr.length; i++) {
        result += arr[i]
}
console.log(result/arr.length);*/

//Дан массив числами, например:Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
/*
let arr = [10, 20, 30, 50, 235, 3000, 110];
for (let i = 0; i < arr.length; i++) {
    let num = String(arr[i]);
    if (num[0] == 1 || num[0] == 2 || num[0] == 5) {
        console.log(arr[i]);
    } 
}
*/

//Дан массив с числами. Выведите элементы этого массива в обратном порядке.
/*
let arr = [10, 20, 30, 50, 235, 3000, 110];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}*/

//Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
/*
let arr = [0, 20, 2, 50, 4, 3000, 6];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i ) {
        console.log(arr[i]);
    } 
}*/

//Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
/*
let arr = [0, 20, 2, 50, 4, 3000, 6];
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
    document.write('<br>');
}*/

//Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
/*
let arr = [0, 20, 2, 50, 4, 3000, 6];
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
    document.write('<p>');
}*/

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
/*
let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
    document.write('<br>');
    if(i == arr.length - 3) {
        document.write('<b>');
    }
}*/

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
/*
let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let day = 'ср'
for (let i = 0; i < arr.length; i++) {
    if(arr[i] == day) {
        document.write(arr[i]);
    }
}*/

//68----------------------

/*
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}
*/

//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.
/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr) {
	sum += elem;
}
console.log(sum);
*/
/*
let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for (let elem of arr) {
	console.log(elem);
}*/

//Пусть у вас есть массив с названиями месяцев. Пусть в переменной month хранится номер текущего месяца, например, 10. С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.
/*
let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let month = 5;
for (let i = 0; i < arr.length; i++) {
    if(i == month - 1) {
        document.write('<i>');
        document.write(arr[i]);
        document.write('</i>');
    } else {
        document.write(arr[i]);
    }
    document.write('<br>');
}*/

//69 Перебор объекта циклом for-in в JavaScript
//Дан объект следующий объект:С помощью цикла for-in найдите сумму элементов этого объекта.
/*
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let sum = 0;
for (let key in obj) {
	sum +=obj[key] ; // выведет 1, 2, 3
}
console.log(sum);*/

//71

for (let i = 0, j = 0; i <= 9; i++, j += 2) {
	console.log(i, j);
}




