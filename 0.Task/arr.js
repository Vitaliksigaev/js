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
/*
for (let i = 0, j = 0; i <= 9; i++, j += 2) {
	console.log(i, j);
}
*/
//Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

/*
let arr = [ 20, 2, 50, 4, 0, 3000, 6];
for (let elem of arr) {
	if (elem == 0) {
		break; // выйдем из цикла
	}
    console.log(elem);
}
*/

//Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
/*
let arr = [ 20, 2, 50, -4, 0, 3000, 6];
let sum = 0;
for (let elem of arr) {
	if (elem < 0) {
		break; // выйдем из цикла
	}
    sum += elem;
}
console.log(sum);*/

//Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
/*
let arr = [ 20, 2, 50, 3, 0, 3000, 6];
let i = 1;
for (let elem of arr) {
	if (elem == 3) {
        console.log(i);
		break; 
	}
    i += 1 ;
}*/


//Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
/*
let sum = 0;
for (let i = 1, j = 1; ; i++, j ++) {
    if (sum >= 100) {
		break; 
	}
    sum += i;
    console.log(sum , 'Чисел сложено ' + j);
}*/


// 75 Работа с флагами в JavaScript

//Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('да');
} else {
	console.log('нет');
}*/


// задачка для себя. Посчитать сколько 'c' есть в массиве. 5
/*
let arr = ['a', 'b', 'c', 'd', 'e', 'c', 'd', 'e', 'c', 'd', 'e', 'c', 'c'];
let sum = 0 ;

for (let elem of arr) {
	if (elem == 'c') {
        sum += 1;
	}
}
	console.log(sum);
*/

//Давайте напишем код, который будет проверять число на то, простое оно или нет. Простое число - это число, которое не делится ни на одно другое число (кроме как на 1 и на само себя - на это делятся все числа).
/*
let num = 31;
let flag = true; 

for (let i = 2; i < num; i++) {
    console.log(num % i , i);
    if( num % i == 0 ) {
        flag = false; 
        break;
    }
}
console.log(flag);
*/
/*
let num = 500;

while (num > 10) {
	num = num / 2;
}
console.log(num);
*/
//Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
/*
let num = 1;
let num1 = 0;
while (num < 1000) {
	num = num*3;
    num1 +=1;
    console.log(num, 'итерация ' + num1);
}*/
/*
for (var num = 1, num1 = 0; num < 1000; num = num*3, num1 +=1); 
    console.log(num, 'итерация ' + num1);*/

//78 Формирование строк через циклы в JavaScript

//С помощью цикла сформируйте строку, заполненную 5-тью нулями.
/*
    let str = '';
    for (let i = 0; i < 5; i++) {
        str = str + '0';
    }
    
    console.log(str);*/
    
//С помощью цикла сформируйте строку '123456789' и запишите ее в переменную str. Выведите значение этой переменной на экран.
/*
let str = '';
for (let i = 1; i <= 9; i++) {
	str = str + i;
}
console.log(str);
*/

//С помощью цикла сформируйте строку '987654321' и запишите ее в переменную str. Выведите значение этой переменной на экран
/*
let str = '';
for (let i = 9; i > 0; i--) {
	str = str + i;
}
console.log(str);*/

//С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str. Выведите значение этой переменной на экран.
/*
let str = '-';
for (let i = 1; i < 10; i++) {
	str = str + i + '-';
}
console.log(str);*/

//Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
/*
for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	
	if (Number(str[0]) + Number(str[1]) == 5 ) {
		console.log(i);
	}
}
*/
/*
let result = '';
for (let i = 1; i <= 30; i++) {
	result += i;
}
console.log(result);
*/
//С помощью двух вложенных циклов выведите на экран следующую строку: 111222333444555666777888999
/*
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}*/

//С помощью двух вложенных циклов выведите на экран следующую строку: 
//11 12 13 21 22 23 31 32 33
/*
for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i + '' + j + ' ');
	}
}*/
//С помощью цикла заполните массив числами от 1 до 100.

/*
let arr = [];

for (let i = 0; i <= 100; i++) {
    arr[i] = i + 1;
}
console.log(arr);*/
/*
let arr = [];

for (let i = 2, j = 0; i <= 100; i += 2, j++) {
	arr[j] = i;
}

console.log(arr);*/

//С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.
/*
let arr = [];
for (let i = 1, j = 0; i<=99; j++, i+=2) {
    arr[j] = i;
}
console.log(arr);*/

//83


//Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
/*
let arr = [];
for ( let i = 0; i < 10; i++) {
    arr[i] = (i+2)**2;
}
console.log(arr);*/

//Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
/*
let arr = [1, 2, 3, 4, 5];
for(let i = 0;i < arr.length; i++) {
    arr[i] -= 1;
}
console.log(arr);
*/

//Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
/*

let arr = [1, 2, 3, 4, 5];
for(let i = 0;i < arr.length; i++) {
    arr[i] += 10;
}
console.log(arr);*/


//84

//Объявите пустой массив, а затем заполните его числами от 1 до 10. Используйте для этого метод push.
/*
let arr = [];
for (let i=1;i<=10;i++) {
    arr.push(i);
}
console.log(arr);
*/

//Используя цикл и метод push заполните массив 10-ю буквами 'x'.
/*
let arr = [];
for (let i=1;i<=10;i++) {
    arr.push('x');
}
console.log(arr);*/

//Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел
/*
let arr = [1, 2, -3, 4, 5, -2, 3, 4, -5, 2, 3, -4, -5];
let result = [];

for (let elem of arr) {
	if (elem > 0) {
		result.push(elem);
	}
}
console.log(result);
*/
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
let result = [];

for (let i = arr.length - 1; i >= 0; i--) {
	result.push(arr[i]);
}

console.log(result);*/

/*
let arr = [];

arr.push('a');
arr.push('b');
arr.push('c');
console.log(arr);*/

/*
let arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);
*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];

for (let elem of arr) {
	if (elem % 2 != 0) {
		result.push(elem);
	}
}

console.log(result);*/

//Объявите пустой объект, а затем заполните его названиями дней недели в качестве ключей, и порядковыми номерами дней недели в качестве значений.
/*
let obj = {};

obj['пн'] = 1;
obj['вт'] = 2;
obj['ср'] = 3;
obj['чт'] = 4;
obj['пт'] = 5;
obj['сб'] = 6;
obj['вс'] = 7;

console.log(obj);*/

//Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:

/*
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i=0; i<=6; i++) {
    obj[arr1[i]] = arr2[i];
    console.log(obj);
}
console.log(obj);*/

//Модифицируйте предыдущую задачу так, чтобы ключами стали номера дней, а значениями - их названия.
/*
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i=0; i<=6; i++) {
    obj[arr2[i]] = arr1[i];
    console.log(obj);
}
console.log(obj);*/

//Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.
/*
let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let obj2 = {};
for (let key in obj) {
    if(obj[key] > 10 && obj[key] < 20) {
        obj2[key] = obj[key];
    }
}
console.log(obj2);*/


//Запишите в новый объект дни недели, номера которых являются нечетными числами.
/*
let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let obj2 = {};
for (let key in obj) {
    if(key % 2 == 0) {
        obj2[key] = obj[key];
    }
}
console.log(obj2);
*/


//Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
/*
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
for (let key in obj) {
	obj[key] = obj[key] ** 2;
}
console.log(obj); */

//Самостоятельно, не подсматривая в мой код, выполните переворот какого-нибудь объекта.

/*
let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let obj2 = {};
console.log(obj);

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
    obj2[obj[key]] = key;


}
console.log(obj2);*/

//Практика на циклы с массивами и объектами JavaScript
//https://code.mu/ru/javascript/book/prime/loops/filling-changing-training/
/*
//Увеличьте зарплату каждого работника на 10%.

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
    obj[key] = Math.round(obj[key]*1.1);
    console.log(obj[key])
}
*/

//Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
/*
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
    if(obj[key]<=400) {
        obj[key] = Math.round(obj[key]*1.1);
    }
    console.log(obj[key])
}*/

//С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
/*
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i]; 
}
console.log(obj);*/

//Найдите сумму ключей этого объекта и поделите ее на сумму значений.
/*
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum = 0;
let sum1 = 0;
for( let key in obj) {
    sum += Number(key);
    sum1 += Number(obj[key]);
}
console.log(sum/sum1);
*/

//Запишите ключи этого объекта в один массив, а значения - в другой.
/*
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
let arr1 = [];
let arr2 = [];

for(let key in obj) {
        arr1.push(key);
        arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);*/

//Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:
/*
let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = [];

for(let key in obj) {
    let num1 = Number(String(obj[key])[0]);
    if (num1 == 1 || num1 == 2  ) {
        arr.push(obj[key]);
    }

}
console.log(arr);
*/

//---
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i<arr.length; i++) {
    obj[ i + 1 ] = arr[i];
}
console.log(obj);
*/

//87 Подсчет количества элементов в массиве JavaScript

//Подсчитайте количество цифр 3 в этом массиве.

/*
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter2 = 0;
let counter3 = 0;
for (let elem of arr) {
	if (elem == 3 || elem == 2 ) {
        if (elem == 3) {
            counter3++;  
        } else {
            counter2++;
        }

	}
}
console.log('2 = ' + counter2);
console.log('3 = ' + counter3);*/
//Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.
/*
let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {a: 0, b: 0, c: 0};

for (let elem of arr) {
    count[elem] = count [elem] + 1;

}

console.log(count); 
*/
//Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.
/*
let word = 'sdfasdf dsfadsfa sfasdfa';
console.log(word.length);

let count = {a: 0, b: 0, c: 0};


for (let elem of word) {
    count[elem] = 0;
}
for (let elem of word) {
    count[elem]++;
}

console.log(count); 

*/

//88 Получение соседей элементов в массиве JavaScript


//Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.
/*
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length-1; i++) {
	console.log(arr[i + 1]);
}*/

//Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.
/*
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length-1; i++) {
	console.log(arr[i + 1] + arr[i]);
}*/


//Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.
/*
let arr = [1, 2, 3, 4, 5];

for (let i = 2; i < arr.length ; i++) {
	console.log(arr[i - 1] + ' ' + arr[i - 2]);
}*/

//Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.
/*
let arr = [1, 2, 3, 4, 5];

for (let i = 2; i < arr.length ; i++) {
	console.log(arr[i - 1] + arr[i - 2] + arr[i]);
}*/

//Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.
/*
let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length -1 ; i++) {
	console.log(arr[i - 1] + arr[i + 1] + arr[i]);
}*/


//                      89 Получение чисел Фибоначчи в JavaScript

/*
let one = 0;
let two = 1;

for (let i = 1; i <= 10; i++) {
	let current = one + two; // суммируем первые числа и записываем в объявленную переменную
	
	one = two; // перезаписываем первое число меняя местами второе на первое
	two = current; // перезаписываем - обновляем второе число чтобы в следуюшей итерации уже сложить обновленное значение один и два
	
	console.log(current); // выводим сумму данной итерации
}*/


//Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.
/*
let one = 0;
let two = 1;
let tri = 2;

for (let i = 1; i <= 10; i++) {
	let current = one + two + tri; 
	
	one = two; 
	two = tri; 
    tri = current;

	console.log(current); // выводим сумму данной итерации
}*/

// 90 Вывод пирамидок на JavaScript

/*
let str = '';

for (let i = 0; i < 5; i++) {
	str += 'xx';
	document.write(str + '<br>');
}
*/

/*
let str = ''; 
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
	    str += i;
    }
    document.write(str + '<br>');
}*/

//Выведите на экран следующую пирамидку:
/*
for (let i = 1; i <= 9; i+=2) {
    let str = ''; 
    for (let j = 1; j <= i; j++) {
	    str += i;
    }
    document.write(str + '<br>');
}
*/
/*
for (let i = 5; i >= 1; i--) {
	let str = '';
	
	for (let j = 0; j < i; j++) {
		str += 'xx';
	}
	
	document.write(str + '<br>');
}
*/
/*
for (let i = 9; i >= 1; i--) {
	let str = '';
	
	for (let j = 0; j < i; j++) {
		str += i;
	}
	
	document.write(str + '<br>');
}
*/

// 91     
//С помощью цикла сформируйте следующий массив:

/*
let arr = [];
let str = '';

for (let i = 0; i < 5; i++) {
	str += 'xx';
	arr.push(str);
}

console.log(arr);
*/
/*
let arr = [];
for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 0; j < 5; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);*/


//    92 

//Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
/*
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let elem of arr) {
	console.log(elem);
}

for (let elem of arr) {
	let str = String(elem);
    console.log(str);
}

for (let elem of arr) {
    console.log(String(elem)[0]);
}

for (let elem of arr) {
    if (String(elem)[0] == 1 ) {
        console.log(elem);
    }
    if (String(elem)[0] == 2 ) {
        console.log(elem);
    }

}
for (let elem of arr) {
    if (String(elem)[0] == 1 || String(elem)[0] == 2  ) {
       sum += elem;
    }
}

console.log(sum);*/


//93
//Исправьте ошибки, допущенные в следующем коде:
/*
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
	if (elem[0] === '1' && elem[0] === '2') {
		sum += +elem;
	}
}

console.log(sum);*/

// ИСПРАВЛЯЮ

/*
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
    console.log(elem);
    console.log(obj[elem]);
    console.log(String(obj[elem]));
    console.log(String(obj[elem])[0]);
    let num0 = String(obj[elem])[0];
    if (num0 == '1'  || num0 == '2') {
		sum += +obj[elem];
	}
}
console.log(sum);*/


//94  Поиск ошибок в коде с циклами JavaScript

/*
for (let i = 0; i <= 10; i++) {
	console.log(i);
}
*/
/*

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

*/
/*
for (let i = 10; i>= 0; i--) {
	console.log(i);
}*/
/*
let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}*/

/*
let res = 0;
for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res);
*/
/*
let res = 1;

for (let i = 1; i <= 10; i++) {
	res *= i;
}

console.log(res);
*/
/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += Number(elem);
}

console.log(sum);*/
/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum);*/
/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum);*/

/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
	sum += +arr[i];
}

console.log(sum);*/

/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
	sum += +arr[i];
}

console.log(sum);*/

/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum);*/
/*
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] ** 2;
}
console.log(arr);*/


/*
let arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr);*/
/*
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
	sum += +obj[elem];
}

console.log(sum);*/

/*
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum += +obj[key];
}

console.log(sum);*/

/*
let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
        break;
	} else {
		res = '---';
	}
}

console.log(res);
*/

/*
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		res = true;
		break;
	}
}

console.log(res);*/
/*

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}
*/

//Отработка циклов JavaScript

//Выведите с помощью цикла столбец чисел от 1 до 100.
/*
for (let i = 1 ; i < 100; i++) {
    console.log(i);
}*/

//Выведите с помощью цикла столбец чисел от 100 до 1.
/*
for (let i = 100 ; i > 0; i--) {
    console.log(i);
}*/
//Выведите с помощью цикла столбец четных чисел от 1 до 100.
/*
for (let i = 0 ; i < 100; i+=2) {
    console.log(i);
}*/

//Заполните массив 10-ю иксами с помощью цикла.
/*
let arr = [];
for (let i = 0 ; i < 10; i++) {
    arr.push('x');
}
console.log(arr);
*/

//Заполните массив числами от 1 до 10 с помощью цикла.
/*
let arr = [];
for (let i = 1 ; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);
*/


//Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
/*
let arr = [ 1, 5 , 20 ,15 , -15];
for (let i = 0 ; i <= arr.length; i++) {
    if( arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}
*/

//Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
/*
let arr = [ 1, 5 , 20 ,15 , -15];
for (let i = 0 ; i <= arr.length; i++) {
    if( arr[i] == 5) {
        console.log(arr[i]);
    }
}
*/

//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
/*
let arr = [ 1, 5 , 20 ,15 ];
let sum = 0;
for (let i = 0 ; i <= arr.length - 1; i++) {
    console.log(arr[i]);
    sum = sum + arr[i];
}
console.log(sum);
*/

//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
/*
let arr = [ 1, 5 , 20 ,15 ];
let sum = 0;
for (let i = 0 ; i <= arr.length - 1; i++) {
    console.log(arr[i]);
    sum = sum + arr[i];
}
console.log(sum);

*/

//Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
/*
let arr = [ 1, 5 , 20 ,15 ];
let sum = 0;
for (let i = 0 ; i <= arr.length - 1; i++) {
    console.log(arr[i]);
    sum = sum + arr[i];
}
console.log(sum / arr.length );
*/

//Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

/*
let num = 4;
let sum = 1;
for (let i = num ; i > 0; i--) {
    sum = sum*i;
}
console.log(sum);
*/

//96 Многомерные массивы в JavaScript


//Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
/*
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2])
console.log(arr[1][1])
console.log(arr[2][0])
console.log(arr[0][0])
*/

//Обращаясь к каждому элементу массива найдите сумму всех его элементов.
/*
let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for (let i = 0 ; i <arr.length; i++) {
    console.log(arr[i])
    for (let j = 0 ; j <arr[i].length; j++) {
        console.log(arr[i][j]);
        sum = sum + arr[i][j];
    }
}
console.log(sum);
*/

//Обращаясь к каждому элементу массива найдите сумму всех его элементов.
/*
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

let sum = 0;
for (let i = 0 ; i <arr.length; i++) {
    for (let j = 0 ; j <arr[i].length; j++) {
        for (let k = 0 ; k <arr[i][j].length; k++) {
            sum = sum + arr[i][j][k];
        }
    }
}
console.log(sum);
*/
// 97 Перебор многомерных массивов в JavaScript


/*
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 
	10]]; 

for (let subArr of arr) {
	for (let elem of subArr) {
		console.log(elem);
	}
}
*/

//С помощью вложенных циклов найдите сумму элементов этого массива.
/*
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for ( let subArr of arr) {
    for ( let elem of subArr) {
        sum += elem;
        }
}
console.log(sum)
*/

//С помощью вложенных циклов найдите сумму элементов этого массива.
/*
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum = 0;
for ( let subArr of arr) {
    for ( let elem of subArr) {
        for (let elem1 of elem) {
            sum += elem1;
        }
    }
}
console.log(sum)
*/

//Решите предыдущие две задачи через цикл for.


/*
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {

        sum += arr[i][j];
        }
}
console.log(sum)

*/
/*
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
                sum += arr[i][j][k];
        }
    }
}
console.log(sum)*/

//Сформируйте с помощью двух вложенных циклов следующий массив:


/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 5; j++) {
		arr[i].push(j + 1);
	}
}

console.log(arr);
*/


//Сформируйте с помощью двух вложенных циклов следующий массив:
/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 5; j++) {
		arr[i].push('x');
	}
}

console.log(arr);
*/


//Сформируйте с помощью трех вложенных циклов следующий массив:
/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];

	for (let j = 0; j < 2; j++) {
		arr[i][j] = [];
        for (let k = 1; k < 6; k++) {
            arr[i][j].push(k);
        }
	}
}
console.log(arr);
*/
/*
let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
*/
/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
*/
/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
*/
/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
*/
/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j + 1;
	}
}

console.log(arr);
*/
/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
*/
/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
*/
/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j;
	}
}

console.log(arr);
*/

/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);*/

/*
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
*/
/*
let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j;
	}
}

console.log(arr);*/

//Сформируйте с помощью двух вложенных циклов следующий массив:

//[[1, 2], [3, 4], [5, 6], [7, 8]]

/*
let arr = [];

for (let i = 0, k = 1; i < 4; 
	i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 2; j++) {
		arr[i][j] = k++;
	}
}

console.log(arr);
*/
//Сформируйте с помощью двух вложенных циклов следующий массив:
//[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]] 
/*
let arr = [] ;
for ( let i = 0, k = 0; i< 4; i++) {
    arr[i] = [];
    for(let j = 0; j<3; j++ ){
        arr[i][j] = k+=2;
    }
}
console.log(arr);*/


//Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
//[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
/*
let arr = [];
for (let i = 0, z=1; i< 2; i++) {
    arr[i] = [];
    for(let j = 0; j<2; j++) {
        arr[i][j] = [];
        for(let k = 0; k< 2; k ++) {
            arr[i][j][k] = z ++;
        }
    }
}
console.log(arr);*/

// Ошибки автора 
/*
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);*/
/*
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr);
*/

/*
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);*/
/*
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);*/
/*
let arr = [];

for (let i = 0, k = 1; i < 3; 
	i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr);*/

/*
let arr = [];

for (let i = 0, k = 1; i < 3; 
	i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++
	}
}

console.log(arr);*/

/*
let arr = [];

for (let i = 0, k = 1; i < 3; 
	i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr);*/
/*

let arr = [];

for (let i = 0, k = 1; i < 3; 
	i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k++;
	}
}

console.log(arr);*/
/*
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);*/
/*
let arr = [];

for (let i = 0, k = 1; i < 3; 
	i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++;
	}
}

console.log(arr);*/


// 99  Многомерные объекты в JavaScript

//Найдите сумму элементов приведенного объекта.

/*
let sum  = 0 ;
let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}

for (let i = 1; i<= 3; i++) {
    for (let j = 1; j<= 3; j++) {
        sum = sum + obj['key' + i]['key' + j]
    }
}

console.log(sum);
*/

//Выведите на экран элемент 'b2' и элемент 'c1'.


/*
let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj[2][2]);
console.log(obj[3][1]);
*/


//Найдите сумму всех элементов-чисел.
/*
let sum = 0;

let obj = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}
console.log(obj['key1']['a'] + obj['key1']['b'] + obj['key1']['f'] + obj['key1']['c']['d'] + obj['key1']['c']['e'] + obj['key2']['g']+ obj['key2']['h'])

*/

//Используя циклы, найдите сумму элементов этого объекта.


/*
let sum = 0;
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
for (let key in obj) {
	let subObj = obj[key];
	for (let subKey in subObj) {
		sum = sum + subObj[subKey];
	}
}
console.log(sum);*/

/*
let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};

let lang = 'ru';
let month = 5; 
console.log(months[lang][month]);
*/

//Пусть даны также 3 переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.
/*
let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
let year = '2019';
let num1 = 12;
let num2 = 30;
let num322 = 1 ;

console.log(affairs[year][num1][num2][num322])*/

//Автор следующего кода хотел вывести элемент со значением '24':
/*
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);*/

/*

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);*/
/*
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);
*/

/*
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key4 = 'key4';
console.log(obj[key1][key4]);*/

//102 https://code.mu/ru/javascript/book/prime/multidimensionality/multi-structures/

//Выведите на экран сумму зарплат первого и второго работников.

/*
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
console.log(employees[0]['salary'] + employees[1]['salary']);*/''

/*
let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
console.log(students['boys'][1])
console.log(students['girls'][2])
*/
/*
let users = [
	{
		name: 'name1',
		age: 31,
	},
	{
		name: 'name2',
		age: 32,
	},
	{
		name: 'name3',
		age: 33,
	},
];

for (let user of users) {
	document.write(user.name + ' ' + user.age + '<br>');
}*/

//Выведите на экран данные каждого работника в формате имя - зарплата.

/*
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for(let emp of employees) {
    document.write(emp.name +' ' + emp.salary + '<br>')
}*/

/*
let sum= 0;
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];


for(let emp of employees) {
    sum += emp.salary;
}
console.log(sum)*/

//Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
/*
let sum= 0;
let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

for(let emp of employees) {
    if(emp.age>=30){
        sum += emp.salary;
    }

}
console.log(sum)*/

/*
let employees = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];

for(let emp of employees) {
    if(emp.dismissed == true ) {
        document.write(emp.name + ' - ' + emp.salary + '<br>')
    }
}*/

/*

let students = {
	'group1': ['student11', 'student12', 'student13'],
	'group2': ['student21', 'student22', 'student23'],
	'group3': ['student31', 'student32'],
};

for (let group in students) {
	for (let name of students[group]) {
		console.log(name);
	}
}
*/

//С помощью вложенных циклов выведите на экран все строки с данными.

/*
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};

for (let name in data) {
    for(let dataN of data[name]) {
        console.log(dataN);
    }
}*/

/*
let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];

for (let name of data) {
    for(let dataN in name) {
        console.log(name[dataN]);
    }
}*/

//С помощью вложенных циклов выведите на экран все строки с данными.

/*
let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];

for (let name of data) {
    //console.log(name);
    for(let dataN in name) {
        //console.log(dataN);
        for(let dataNa in name[dataN] ) {
            console.log(name[dataN][dataNa])
        }
    }
}*/


//104  Математические методы
/*
console.log(Math.pow(2, 10));
console.log(Math.sqrt(245));*/

//Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
/*
let num = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let elem of num) {
    console.log(elem**3);
    sum += elem**3;
}
console.log((sum));
console.log(Math.sqrt(sum));*/


//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
/*
let num = 379;
let num1 = Math.sqrt(num);

console.log(Math.round(num1));
console.log(Math.round(Math.sqrt(num)));

console.log(num1.toFixed(1));
console.log((Math.sqrt(num)).toFixed(1));

console.log(num1.toFixed(2));*/

//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
/*
let num = 587;
let obj = {};

let num1 = Math.sqrt(num);
console.log(Math.ceil(num1));
console.log(Math.floor(num1));
obj['ceil'] = Math.ceil(num1);
obj['floor'] = Math.floor(num1);
console.log(obj);*/

//Нахождение максимального и минимального числа
/*
let arr = [4, -2, 5, 19, -130, 0, 10];
let max = Math.max.apply(null, arr);
console.log(max);
let min = Math.min.apply(null, arr);
console.log(min);

*/


//Работа с рандомом

//Выведите на экран случайное целое число от 1 до 100.
/*
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));*/


//С помощью цикла заполните массив 10-ю случайными целыми числами.
/*
let arr = [];
for ( let i = 0; i<=10; i++) {
    arr.push(Math.floor(Math.random()*100 ))
}
console.log(arr);*/

let a = -2;
let b = 5;
console.log(Math.abs(a - b));
