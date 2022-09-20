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

/*
let a = -2;
let b = 5;
console.log(Math.abs(a - b));*/

//105 Строковые методы JavaScript

//Дана строка 'js'. Сделайте из нее строку 'JS'.
/*
let str = 'js';
let str1 = str.toUpperCase()
console.log(str1);
console.log(str1.toLowerCase());
*/

//Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
/*
let str = 'я учу javascript!';
let sub = str.substr(2, 3);
console.log(sub);

let sub1 = str.substring(2, 5);
console.log(sub1);

let sub2 = str.slice(2, 5);

console.log(sub2);
*/

//Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
/*
let str = 'abcdea';
console.log(str.indexOf('c'));

if(str.indexOf('a') >= 0) {
	console.log(str.indexOf('a'));
}
*/
//Дана строка. Проверьте, начинается ли эта строка с символа 'a'.
/*
if(str.indexOf('a') == 0) {
	console.log(str.indexOf('a'));
}
*/

//Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.
/*
if(str.lastIndexOf('a') == str.length-1 ) {
	console.log('last a');
}
*/

//Дана строка. Проверьте, начинается ли эта строка на 'http://'
/*
let str = 'https://code.mu/ru/javascript/book/prime/inbuilt/string/';
console.log(str.indexOf('http://'));
*/

//Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
/*
let str = 'https://code.mu/ru/javascript/book/prime/inbuilt/string/.html';
console.log(str.lastIndexOf('.html'));
*/

//Дана строка. Проверьте, начинается ли эта строка на 'http://'.
/*
let str = 'https://code.mu/ru/javascript/book/prime/inbuilt/string/.html';

console.log(str.startsWith('http://')); 
console.log(str.startsWith('https://')); 
console.log(str.endsWith('.html'));
*/


//Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
/*
let str = '1-2-3-4-5';
let arr = str.split('-');
console.log(arr);

*/

//Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
/*
let str = '12345';
let arr = str.split('');
console.log(arr);
*/

//С помощью метода join слейте его в строку '1-2-3-4-5'.
/*
let arr = [1, 2, 3, 4, 5];
let str = arr.join('-');

console.log(str);

*/


// 106 
/*
let arr = [1, 2, 3];
arr.push(4);
arr.push(5);
arr.push(6);
console.log(arr);
arr.unshift(6);
arr.unshift(5);
arr.unshift(4);
console.log(arr);
*/

//Выведите на экран первый элемент этого массива.
/*
let arr = [1, 2, 3];
arr.pop();
arr.pop();
console.log(arr);
*/

//Выведите на экран последний элемент этого массива.

/*
let arr = [1, 2, 3];
arr.shift();
arr.shift();
console.log(arr);
*/


/*
let arr = [1, 2, 3, 4, 5];
let sub = arr.slice(3, 5);

console.log(sub);
*/

/*
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);
*/


//С помощью метода splice сделайте из него массив:[1, 2, 3, 'a', 'b', 'c', 4, 5]
/*
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);
*/

//[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
/*
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0,  'c');
arr.splice(8, 0,  'e');
console.log(arr);
*/

//

/*
let arr = [1, 2, 3, 4, 5];

console.log(arr.indexOf(3));*/
/*
let arr = [1, 2, 3, 4, 5];
let result = arr.includes(3);
console.log(result);*/


//Преобразуйте последнюю букву строки в верхний регистр.
/*
let str = 'london';
let result = str.slice(0,5) + str.slice(5, 6).toUpperCase() ;
console.log(result); 
*/
//Преобразуйте первые 2 буквы строки в верхний регистр.
/*
let str = 'london';
let result = str.slice(0,2).toUpperCase() + str.slice(2) ;
console.log(result); 

*/

//Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
/*
let str = 'London';
let result = str.slice(0, 1).toLowerCase() + str.slice(1);
console.log(result);
*/

/*
let str = 'word1 word2 word3';
let words = str.split(' ');
console.log(words);
for(let i = 0; i<words.length; i++) {
	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
}
let results = words.join(' ');
console.log(results);
*/

//Преобразуйте строку 'var_test_text' в 'VarTestText'.
/*
let str = 'var_test_text';
let words = str.split('_');
console.log(words);
for(let i = 0; i<words.length; i++) {
	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
}
let results = words.join('');
console.log(results);
*/

//Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре.
/*
let str = 'var_test_text';
let words = str.split('_');
console.log(words);
for(let i = 1; i<words.length; i++) {
	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
}
let results = words.join('');
console.log(results);*/

//Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.

/*
let str = '112233 445566 778899';
let result = str.split('').reverse().join('');
console.log(str.split(''));
console.log(str.split('').reverse());
console.log(result);*/


//108
/*
let num = 12345;
let arr = num.toString().split('');

let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum);*/

/*
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);*/
/*
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);*/
/*
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);*/

/*
let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
	prod *= digit;
}

console.log(prod);
*/

//109

/*
function myName(){
	alert('Sigaev Vitalik')
}
myName();*/

/*
function sum() {
	let sum = 0;
	for(let i = 1; i<=100;i++){
		sum += i;
	}
	alert(sum);
}
sum();*/

/*
function func(num) {
	alert(num * num * num);
}

func(562); 
func(2066);
*/

/*
function func(num) {
	if(num> 0) {
		alert("+");
	} else {
		alert("-");
	}

}

func(562); 
func(-2066);
*/

//Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
/*
function summ (n1, n2, n3) {
	console.log(n1 + n2 + n3);
}
summ(1, 2, 3);*/

//Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:
/*
let param1 = 1;
let param2 = 2;
let param3 = 3;

function func(a, b, c) {
	alert(a + c + b);
}

func(param1, param2, param3);
*/

/*
function func(num = 5) {
	alert(num * num);
}

func(2);
func(3);
func();
*/

/*
function func(num1 = 0, num2 = 0) {
	alert(num1 + num2);
}

func(2, 3);
func(3);
func();*/

// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
/*
function func (num) {
	return num*num*num;
}
let result = func(3);
console.log(result);
*/

//Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.
/*
function test(num) {
	return Math.sqrt(num);
}
let rez = test(3) + test(4);
console.log(rez);
*/

//С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
/*
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

console.log(round(sqrt(2)))*/

//С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.
/*
function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
console.log(sqrt(2));
console.log(sqrt(3));
console.log(sqrt(4));
console.log(sum(sqrt(2),sqrt(3),sqrt(4)));*/

//С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.

/*
function round(num) {
	return Number(num.toFixed(3));
}

console.log(round(5));

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
};

console.log()
console.log(round(sqrt(2)));
console.log(round(sqrt(3)));
console.log(round(sqrt(4)));
console.log(sum(round(sqrt(2)),round(sqrt(3)),round(sqrt(4))));
*/

/*
function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num * num;
}

alert( func(10) );
alert( func(-5) );

*/

/*
function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		return sum;
	}
}

alert(func(5));*/

/*
function func(arr) {
	let sum = 0;
	
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
			if (sum >= 10) {
			return i + 1; // выходим из цикла и из функции
		}
	}
}

let result = func([1, 2, 3, 4, 5]);
alert(result);*/


//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

/*
function func(num) {
	let i = 1;
	while (true) {
		num = num /2 ;
		console.log(num);
		if (num < 10) {
			return i; 
		}
		i++;
	}
}

alert( func(100) );*/


//Перепишите ее в сокращенной форме согласно изученной теории.
/*
function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return  num1 - num2;
	}
}

alert(func(3, 4));*/


//112

//Напишите функцию, которая будет находить сумму квадратов элементов массива.
/*
function sumArr (arr) {
	let sum = 0;
	for(let elem of arr) {
		sum += elem**2;
	}
	return sum;
}
let arr1 = [1, 1, 1, 1];
alert(sumArr(arr1));*/

//Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.
/*
function getDigitsSum(num) {
	let arr = String(num).split('');
	console.log(arr);
	let sum = 0;
	for(let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}

alert(getDigitsSum(155));*/


//Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить следующий массив:
/*
function getDivisors(num) {
	let arr = [];
	for( let i = 1; i<=num; i++) {
		if (num%i == 0 ) {
			arr.push(i);
		}
	}
	return arr;
}
console.log(getDivisors(24))*/


//Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.
/*
function reverseStr(str) {
	let str1 = str.split('').reverse().join('');
	return str1;
}
console.log(reverseStr('abcde'))
*/

//Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.
/*
let arr = [ 1 , 2 , 3, 2, 1]

function delElem (arr, num) {
	for(let i=0;i<arr.length; i++) {
		if(arr[i] == num) {
			arr.splice(i,1);
		}
	}
	console.log(arr);
}
delElem (arr, 3);
*/

//Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции: console.log(func(5)); // выведет [1, 2, 3, 4, 5]
/*
function func(n) {
	let arr = [];
	for(let i = 0; i<n; i++) {
		arr[i] = i+1;
	}
	return arr;
	
}
console.log(func(5));
*/

//Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. Пример работы такой функции: console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

/*
function func(n1, n2) {
	let arr = [];
	let n3 = n2 - n1;
	for(let i = 0; i <= n3; i++) {
		arr[i] = n1;
		n1 = n1 + 1;
	}
	return arr;
}
console.log(func(3, 7));
*/


//113

/*
function isPrime(num) {
	let flag = true;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			flag = false;
			break;
		}
	}
	
	return flag;
}

console.log( isPrime(10) );
console.log( isPrime(31) );*/


//Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
/*
let arr = [ 4 , 2 , 6, 2, 10]

function is2 (arr) {
	for (let elem of arr) {
		if(elem%2 !== 0) {
			console.log(false);
			return false;
		}
	}
	console.log(true);
	return true;

}
is2(arr);
*/

//Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
/*
function func(num) {
	let num1 = num.toString();
	console.log(num1);
	for (let elem of num1) {
		if(Number(elem)%2 !== 0){
			console.log(false);
			return false;
		}
	}
	console.log(true);
	return true;
}
func(232);*/


//Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

/*
let arr = [ 4 , 2 , 62, 2,2, 10]

function is10 (arr) {
	for (let i=0; i<arr.length; i++) {
		if(arr[i] == arr[i+1]) {
			console.log(true);
			return true;
		}
	}
	console.log(false);
	return false;

}
is10(arr);*/



//114 Логические операторы без if в функциях JavaScript

/*
function func(a, b) {
	return a==b;

	if (a == b) {
		return true;
	} else {
		return false;
	}
}
*/

/*
function func(a, b) {
	return a!=b;
	if (a != b) {
		return true;
	} else {
		return false;
	}
}
*/
/*
function func(a, b) {
	return (a+b)>= 10;
	if (a + b >= 10) {
		return true;
	} else {
		return false;
	}
}
func(5, 25)
*/
/*
function func(num) {
	return num >= 0;
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}
*/

//115
/*
function func1() {
	return(3);
}
function func2() {
	return(5);
}

console.log( func1() + func2() );*/
/*
function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;

	}
	return res;
}

alert(sum([1, 2, 3, 4, 5]));*/

/*
let arr = [1, 2, 3, 4, 5];
function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	alert(res);
}
func(arr)*/

/*
function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );*/

/*
let arr = [1, 2, 3, 4, 5];
alert(arr);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
		console.log(sum);
}

sum(arr)*/

/*
let arr = [1, 2, 3, 4, 5];
function sum(arr) {
	let sum = 0;
		for (let elem of arr) {
		sum += elem;
	}
	return sum;
}
let res = sum(arr);
alert(res);
*/

/*
function add(num) {
	if (num <= 9) {
		console.log('0' + num)
		return '0' + num;
	}
	console.log(num)
	return '0' + num;
}

add(15);*/

/*
let arr = [1, 2, 3, 4, 5];
function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}
let sum1 = sum(arr);
console.log(sum1);*/


/*
let num = 12345;

function getDigitsSum(num) {
	let arr = String(num).split('');
	console.log(arr)
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}
let res = getDigitsSum(num);
console.log(res);*/


//116

/*
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	console.log(num)
	return true;
}

function checkNum(num) {
	for (let j = 1; j<=100; j++) {
		isPrime(j);
	}
}
checkNum(); 

*/


/*
function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	if (sum == 13) {
		console.log(num);
	}
	return sum;
}

function yaerSum () {
	for (let j = 1; j<=2030; j++) {
		getDigitsSum(j);
	}
}

yaerSum ()
*/
/*
let nums = [123, 456, 789];
let result = [];
*/

/*
for (let num of nums) {
	result.push(String(num).split('').reverse().join(''));
}*/
/*
function reverseNum(num) {
	result.push(String(num).split('').reverse().join(''));
}
for (let num of nums) {
	reverseNum(num)
}

console.log(result);
*/

/*
function reverseNum (nums) {
	for (let num of nums) {
		result.push(String(num).split('').reverse().join(''));
	}
	console.log(result);
}*/







/*
let digits1 = String(num1).split('');
let digitsSum1 = 0;
for (let digit1 of digits1) {
	digitsSum1 += Number(digit1);
}

let digits2 = String(num1).split('');
let digitsSum2 = 0;
for (let digit2 of digits2) {
	digitsSum2 += Number(digit2);
}

if (digitsSum1 == digitsSum2) {
	alert('суммы цифр совпадают');
} else {
	alert('суммы цифр не совпадают');
}*/


/*
let num1 = 234;
let num2 = 531;
function numSum(num1) {
	let digits1 = String(num1).split('');
	let digitsSum1 = 0;
	for (let digit1 of digits1) {
		digitsSum1 += Number(digit1);
	}
}
function numCompare(num1,num2) {
	if (numSum(num1) == numSum(num2)) {
		alert('суммы цифр совпадают');
	} else {
		alert('суммы цифр не совпадают');
	}
}
numCompare(num1,num2)*/

/*

let nums = [12, 24, 35, 14];
let result = [];
function numNet() {
	for (let num of nums) {
		getDivisors(num)
	}
	console.log(result);
	arrCheck(result);

	return result;
}

function getDivisors(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
}

function arrCheck(arr) {
	let newArr = Array.from(new Set(arr));
	console.log(newArr);
}

numNet(nums);
*/

//117



/*
let num = 12345;

function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	console.log(sum)
	return sum;
}

function getDigits(num) {
	return String(num).split('');
}

getSum(getDigits(num));*/


/*
// Нахождение среднего арифметического:
function getAvg(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	let sum1 = sum / arr.length;
	console.log(sum);
	console.log(arr.length);
	return (sum1)
}

// Нахождение массива делителей числа:
function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	console.log(result);
	return result;
}

getDivisors(24);

console.log(getAvg(getDivisors(24)));*/

//117  ДАННОГО МОМЕНТА БЫЛ ГЛЮК ИЛИ ОБНОВЛЕНИЕ САЙТА И учебник одновился и потерялся актуальный номер страницы.



// на 162 странице нашел новые задачи. Начну с них. Легкие буду пропускать.
//https://code.mu/ru/javascript/book/prime/functions/sequential-calling/

/*
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
let res = round(sqrt(2))
console.log(res);*/
/*
let arr1 = [1,2]
let arr2 = [2,3]*/

/*
function func(arr1, arr2) {
	let res1 = 0;
	
	for (let elem of arr1) {
		res1 += elem;
	}
	
	let res2 = 0;
	
	for (let elem of arr2) {
		res2 += elem;
	}
	console.log(res1 / res2)
	return (res1 / res2);
}
func(arr1, arr2)*/
/*
function sumArr(arr){
	let res1 = 0;
	
	for (let elem of arr1) {
		res1 += elem;
	}
	return res1
}

function divisSumArr(arr1, arr2) {	
	console.log(sumArr(arr1) / sumArr(arr2))
}
divisSumArr(arr1, arr2) */

// На странице 171  появились интересные задачки - буду их пелить.

//Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
/*
let arr=[1,1,1,1];
function sumArr(arr) {
	let sum =0;
	for(let elem of arr){
		sum+=elem;
	}
	console.log(sum);
	return sum;
}
sumArr(arr);
*/


//Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
/*
function numDivi(num) {
	let arr=[];
	for(let i =2; i<num; i++){
		if(num%i == 0) {
			arr.push(i);
		}
	}
	console.log(arr)
}
numDivi(24);*/

//Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

/*
function strInArr(str) {
	let arr = str.split('')
	console.log(arr);
}

strInArr ('Mother')*/

//Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

/*
function strInArr(str) {
	let arr = str.split('').reverse().join('');

	console.log(arr);
}

strInArr ('Mother')*/

//Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

/*
function strInArr(str) {
	let arr = str.split('');
	arr[0] = arr[0].toUpperCase();

	console.log(arr.join(''));
}

strInArr ('mother')
*/

//Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки
/*
function strUpFirst(str) {
	let arr = str.split('');
	arr[0] = arr[0].toUpperCase();
	str = arr.join('')
	console.log(str = arr.join(''));
	return str
}

function str(str) {
	let arr = str.split(' ');
	let arr1 = [];
	console.log(arr);
	for (let elem of arr) {
		arr1.push(strUpFirst(elem));
	}
	console.log(arr1);
}

str ('mother mother')*/

//Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

/*
function num(num1) {
	let arr=[];
	for (let i=1; i<num1;i++) {
		arr.push(i);
	}
	console.log(arr)
}
num(100);*/


//Сделайте функцию, которая будет возвращать случайный элемент из массива.
/*
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function arrM(arr) {
	let randomN = Math.floor(Math.random()*arr.length);
	console.log(arr[randomN])
}
arrM(arr)
*/



//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

/*
function num1(num) {
	for(let i=2; i<num; i++) {
		if(num%i == 0) {
			console.log('Не простое число')
			return i;
		} else{
			console.log('Простое число')
			return i;
		}
	}
}
num1(11)*/


//Сделайте функцию, которая будет проверять пару чисел на дружественность. Дружественные числа - два числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, сумма всех собственных делителей второго числа равна первому числу.
/*
function numCheck(num, num1) {
	if(numDel(num) == num1 && numDel(num1) == num) {
		console.log( num + ' ' + num1);
	}

}

function numDel (num) {
	let sum = 0;
	for( let i = 1; i<num;i++) {
		if(num%i==0) {
			sum +=i;
		}
	}
	console.log(sum)
	return sum
}

numDel (220) 
numDel (284) 

numCheck(220, 284)*/

//Используя созданную вами функцию из предыдущей задачи найдите все пары дружественных чисел в промежутке от 1 до 1000.

/*
function numCheck(num, num1) {
	if(numDel(num) == num1 && numDel(num1) == num) {
		console.log( num + ' ' + num1);
	}

}

function numDel (num) {
	let sum = 0;
	for( let i = 1; i<num;i++) {
		if(num%i==0) {
			sum +=i;
		}
	}
	//console.log(sum)
	return sum
}
/*
numDel (220) 
numDel (284) 
numCheck(220, 284)
*/
/*
for(let i = 1; i<=1000;i++) {
	for ( let j=1;j<=1000;j++) {
		numCheck(i, j)
	}
}*/

//Сделайте функцию, которая будет проверять число на совершенность. Совершенное число - это число, сумма собственных делителей которого равна этому числу.

/*
function numCheck (num) {
	let sum = 0;
	for( let i = 1; i<num;i++) {
		if(num%i==0) {
			sum +=i;
		}
	}
	if (num == sum) {
	console.log('Совершенное число ' + num)
	}
}


numCheck (6)*/

//Найдите все счастливые билеты. Счастливый билет - это билет, в котором сумма первых трех цифр его номера равна сумме вторых трех цифр его номера.

/*
function checkLoto (num) {
	let arr = String(num).split('');
	let sum1 = Number(arr[0]) + Number(arr[1]) + Number(arr[2])
	let sum2 = Number(arr[3]) + Number(arr[4]) + Number(arr[5])
	console.log(sum1==sum2)
}
checkLoto (123321)*/

// Сделайте функцию, которая параметром будет принимать два числа и возвращать массив их общих делителей.
/*
function numCheck (num1, num2) {
	let arr = [];
	let num3= Math.max(num1, num2)
	for (let i = 2; i< num3;i++) {
		if(num3%i == 0) {
			arr.push(i);
		}
	}
	console.log(arr);
}
numCheck (24, 24) 
*/


//177
/* 
function func() {
	let num = 2;
}

let num = 1;
func();
console.log(num);*/

//178 https://code.mu/ru/javascript/book/prime/functions/parameters-objects/
// 180 https://code.mu/ru/javascript/book/prime/functions/function-as-variable/

/*
function func() {
	return 'string';
}
func = '1234';
alert(console.log(func))
*/
//console.log(func());

/*
function func1() {
	console.log(3)
	return (3);
}
func1();

let func2 = func1;
func2();

console.log(func1() + func2());
*/

//Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1. 

/*
let func1 = function () {
	return 1;
}

let func2 = function () {
	return 1;
}
let sum = func1() + func2();

alert(console.log(sum));

*/

//181


//Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.
/*
let func = function () {
	console.log(1)
}
func()
*/
//func()

/*
-1-
function func() {
	console.log('!');
}
func()*/
/*
func()
function func() {
	console.log('!');
} + console.log('!');
func()*/

//183 https://code.mu/ru/javascript/book/prime/functions/functions-array/
/*
let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

for (let func of arr) {
	func(); // вызываем наши функции в цикле
}*/

/*
let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];
console.log(arr[0]() + arr[1]() + arr[2]());

for(let ccc of arr){
	console.log(ccc());
}
*/
//184

/*
let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 13},
};
let sum = 0;
for (let key in obj){
	sum += obj[key]();
}
console.log(sum)*/

/*
let arr = [ 1,2,2,3,4,5,6]
let math = {
	square: function(arr) {
		let sum =0;
		for (let elem of arr) {
			sum += elem;
		}
		return sum
	},
	cube: function(arr) {
		let sum =0;
		for (let elem of arr) {
			sum += elem**2;
		}
		return sum
	},
	cubeX: function(arr) {
		let sum =0;
		for (let elem of arr) {
			sum += elem**3;
		}
		return sum
	}
};

console.log( math.square(arr) ); 
console.log( math.cube(arr) ); *
console.log( math.cubeX(arr) ); */

/*
test(
	function() {return 1;},
	function() {return 2;},
	function() {return 3;}
);

function test(func1, func2, func3) {
	console.log( func1() + func2() + func3());
}
*/
/*
function get1() {
	return 1;
}
function get2() {
	return 2;
}

test(get1, get2); // выведет 3

function test(func1, func2) {
	console.log( func1() + func2() );
}*/


/*
let  func1 = function () {
	return 1
}
function func2 () {
	return 1
}
function func3 () {
	return 1
}

function test(n1, n2, n3) {
	console.log(n1() + n2() + n3())
}
test(func1,func1,func1)*/

/*
function test(func, func1) {
	console.log(func(3) + func1(3));
}

let func =  function (num) {
	return num * num * num;
}
let func1 = func;
test(func, func1);*/

/*
function test(num, func1, func2) {
	console.log(func1(num) + func2(num))
	return func1(num) + func2(num);
}
function square(num) {
	return num = num**2;;
}
function cube(num) {
	return num = num**3;
}
test(3, square, cube);*/

/*
let arr = [1,2,3]

function test(arr, func) {
	for (let i=0; i<arr.length; i++) {
		arr[i] =  func(arr[i])
	}
	console.log(arr);
	return arr;
}

function func1 (num) {
	num = num**3;
	return num;
}
test (arr,func1)*/

//187
/*
function func (num1, num2) {
	function funcX2 (num) {
		return num**2;
	}
	function funcX3(num) {
		return num**3;
	}
	return funcX2(num1) + funcX3(num2);
}
console.log(func(5,5))*/
/*
function test(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
	num = 2;
}

test(1);
*/

//189 - Вложенные функции

/*
function finc1() {
	return function(){
		return 5
	}
}
function finc2() {
	return function(){
		return 5
	}
}

console.log(finc1()()+finc2()())*/

/*
function funki(){
	return function(){
		return function(){
			return function(){
				return function(){
					console.log(69)
				}
			}
		}
	}
}
funki()()()()()*/
/*
function funki(num1){
	console.log(num1)
	return function(num1){
		console.log(num1)
		return function(num1){
			console.log(num1)
			console.log(num1+num1+num1)
			
		}
	}
}
funki(2)(3)(4)*/

/*
function funki(num1){
	let arr= [];
	arr.push(num1)
	return function(num2){
		arr.push(num2)
		return function(num3){
			arr.push(num3)
			return function(num4){
				arr.push(num4)
				return function(num5){
					arr.push(num5)
					console.log(arr)

				}
			}
		}
	}
}
funki(2)(3)(4)(5)()
*/

//190
/*
function test() {
	let num = 1;
	
	return function() {
		return num;
	}
}

let num = 2;
let func = test();
console.log(func());*/


//191 Замыкания в JavaScript

//Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.
/*
function func1 () {

	let num = 3;
	return function(){
		if(num==0) {
			return console.log('finish')
		}
		console.log(num)
		num--;
	}
}
let fun2 = func1()
fun2()
fun2()
fun2()
fun2()
fun2()
fun2()
*/

/*
function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
};

let test = func;

test()();
test()();
test()();*/
/*
function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
};

let func = test();

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();
func2();*/


/*
function() {
	console.log('!');
}();
*/

/*
let str = (function() {
	return function() {
		return function() {
			console.log('!');
		};
	};})()()();*/

	/*
let str = (function(num1) {
	return function(num2) {
		return console.log(num1+num2);
		};
	})(1)(2);
	*/

	//193
/*

	let func = (function() {
		let num = 1;
		
		return function() {
			console.log(num);
			if(num>=5) {
				num = 0
			}
			num++;
		}
	})();
	
	func(); 
	func(); 
	func(); 
	func();
	func();
	func(); 
	func(); 
	func(); 
	func();
	func();*/
	//194

/*
	let arr = [ 1, 2,3,3,3,3,]
	function each(arr, callback) {
		let result = [];
		for (let elem of arr) {
			result.push(callback(elem)); 
		}
		return result;
	}
	let result = each(arr, function(num) {
		return num * 2;
	});
	
	console.log(result);*/

/*
let arr = [ '1-123456789','2-123456789','3-123456789','4-123456789', ]
function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push(callback(elem)); 
	}
	return result;
}
let result = each(arr, function(num) {
	return num.split('').reverse().join('');
});

console.log(result);
*/

//Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

/*
let arr = [ 'aaaaaaa','bbbbbbbb','ccccccc','ddddddddd', ]
function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push(callback(elem)); 
	}
	return result;
}
let result = each(arr, function(num) {
	return num.charAt(0).toUpperCase() + num.slice(1)
});

console.log(result);*/

/*
let arr = [1,5,25,225]

function arrChange (arr, callback) {
	let result=[];
	for( let elem of arr) {
		result.push(callback(elem))
	}
	return result
}

function cube(num) {
	return num ** 3;
}
let result = arrChange(arr,cube);
console.log(result)
*/

//195



/*
function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push(callback(elem)); 
	}
	return result;
}
let result = each([1, 2, 3, 4, 5], elem => elem > 0 ); 
console.log(result)*/

//Упростите коллбэк через стрелочную функцию.
/*
function every(arr, callback) {
	let result = [];
	for (let elem of arr) {
		let num1 = elem,index;
		console.log(num1)
		result.push(callback(elem, num1)); 
	}
	return result;
}
let index = 40;
let result = every([1, 2, 3, 4, 5], (elem, index) => (elem * index > 10));
	console.log(result)
	*/

//Упростите коллбэк через стрелочную функцию.

/*
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		for(let elem1 of elem) {
			let num1 = elem1,index;
			console.log(num1)
			result.push(callback(elem1, num1)); 
		}
	}
	return result;
}

let result = each(arr, (elem, index) => (elem * index > 10));
console.log(result)

*/

//196

/*
let arr = [1, 2, 3, 4, 5];
function arrPlus(arr){
	console.log(arr.shift());
	if (arr.length !=0) {
		arrPlus(arr)
	}
}
arrPlus(arr)*/

//let arr = [1, 2, 3, 4, 5];
/*
function sumCube (arr) {
	let sum = arr.shift()
	if(arr.length !==0) {
		sum+=sumCube(arr)
	}
	return sum
}*/

//С помощью рекурсии найдите сумму квадратов элементов этого массива.

/*
function sumCube(arr) {
	let sum = arr.shift()**2
	if(arr.length !== 0) {
		sum += sumCube(arr)
	}
	return sum
}
console.log(sumCube(arr))
*/

//197

/*
let obj1 = {
	a: 1, 
	b: {c: 2, d: 3, e: 4}, 
	f: {g: 5, j: 6, k: 
		{l: 7, m: 
			{n: 8, o: 9}
		}}}
console.log(typeof obj1)
function func(obj) {
	for (let key in obj) {
		//console.log(key)
		//console.log(obj[key])
		if (typeof obj[key] == 'object') {
		func(obj[key])
		} else {
			console.log(obj[key])
		}
	}
}

func(obj1);
*/

/*
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
let arr1=[]
function func(arr) {

	for (let elem of arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			//console.log(elem);
			arr1.push(elem)
		}
	}
	console.log(arr1)
}

func(arr); */
/*
function func(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		if (typeof elem == 'object') {
			sum += func(elem);
		} else {
			sum += elem;
		}
	}
	
	return sum;
}

console.log(func([1, [2, 7, 8], 
	[3, 4, [5, [6, 7]]]])); 
*/

//С помощью рекурсии найдите сумму элементов этого объекта.


/*

let obj1 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
function func(obj) {
	let sum = 0;
	for (let key in obj) {		
		if (typeof obj[key] == 'object') {
		sum += func(obj[key])
		} else {
			sum += obj[key]
		}
	}
	console.log(sum)
	return sum
}

func(obj1);
*/


//Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:С помощью рекурсии слейте элементы этого массива в одну строку:

/*
let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]] 
function func(arr) {
	let string1 = '';
	
	for (let elem of arr) {
		if (typeof elem == 'object') {
			string1 += func(elem);
		} else {
			string1 += elem;
		}
	}
	
	return string1;
}

console.log(func(arr)); 

*/

/*
let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function func(arr) {
	for (let i = 0; i < arr.length; i++) { 
		if (typeof arr[i] == 'object') {
			arr[i] = func(arr[i]);
		} else {
			arr[i] = arr[i]**2;
			console.log(arr[i])
		}
	}
	return arr;
}

console.log(func(arr)); 
*/

//198

//Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
/*
let arr = [1, 2, 3, 4, 5];
let result = arr.map(function(elem) {
	return Math.sqrt(elem);
});

console.log(result);
*/

//Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
/*
let arr = ['sfdfs','sfdfs', 'sfdfs', 'sfdfs', 'sfdfs'];
let result = arr.map(function(elem) {
	return elem+='!';
});

console.log(result);
*/

//Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
/*
let arr = ['1sfdfs','2sfdfs', '3sfdfs', '4sfdfs', '5sfdfs'];
let result = arr.map(function(elem) {
	return elem.split('').reverse().join('');
});

console.log(result);
*/

/*
let arr = ['123', '456', '789'];

let result = arr.map(function(elem) {
	return elem.split('')
});

console.log(result);
*/

//Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
/*
let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem, index) {
	return elem*index;
});

console.log(result);
*/
//199

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.forEach(function(elem, index) {
	document.write(index + '. ' + elem + '<br>');
});
*/

/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem,index) {
	sum += elem**2;
	document.write(index + '. ' + elem + '. ' + sum + '<br>');
});

console.log(sum);
*/

//200
//Дан массив с числами. Оставьте в нем только положительные числа.
/*
let arr = [1, -2, 3, -4, 5];
console.log( arr.filter(elem => elem > 0) );
*/
//Дан массив с числами. Оставьте в нем только отрицательные числа.
/*
let arr = [1, -2, 3, -4, 5];
console.log( arr.filter(elem => elem < 0) );
*/

//Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
/*
let arr = [1, -2, 30, -4, 5];
console.log( arr.filter(elem => elem > 0 && elem<10) );*/

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
/*
let arr = ['1234', '1234567', '1234', '1234567','1234', '1234567'];
console.log( arr.filter(elem => elem.length > 5) );
*/

//Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
/*
let arr = [1, 222, 15, 20, 50];
console.log( arr.filter((elem, index) => elem*index<30));
*/

//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

/*
let arr = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr.filter(function(elem){
	if(typeof elem == 'object') {
		return false
		
		console.log(elem)
		elem.filter(function(ele){
			console.log(ele)
			return true
		})
		
	} else {
		//console.log('____ '+ elem)
		return true;
	}
})
);
*/

//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
/*
let arr = [-1, -2, -3, -4, -5];
console.log( arr.filter(elem => elem < 0).length ); */


//201
//Метод every




/*
let result = arr.every(function(elem,index) {
	if (elem*index <30) {
		return true;
	} else {
		return false;
	}
});*/
/*
let arr = [2, 4, 6, 8];
let result = arr.every((elem,index) => elem*index <30);
console.log(result);*/

//let arr = [1,1, 5, 2];
/*
let result = arr.some(function(elem) {
	return elem > 0;
});
*/
/*
let result = arr.some(function(elem,index) {
	return elem*index < 30;
});

console.log(result);
*/

//203
/*
let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr))*/
/*
function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 
		+ n6 + n7 + n8); 
}

console.log( func(1, ...[2, 3, 
	4], 5, ...[6], ...[7, 8]) ); */
/*
let arr = [1, 2, 3, 4, 5]
let max = Math.min(...arr);
console.log(max)*/

//204
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr2);

// let arr1 = ['a', 'b', 'c'];
// let arr2 = [...arr1, ...'12345'];

// console.log(arr2);

//206


// function func(...nums) {
// 	let sum = 0;
	
// 	for (let num of nums) {
// 		sum += num;
// 	}
	
// 	return nums;
// }

// let result = func(1, 2, 3,4,5,6,7,8,9);
// console.log(result);

//https://code.mu/ru/javascript/book/prime/ellipsis/spread-rest-applying/  .concat(

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name,surname,department,position,salary] = arr;
// console.log(name)

//209

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000]; 
// }
// let [name,surname,department,position,salary] = func();
// console.log(surname)


//210

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [,,department, position,] = arr;
// console.log(position)
// console.log(department)


//212

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...info1] = arr;
// console.log(info1);

//213

// let arr = ['John', 'Smit', 'development', ];
// let [name,surname,department, info1= 'trainee'] = arr;
// console.log(info1)

// let arr = [2021,20];
// let date = new Date('December 25, 1995 23:15:30');

// function func() {
// 	return (new Date).getDate();
// }
// function func1() {
// 	return (new Date).getMonth();
// }
// function func2() {
// 	return (new Date).getFullYear();
// }

// let [year = func2(), month = func1(), day = func()] = arr;
// console.log(year)
// console.log(arr)

//216

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let {color, width, height} = options;
// console.log(color)
// console.log(width)
// console.log(height)


// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color: c,width: w,height: h  } = options;
// console.log(c)

// let options = {
// 	width:  400,
// 	height: 500,
// 	color: 'red',
// };

// let {color = 'black', width, height} = options;
// console.log(color)
// console.log(width)

// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color: c = 'black', width, height} = options;
// console.log(c)

//func( ['John', 'Smit', 'development', 'programmer', 2000] );
// function func([name, surname, department,position,salary ]) {
// 	console.log(name)
// 		console.log(surname)
// 			console.log(department)
// 				console.log(position)
// 					console.log(salary )
// }


// function func([name, surname,info]) {
// 	console.log(name)
// 	console.log(surname)
// 	console.log(info)
// }

// func( ['John', 'Smit', 'development']); 
// function func([name, surname,department, position='джуниор']) {
// 	console.log(name)
// 	console.log(surname)
// 	console.log(department)
// 	console.log(position)
// }


// function func(department, employee, hired) { 
// 	let name     = employee[0];
// 	let surname  = employee[1];
	
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }

// func( 'development', ['John', 'Smit'], [2018, 12, 31] ); 


// function func(department, [name, surname], [year, mouth, day]) { 
// 	console.log(name)
// 	console.log(surname)
// 	console.log(year)
// 	console.log(mouth)
// 	console.log(day)
	
// 	// let year  = hired[0];
// 	// let month = hired[1];
// 	// let day   = hired[2];
// }

// func( 'development', ['John', 'Smit'], [2018, 12, 31] ); 


// function func({color, width, height }) {
// 	console.log(color);
// 	console.log(width);
// 	console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} ); 


// function func({color='black', width, height }) {
// 	console.log(color);
// 	console.log(width);
// 	console.log(height);
// }

// func( { width: 400, height: 500} ); 


//222
// let date = new Date().getMonth();
// console.log(date)

// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

// let date = new Date();

// console.log(
// 	addZero(date.getHours()) + ':' + 
// 	addZero(date.getMinutes()) + ':' + 
// 	addZero(date.getSeconds()) + ' ' + 
// 	addZero(date.getDate()) + '.' +
// 	addZero(date.getMonth() + 1) + '.' +
// 	addZero(date.getFullYear())
// );


// let str = '2025-12-31';
// let res = str.split('-').reverse().join('/');

// console.log(res); 


// let date = new Date()

// function checkDay(num) {
// 	if (num>0&&num<6) {
// 		console.log(num + 'WORK BITCH!)')
// 	} else {
// 		console.log(num + 'RELAX BITCH!)')
// 	}
// }
// checkDay(date.getDay());

// function weekEnd(num) {
// 	let num1 = 6-num;
// 	console.log(num1+ ' days)')

// }
// weekEnd(date.getDay())

//Выведите с помощью этого массива название текущего месяца.


// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// let date = new Date();
// let mou  = date.getMonth();
// console.log(months[mou])

// let date = new Date(1989, 5, 24); 
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; 

// console.log(days[day]);

// let date = new Date();
// console.log(date.getTime());


// let now  = new Date();
// let date = new Date(2015, 11, 4, 23, 59, 59);

// let diff = now.getTime() - date.getTime();
// console.log(diff);
// console.log(diff / (1000 * 60 * 60));


// let date1  = new Date(1988, 2, 1, 23, 59, 59);
// let date2 = new Date(2000, 0, 10, 23, 59, 59);
// console.log((date2-date1)/(1000 * 60 * 60*24));

// let date1  = new Date();
// let date2 = new Date(1989, 5, 24, );
// console.log((date1-date2)/(1000 * 60 * 60*24)/365*12);

//Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

// let now  = new Date(2000,8,1);
// let date = new Date(2010, 1, 15);

// let diff = date-now; 
// console.log(diff);
// console.log(diff/1000/60/60/24);
// console.log(diff/1000/60/60/24/365*12);
// console.log(diff/1000/60/60/24/365);
// let date = new Date(2018, 0, 1, 100, 100, 100);
// console.log(date); 


// let date = new Date(2020, 3, 0);
// console.log(date.getDate());

// let mon= 3;
// let y1=2020;
// function dat1(num1,num2) {
// 	let date = new Date(y1, mon, 0);
// 	console.log(date.getDate());	
// }

// dat1(mon,y1)


// let date = new Date(2025, 5, 0);
// console.log(date.getDate());

// let mon= 5;
// let y1=2025;
// function dat1(num1,num2) {
// 	let date = new Date(y1, mon, 0);
// 	console.log(date);	
// 	console.log(date.getDay());	
// }

// dat1(mon,y1)



// Хочу решить задачу которая нам расскажет скакие года весокосные с определеноой даты по текущую

// function isLeap(num1) {
// 	let date = new Date(num1, 2, 0);
// 	let dateEnd = new Date().getFullYear();
// 	console.log(dateEnd)

// 	for( let i = num1; i<= dateEnd; i++) {
// 		let numX =  new Date(i, 2, 0);
// 		if (numX.getDate() == 29) {
// 			console.log('високосный год  - ' + i);
// 		}
// 	}

// }

// isLeap(1900)

// let year  = 2025;
// let month = 0;
// let day   = 31;

// let date = new Date(year, month, day);

// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('корректна');
// } else {
// 	console.log('некорректна');
// }
// function checkDate(year, month, day){
// 	let date = new Date(year, month, day);
// 	if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 		console.log('true');
// 	} else {
// 		console.log('false');
// 	}
// }
// console.log(checkDate(2025, 0, 31)); // выведет 	true 
// console.log(checkDate(2025, 0, 32)); // выведет 	false 


// let now  = new Date(); //
// let date = new Date(now.getFullYear(), 11, 31); 
// console.log(date.getDay());

// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 	1); 
// console.log(date.getDay());

// let now  = new Date();
// let date = new Date(now.getFullYear()+1, 11, 31); 
// console.log(date.getDay());

// let now  = new Date();
// let date = new Date(now.getFullYear()+1, now.getMonth(), now.getDay()); 
// console.log(date.getDay());

// let now  = new Date();
// let date = new Date(now.getFullYear()-1, now.getMonth(), now.getDay()); 
// console.log(date.getDay());


// let now = new Date();
// let date = new Date(now.getFullYear(), 0 - 1, 1); 
// console.log(date);
// console.log(date.getDay());


// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth()-1, now.getDate()); 
// console.log(date)
// console.log(date.getDay());


// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; 
// console.log(days[date.getDay()]);


//Определите, сколько дней между 1 января и 10 сентября текущего года.



// let now = new Date();
// let date1 = new Date(now.getFullYear(), 0, 1); 
// let date2 = new Date(now.getFullYear(), 8, 10); 

// console.log((date2 - date1)/1000/60/60/24);

//Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.
// let now = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth(), 20); 
// let date2 = new Date(now.getFullYear(), now.getMonth()+1, 10); 

// console.log((date2 - date1)/1000/60/60/24);

//Момент времени дня

//Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.

// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 
// 	now.getDate() - 1, 12); 

// 	console.log((now - date)/1000/60/60);



//Определите, сколько часов прошло между началом дня и текущим моментом времени.Определите, сколько часов прошло между началом дня и текущим моментом времени.

// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// console.log(now)
// console.log(date)
// console.log((now-date)/1000/60/60)


//Определите, сколько часов осталось до конца дня.

// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(),24);
// console.log(now)
// console.log(date)
// console.log((24- now.getHours()))

// усложню для себя задачу чтобы  получить ровное значение


//Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.

// let now  = new Date();
// let year = now.getFullYear();
// for (let year1 = 2000;year1<=year;year1++) {
// 	let date = new Date(year1,0,1)
// 	//console.log(date)
// 	if(date.getDay() ==0||date.getDay() ==6 ) {
// 		console.log(year1 + '-' + ' 1 января был выходной ' +  date.getDay() )
// 	}
// }

//Практика на получение моментов времени в JavaScript

//Определите, сколько секунд прошло с начала дня до настоящего момента времени.

// let now  = new Date();
// let date = new Date(now.getFullYear(),now.getMonth(), now.getDay())
// console.log((now-date)/1000)

// Определите, сколько секунд осталось до конца дня.

// let now  = new Date();
// let date = new Date(now.getFullYear(),now.getMonth(), now.getDay(),24)
// console.log(date)
// console.log((date-now)/1000/60/60)


//Определите, сколько дней осталось до нового года.

// let now  = new Date();
// let date = new Date(2022,11, 31,24)
// console.log(date)
// console.log((date-now)/1000/60/60/24)

//Определите, сколько пятниц 13-е в текущем году.


//let now  = new Date();

// let date = new Date(2022,11, 31,24)
// console.log(date)
// for( let days=0; days<=365; days++) {
// 	let data = new Date(now.getFullYear(),0,days)
// 	if(data.getDay() == 5 && data.getDate()==13 ) {
// 		console.log( 'Пятница тринадцатого = ' + data  )
// 	}
// }


//Определите, какой год был 3 месяца назад.

// let now  = new Date();
// let newNow = new Date(now.getFullYear(),now.getMonth() - 3);
// console.log(newNow.getFullYear())

//Определите, какой день недели будет в последнем дне текущего месяца.

// let now  = new Date();
// let newNow = new Date(now.getFullYear(),now.getMonth() +1, 0);
// console.log(newNow.getDay())

//Напишите код, который будет определять, високосный ли текущий год.
// let now  = new Date();
// let newNow = new Date(2020,1, 29);
// if(newNow.getDate() == 29) {
// 	console.log('Vesa')
// }
//console.log(newNow.getDay())


//Напишите код, который будет находить предыдущий високосный 
// let now = new Date();
// let year1 = now.getFullYear()

// for (let i = year1; i>=2000; i--) {
// 	let data = new Date(i,1,29);
// 	if (data.getDate() == 29) {
// 		console.log("Весакосный" + i)
// 	} 

// }

//Напишите код, который будет находить следующий високосный год.
// let now = new Date();
// let year1 = now.getFullYear()

// for (let i = year1; ; i++) {
// 	let data = new Date(i,1,29);
// 	if (data.getDate() == 29) {
// 		console.log("Весакосный" + i);
// 		break;
// 	} 
// }

//


//Необязательно сравнивать года. Дата может состоять просто из месяца и дня:

// let date1 = '2020-11-31';
// let date2 = '2020-12-01';
// if(date1>date2) {
// 	console.log(date1)
// } else {
// 	console.log(date2)
// }

//Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
// let date1 = '09-21';
// let date2 = '09-23';
// if(date1>date2) {
// 	console.log(date1)
// } else {
// 	console.log(date2)
// }


//Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.
// let date = '02-20';

// if (date >= '01-01' && date <= 
// 	'02-01') { 
// 	console.log('1 знак');
// }

// if (date >= '02-02' && date <= 
// 	'03-01') { 
// 	console.log('2  знак');
// }

// if (date >= '03-02' && date <= 
// 	'04-01') { 
// 	console.log('3 знак');
// }

//Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже полдень или нет.
// let now  = new Date();
// let pold  = new Date(now.getFullYear(), now.getMonth(), now.getDate(),12);
// console.log(now > pold); 

// Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца. Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.

// let now  = new Date();
// let pold  = new Date(now.getFullYear(), now.getMonth(), 15);
// console.log(now > pold); 

//239 Основы работы с DOM в JavaScript

//241 Получение DOM элемента в JavaScript

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// console.log(elem1);
// console.log(elem2);
// console.log(elem3);

// let elem1 = document.querySelector('#block p');
// console.log(elem1);

// let elem1 = document.querySelector('.block p');
// console.log(elem1);

// let elem1 = document.querySelector('.www');
// console.log(elem1);


// let button = document.querySelector('#button');
// let num = 1;
// button.addEventListener('click', function() {
// 	num +=1;
// 	console.log(num)
// })

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);

// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }

// let button1 = document.querySelector('#elem1');
// let button2 = document.querySelector('#elem2');
// let button3 = document.querySelector('#elem3');
// let button4 = document.querySelector('#elem4');
// let button5 = document.querySelector('#elem5');

// function func() {
// 	console.log('message');
// }

// button1.addEventListener('click', func);
// button2.addEventListener('click', func);
// button3.addEventListener('click', func);
// button4.addEventListener('click', func);
// button5.addEventListener('click', func);

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }
// let button0 = document.querySelector('#elem');

// button0.addEventListener('click', func1);
// button0.addEventListener('click', func2);
// button0.addEventListener('click', func3);


// let button = document.querySelector('#button');

// button.addEventListener('mouseover', function() {
// 	console.log('1');
// });
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// });
// button.addEventListener('dblclick', function() {
// 	console.log('3');
// });
// button.addEventListener('click', function() {
// 	console.log('4');
// });

//247
// let elem = document.querySelector('#elem');
// console.log(elem.textContent);
// elem.textContent = '!!!';
// console.log(elem.textContent);

//Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	console.log(elem.textContent)
// })

// button.addEventListener('click', function() {
// 	elem.textContent = '!!!';
// 	console.log(elem.textContent);
// })

//Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	console.log(Number(elem1.textContent) + Number(elem2.textContent));
// })

//Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('.block p');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	elem4.textContent = Number(elem1.textContent) + Number(elem2.textContent)+ Number(elem3.textContent);
// })

//Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
// let elem1 = document.querySelector('#elem1');
// button.addEventListener('click', function() {
// 		elem1.textContent = Number(elem1.textContent) + 1;
// 	});

//Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// let elem1 = document.querySelector('#elem1');
// button.addEventListener('click', function() {
// 		elem1.textContent += "!";
// 	});

//Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
// let elem1 = document.querySelector('#elem1');
// button.addEventListener('click', function() {
// 		elem1.innerHTML = "<b>"+ elem1.innerHTML +"</b>";
// 	});


// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	elem.type = 'submit';
// 	console.log(elem.type);
// });



// let elem = document.querySelector('#elem');
// let elemA = document.querySelector('#elemA');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	elem.textContent = elemA.href;
// 	console.log(elemA.href);
// });

// let elemA = document.querySelector('#elemA');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	elemA.textContent = elemA.textContent +"(" + elemA.href + ')';
// 	console.log(elemA.href);
// });

//Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.

// let img1 = document.querySelector('img');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	elem.textContent = img1.src;
// });

//Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.

// let img1 = document.querySelector('img');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	console.log(img1.width)
// 	img1.width = "350";
// 	console.log(img1.width)
// });

//Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.

// let img1 = document.querySelector('img');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	img1.width = img1.width*2;
// 	console.log(img1.width)
// });

//Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.


// let img1 = document.querySelector('#img1');
// let img2 = document.querySelector('#img2');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', function() {
// 	img1.src = "/porsche-cayenne_3000x2000_4k4ws.jpeg";
// });
// button2.addEventListener('click', function() {
// 	img2.src = "/porsche-cayenne_3000x2000_4k4ws.jpeg";
// });

//250
//Работа с текстовыми полями в JavaScript

// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');

// button1.addEventListener('click', function() {
// 		console.log(elem.value)
// 	});

//Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.

// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');

// button1.addEventListener('click', function() {
// 		elem.value= "EBYSHKI"
// 	});

//Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

// let elem = document.querySelector('#elem');
// let elemP = document.querySelector('#elemP');
// let button1 = document.querySelector('#button1');

// button1.addEventListener('click', function() {
// 	elemP.textContent = elem.value;
// 	});

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', function() {
// 	elem2.value = elem1.value*2 ;
// 	});

//Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', function() {
// 	let n1 = elem1.value;
// 	let n2 = elem2.value
// 	elem1.value = n2;
// 	elem2.value = n1;
// 	});

//Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// let elemP = document.querySelector('#elemP');

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', function() {
// 	console.log(elem1.value)
// 	elemP.textContent = Number(Number(elem1.value) + Number(elem2.value) + Number(elem3.value) + Number(elem4.value) + Number(elem5.value))/5;
// 	});

//Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.

// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('focus', function() {
// 	elem1.value = 1;
// });
// elem1.addEventListener('blur', function() {
// 	elem1.value = 2;
// });

//Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.

// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('blur', function() {
// 	alert(elem1.value);
// });



// Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.

// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('focus', function() {
// 	elem1.value = '';
// });

// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let elemDiv = document.querySelector('#elemDiv');
// button1.addEventListener('click', function() {
// 		console.log(elemDiv.className)
// 	});

//Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
// button2.addEventListener('click', function() {
// 	let arr = [];
// 	arr = elemDiv.className.split(' ')
// 	console.log(arr)
// });

//Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.


//Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.

// let image = document.querySelector('#image');
// console.log(image.src);
// console.log(document.querySelector('#image').src);
// let image = document.querySelector('#image');

// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);


// console.log(image.src);
// console.log(image.width);
// console.log(image.height);


//254
//Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
// let elem1 = document.querySelector('#elem1');

// elem1.addEventListener('focus', function() {
// 	this.value = 2;
// 	});
// elem1.addEventListener('blur', function() {
// 	this.value = 1;
// 	});


// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.

// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', function() {
// 	this.value = Number(this.value) + 1;
// });

// Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.

// let elemP1 = document.querySelector('#elemP1');
// let elemP2 = document.querySelector('#elemP2');
// let elemP3 = document.querySelector('#elemP3');
// let elemP4 = document.querySelector('#elemP4');
// let elemP5 = document.querySelector('#elemP5');


// elemP1.addEventListener('click', func);
// elemP2.addEventListener('click', func);
// elemP3.addEventListener('click', func);
// elemP4.addEventListener('click', func);
// elemP5.addEventListener('click', func);

// function func() {
// 	this.textContent += "!";
// }

// Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('blur', func);
// elem2.addEventListener('blur', func);
// elem3.addEventListener('blur', func);

// function func() {
// 	this.value = Number(this.value)**2;
// }

//Получение группы элементов в JavaScript

//Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение 'text'.

// let elems = document.querySelectorAll('.www');

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.textContent = 'text';
// 	}
// });

//Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.

// let elems = document.querySelectorAll('.www');

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function() {

// 	for( let i=0; i<= elems.length; i++) {
// 		elems[i].textContent = elems[i].textContent +' '+ i;
// 	}
// });

//Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.

// let elems = document.querySelectorAll('.in')
// let elemP = document.querySelector('#elemP');

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function () {
// 	let sum =0;
// 	for (let elem of elems) {
// 		sum +=  Number(elem.value);
// 	}
// 	elemP.textContent= sum;
// })

//Добавление обработчиков в цикле в JavaScript

//Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.

// function func() {
// 	this.value = Number(this.value) + 1;
// }

// let elems = document.querySelectorAll('.in')
// for (let elem of elems) {
// 	elem.addEventListener('blur', func);
// }

//Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.

// let elemP = document.querySelectorAll('.www');
// for (let elem of elemP) {
// 	elem.addEventListener('click', func);
// }

// function func() {
// 	this.textContent = Number(this.textContent)**2;
// }

// let elemP = document.querySelectorAll('.www');
// for (let elem of elemP) {
// 	elem.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	});
// }

// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function () {
// 		this.textContent++;
// 	});
// }

// function func() {
// 	this.textContent++;
// }


//259
// let elemA = document.querySelector('#elemA')
// elemA.addEventListener('click', func);


// function func(event) {
// 	event.preventDefault();
// 	this.textContent = this.textContent +'('+ this.href +')';
// 	this.removeEventListener('click', func);
// }

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.

// let button = document.querySelector('#button');
// button.addEventListener('click', func)

// function func() {
// 	console.log(button.value)
// 	if(button.value < 10) {
// 		button.value = Number(button.value) + 1;
// 	} else{
// 		alert(10);
// 		this.removeEventListener('click', func);
// 	}
// }

//Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }

// function func() {
// 	this.textContent =  this.textContent + '!'; 
// 	this.removeEventListener('click', func); // отвязываем обработчик
// }

// let elems = document.querySelectorAll('li');
// for( let elem of elems) {
// 	elem.addEventListener('click', function func(){
// 		if(this.textContent<10) {
// 			this.textContent++
// 			//this.removeEventListener('click', func);
// 		}

// 	})
	
// }


//262
//Работа с атрибутами через методы в JavaScript

// let elem = document.querySelector("#elem")
// let value = elem.getAttribute('value')
// let class1 = elem.getAttribute('class')
// console.log(class1)
// elem.setAttribute('value','taxt valu')
// console.log(elem.value)
// elem.setAttribute('class','xxx aaa')
// console.log(elem.classList)
// elem.removeAttribute('value')
// console.log(elem.value)
// elem.setAttribute('value','taxt')
// console.log(elem.value)
// console.log(elem.hasAttribute('value','taxt'))

//Манипулирование CSS классами в JavaScript
//263

// let elem = document.querySelector('#elem');
// let classLen = elem.classList.length;
// console.log(classLen)
// let classList = elem.classList;
// for( let classes of classList) {
// 	console.log(classes)
// }
// classList.add('xxxx')
// console.log(classList)
// classList.remove('www')
// console.log(classList)
// let chek = elem.classList.contains('ggg')
// console.log(chek)

// elem.classList.toggle('ggg')
// console.log(classList)
// elem.classList.toggle('ggg')
// console.log(classList)

// function func() {
// 	// elem.style.width = '300';
// 	// elem.style.height = '300';
// 	// elem.style.border = '2px dotted';	
// 	// elem.style.fontSize = '20px';
// 	// elem.style.marginTop = '20px';
// 	for(let elema of elems) {
// 		elema.style.cssFloat = 'left';
// 	}
// }

// let elem = document.querySelector('div');
// let button1 = document.querySelector('#button1')
// let button2 = document.querySelector('#button2')
// let button3 = document.querySelector('#button3')
// //let elems = document.querySelectorAll('li');

// button1.addEventListener('click', function(){
// 	elem.classList.toggle('button1')
// })
// button2.addEventListener('click', function(){
// 	elem.classList.toggle('button2')
// })
// button3.addEventListener('click', function(){
// 	elem.classList.toggle('button3')
// })



// let parent = document.querySelector('#parent');
// let elems = parent.children;

// for (let elem of elems) {
// 	console.log(elem.innerHTML);
// }

// let nodes = parent.childNodes;

// for (let node of nodes) {
// 	console.log(node.textContent);
// }


// let elem = document.querySelector('#elem')
// let f = elem.firstElementChild;
// f.style.color = 'red';
// console.log(f)

// let f2 = elem.lastElementChild;
// f2.style.color = 'red';
// let elems = elem.children;
// console.log(elems)

// for( let el of elems) {
// 	el.innerHTML += '!';
// }

// let elem = document.querySelector('#elem')
// let parent1 = elem.parentElement.parentElement;
// parent1.style.border=' solid red';
// console.log(parent1)

// let elem = document.querySelector('#elem')
// let parent = elem.closest('.www');
// console.log(parent)

// let elem = document.querySelector('#elem')
// let text = elem.previousElementSibling.innerHTML;
// elem.previousElementSibling.innerHTML = text +'!';

// let text2 = elem.nextElementSibling.innerHTML;
// elem.nextElementSibling.innerHTML = text2 +'!';

// elem.nextElementSibling.nextElementSibling.innerHTML = elem.nextElementSibling.nextElementSibling.innerHTML +'!';
// let elemPre = elem.previousElementSibling.innerHTML;
// let elemNext = elem.nextElementSibling.innerHTML;
// elem.previousElementSibling.innerHTML = elemNext;
// elem.nextElementSibling.innerHTML = elemPre;
// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling.innerHTML;

// console.log(text);


//267
// let elem = document.getElementById('elem')
// elem.innerHTML = 'elem change'

// let elems = document.getElementsByTagName('li')
// for(let elem of elems) {
// 	elem.style.color  = 'red';
// }

// let elems = document.getElementsByClassName('www')
// for(let elem of elems) {
// 	elem.style.color  = 'red';
// }

// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelectorAll('.www');
// console.log(elems1)
// for(let elem of elems1) {
// 	console.log(elem.innerHTML)
// }
// let elems2 = parent.querySelectorAll('.ggg');
// console.log(elems2)
// for(let elem of elems2) {
// 	console.log(elem)
// }


//Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.

// let elems = document.querySelectorAll('div');
// for ( let elem of elems) {
// 	elem.addEventListener('click', func)
// }

// function func(){
// 	this.innerText = this.innerText + this.dataset.num;
// }

//Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано.

// let btn = document.querySelector('#button1');
// btn.addEventListener('click', function(){
// 	btn.dataset.num++
// 	console.log(btn.dataset.num)
// })

// btn.addEventListener('dblclick', function(){
// 	alert(btn.dataset.num)
// })

//В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.

// let elem = document.querySelector('#elem')

// elem.addEventListener('blur', function(){
// 	console.log(elem.dataset.length)
// 	console.log(elem.value.length)
// 	if(Number(elem.dataset.length) != elem.value.length ) {
// 		console.log('Необходимо ввести ' + elem.dataset.length + ' символов' )
// 	}
// })

//В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.

// let elem = document.querySelector('#elem')

// elem.addEventListener('blur', function(){
// 	console.log(elem.dataset.min)
// 	console.log(elem.dataset.max)
// 	console.log(elem.value.length)

// 	let min1 = Number(elem.dataset.min);
// 	let max1 = Number(elem.dataset.max);
// 	let val = elem.value.length;

// 	if(val<min1 || val> max1) {
// 		console.log('Необходимо ввести символы от 5 до 10 символов' )
// 	}
// })

// Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.

// let elems = document.querySelectorAll('div')
// console.log(elems);

// for(let i = 0; i<=elems.length; i++) {
	
// 	elems[i].setAttribute('data-num', i+1)
// }
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// console.log(elem.firstElementChild);
// console.log(elem.lastElementChild);

// console.log(elem.firstChild);
// console.log(elem.lastChild);

// console.log(elem1.nextElementSibling);
// console.log(elem1.nextSibling);

// console.log(elem.childNodes[0]);
// console.log(elem.childNodes[1]);
// console.log(elem.childNodes[2]);


// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
// 	if(node.nodeType<8) {
// 		console.log(node);
// 	}
// }

// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
// 	if(node.nodeType<8) {
// 		console.log(node.textContent);
// 	} else {
// 		console.log(node.data);
// 	}
// }

// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
// 	console.log(node.textContent = node.textContent + ' ' + node.nodeType)
// }

//271

//Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.


// let elems = document.querySelectorAll('li');
// let sum = 0;

// for (let elem of elems) {
// 	let text = +elem.textContent;
// 	let array = (""+text).split("").map(Number)
// 	console.log(array);
// 	let sum1=0;
// 	for(let i=0; i< array.length; i++) {
// 		sum1 += array[i]
// 	}
// 	if (sum1 == 6) {
// 		sum += text;
// 	}
// }

// console.log(sum);

// let elems = document.querySelectorAll('p');
// for( let elem of elems) {
// 	elem.textContent += '!';
// }

//По клику на абзац его значение должно увеличиться на единицу:

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(1) + Number(this.textContent);
// 	});
// }

// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>'+ elem.innerHTML + '</b>';
// });

//По клику на кнопку должна вывестись сумма чисел из абзацев:

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	let sum = 0;
	
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
	
// 	console.log(sum);
// });

//По клику на абзац ему в конец должен добавиться заданный текст:
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.innerHTML += '!';
// 	});
// }

//По клику на кнопку текст каждого абзаца должен стать жирным:


// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = '<b>'+elem.innerHTML+'</b>';
// 	}
// });


//По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:


// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let sum = 0;
// button.addEventListener('click', function() {
// 	console.log(sum);
// });

// for (let elem of elems) {
// 	sum += Number(elem.textContent);
// }

//В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('input');
// let sum = 0;

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		sum += Number(elem.value);
// 	}
// 	console.log(sum);
// });

//В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:

// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
// 	inp3.value = Number(inp1.value) + Number(inp2.value);
// });

//В первые два инпута вводятся числа. По клику на кнопку в абзац должна вывестись сумма этих чисел:

// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function() {
// 	res.innerHTML = Number(inp1.value) + Number(inp2.value);
// });

//По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом его data атрибута:


//По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом соответствующего элемента массива:

// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// let texts = [
// 	'text1',
// 	'text2',
// 	'text3',
// ];

// button.addEventListener('click',function() {
// 	let i =0;
// 	for (let input of inputs) {
// 		if (input.value === texts[i]) {
// 			input.classList.add('right')
// 		} else {
// 			input.classList.add('wrong')
// 		}
// 		i++;


// 	}
// });

//В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма введенных чисел:

// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');


// btn.addEventListener('click', function() {
// 	let sum = 0;
// 	for (let input of inputs) {
// 		sum += Number(input.value);
// 	}
	
// 	console.log(sum);
// });

// В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:

// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');



// btn.addEventListener('click', function() {
// 	let sum  = Number(inp1.value) + Number(inp2.value);
// 	inp3.value = sum;
// });


//В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа:

// let inp = document.querySelector('#inp');

// inp.addEventListener('blur', function() {
// 	let digits = inp.value.split('');
// 	console.log(digits)
// 	let sum = 0;
	
// 	for (let digit of digits) {
// 		sum += +digit;
// 	}
// 	console.log(sum);
// });

//Отработка изученного материала на работу с DOM 273 

//Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let elem = document.querySelector('#elem')
// let div = document.querySelector('div')

// elem.addEventListener('blur',()=>{
// 	div.textContent += elem.value;
// })

//Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let div = document.querySelector('div')
// let btn  = document.querySelector('#btn');

// btn.addEventListener('click',()=>{
// 	div.textContent = Number(elem1.value) +Number(elem2.value) +Number(elem3.value) ;
// })

//Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let div = document.querySelector('div')
// let btn  = document.querySelector('#btn');

// elem1.addEventListener('blur',()=>{
// 	let sum = 0;
// 	let arr = elem1.value.split('');
// 	console.log(arr)
// 	for (let i=0; i < arr.length; i++) {
// 	sum = sum + Number(arr[i]);
// 	}
// 	console.log ('Сумма элементов массива:' + sum);
// 	div.textContent = sum;
// })

//Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

// let elem1 = document.querySelector('#elem1')
// let div = document.querySelector('div')

// elem1.addEventListener('blur',()=>{
// 	let sum = 0;
// 	let arr = elem1.value.split(',');
// 	console.log(arr)
// 	for (let i=0; i < arr.length; i++) {
// 	sum = sum + Number(arr[i]);
// 	}
// 	console.log ('Сумма элементов массива:' + sum);
// 	div.textContent = sum / arr.length;
// })

//Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let elem4 = document.querySelector('#elem4')
// let div = document.querySelector('div')
// let btn  = document.querySelector('#btn');

// elem1.addEventListener('blur',()=>{
// 	let arr = elem1.value.split(' ');
// 	console.log(arr)
// 	elem2.value = arr[0]
// 	elem3.value = arr[1]
// 	elem4.value = arr[2]
// })

//Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let elem4 = document.querySelector('#elem4')
// let div = document.querySelector('div')
// let btn  = document.querySelector('#btn');

// elem1.addEventListener('blur',()=>{
// 	let arr = elem1.value.split('.');
// 	console.log(arr.reverse())
// 	elem2.value = arr[0][0].toUpperCase() + arr[0].slice(1);
// 	elem3.value = arr[1][0].toUpperCase() + arr[1].slice(1);
// 	elem4.value = arr[2][0].toUpperCase() + arr[2].slice(1);
// })

//Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let elem4 = document.querySelector('#elem4')
// let div = document.querySelector('div')
// let btn  = document.querySelector('#btn');

// elem1.addEventListener('blur',()=>{
// 	let arr = elem1.value.split('.');
// 	elem1.value = arr.reverse().join('-');
// })

//Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let elem1 = document.querySelector('#elem1')
// let btn  = document.querySelector('#btn');

// btn.addEventListener('click',()=>{
// 	let arr = elem1.value.split('');
// 	let arr2 = arr.reverse().join('');
// 	if(elem1.value == arr2) {
// 		console.log(true)
// 	}
// })

//Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

// let elem1 = document.querySelector('#elem1')

// elem1.addEventListener('blur',()=>{
// 	let arr = elem1.value.split('');
// 	console.log(arr)
// 	if(arr.includes('3')) {
// 		console.log(true)
// 	}
// })

//Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

// let elems = document.querySelectorAll('input')
// console.log(elems)
// let btn  = document.querySelector('#btn');

// btn.addEventListener('click',()=>{
// 	for(let i = 0; i<elems.length; i++) {

// 		elems[i].value += i+ 1;
// 	}
// })

//Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.

// let elems = document.querySelectorAll('a')
// console.log(elems)

// for(let elem of elems) {
// 	elem.textContent += '(' + elem.href + ')';
// }

//Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).

// let elems = document.querySelectorAll('a')

// for(let elem of elems) {
// 	let str = elem.textContent.slice(0,5);

// 	if(str == 'http:'){
// 	elem.textContent += '\u2192';
// 	}
// }

//Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

// let elems = document.querySelectorAll('p');

// for ( let elem of elems) {
// 	elem.addEventListener('click', ()=>{
// 		elem.textContent = Number(elem.textContent)**2;
// 	})
// }


//Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четвег", "Пятница", "Суббота"];
// let elem1 = document.querySelector('#elem1');
// let da = elem1.value.split('.').reverse().join(',');
// console.log(da)
// let myData = new Date(da);
// console.log(myData)
// elem1.addEventListener('blur', ()=>{
// 	console.log(days[myData.getDay()])
// })

//Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
// let elem1 = document.querySelector('#elem1');
// let btnM = document.querySelector('#btnM');
// let btnP = document.querySelector('#btnP');
// btnM.addEventListener('click', ()=> {
// 	if(elem1.value>0) {
// 		elem1.value -= 1;
// 	}

// })
// btnP.addEventListener('click', ()=> {
// 		elem1.value = +elem1.value +1;
// })

//Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.

// let elems = document.querySelectorAll('p');
// let elem1 = document.querySelector('#elem1')

// for(let el of elems) {
// 	el.addEventListener('click', ()=>{
// 		elem1.value = +elem1.value +1;
// 	})
// }

//На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
// let elems = document.querySelectorAll('div');
// for(let el of elems) {
// 	el.textContent = el.textContent.slice(0,10) + '...'
// }

//Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('blur', ()=>{
// 	let num = Number(elem1.value);
// 	if (num>1 && num<100) {
// 		elem1.setAttribute('style','background:green;')
// 	} else {
// 		elem1.setAttribute('style','background:red;')
// 	}
// })


//Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.

// let elem1 = document.querySelector('#elem1');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', ()=>{
// 	elem1.value = Math.random().toString(36).substring(2,10)
// })

//Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.

// let elem1 = document.querySelector('#elem1');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', ()=>{
// 	elem1.value = elem1.value.split('').sort(() => Math.random() - 0.5).join('');
// })

//Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.

// let elem1 = document.querySelector('#elem1');
// let btn = document.querySelector('#btn');
// let p = document.querySelector('p')


// btn.addEventListener('click', ()=>{
// 	let celsia = (Number(elem1.value)-32)*5/9;
// 	p.textContent = celsia;
// })

//Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.

// let elem1 = document.querySelector('#elem1');
// let btn = document.querySelector('#btn');
// let p = document.querySelector('p')

//Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
// let elem1 = document.querySelector('#elem1');
// let btn = document.querySelector('#btn');
// let p = document.querySelector('p')

// btn.addEventListener('click', ()=>{
// 	let fac = Number(elem1.value);
// 	let sum = fac;
// 	for( let i=fac; i> 1; i--) {
// 		sum = sum*(i-1);
// 		console.log(i + ' _ '+sum)
// 	}
// 	p.textContent = sum;
// })

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let btn = document.querySelector('#btn');
// let p = document.querySelector('p')

// let elem1a = Number(elem1.value);
// let elem2b = Number(elem2.value);
// let elem3c = Number(elem3.value);

// let d = elem2b**2 - 4*elem1a*elem3c;
// console.log(d)

// let x1 = (-elem2b + Math.sqrt(d))/(2*elem1a);
// let x2 = (-elem2b - Math.sqrt(d))/(2*elem1a);
// let x3 = Math.floor((((-elem2b + Math.sqrt(d))/(2*elem1a))*100)/100);
// let x4 = Math.floor((-elem2b - Math.sqrt(d))/(2*elem1a)*100)/100;

// console.log(x1)
// console.log(x2)
// console.log(x3)
// console.log(x4)

// btn.addEventListener('click', ()=>{
// 	p.textContent = x1 + ' ___ '+x2;

// })

//Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p')
// p.innerHTML = elem.value;


// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click',()=>{
// 	elem.disabled = false;
// 	console.log(elem.disabled);
// })
// btn2.addEventListener('click',()=>{
// 	elem.disabled = true;
// 	console.log(elem.disabled);
// })



// elem.disabled = false;
// console.log(elem.disabled);

//276
// let elem = document.querySelector('#elem');
// console.log(elem.checked);


// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', ()=>{
// 	elem.checked = true;
// })
// btn2.addEventListener('click', ()=>{
// 	elem.checked = false;})

	
//Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.

// let elem = document.querySelector('#elem');
// console.log(elem.checked);
// let btn1 = document.querySelector('#btn1');
// let p = document.querySelector('p')

// btn1.addEventListener('click', ()=>{
// 	if(elem.checked) {
// 		p.innerHTML = 'Вы подписали соглашение'
// 	} else {
// 		p.innerHTML = 'Вы НЕ подписали соглашение'
// 	}
// })


//277
// let elem = document.querySelector('#elem');
// console.log(elem.checked);
// let btn1 = document.querySelector('#btn1');


// btn1.addEventListener('click', ()=>{
// 	elem.checked = !elem.checked;

// })

//Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.

// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#btn1');
// let p = document.querySelector('p')


// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			p.textContent = radio.value;
// 		}
// 	}
// });

//Дан инпут и абзац. По изменению инпута выведите его текст в абзац.

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('change', function() {
// 	p.textContent = (this.value);
// });

//Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('change', function() {
// 	console.log(this.checked);
// });

//Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.

// let elem = document.querySelector('#elem');

// elem.addEventListener('change', function() {
// 	if(this.value.length >5) {
// 		elem.setAttribute('style','border-color: red')
// 	} else {
// 		elem.setAttribute('style','border-color: green')
// 	}
// });

// let elem = document.querySelector('#elem');

// elem.addEventListener('input', function() {
// 	if(this.value.length>5) {
// 		alert(5)
// 	}
// 	console.log(this.value);
// });

//Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');


// elem.addEventListener('input', function() {
// 	if(this.value.length<=5) {
		
// 		p.textContent = 'Осталось ввести ' + (5 - Number(this.value.length));
// 	} else {
// 		p.textContent = 'Перебор символов ' + (Number(this.value.length) - 5);
// 	}
// 	console.log(this.value);

// });

//281 Методы focus и blur в JavaScript

//Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.
// let elem1   = document.querySelector('#elem1');
// let elem2   = document.querySelector('#elem2');
// let button = document.querySelector('#button');

// elem1.addEventListener('input', function() {
// 	if(elem1.value>=2) {
// 		elem2.focus();
// 	}
// });

// elem2.addEventListener('input', function() {
// 	if(elem2.value>=2) {
// 		elem2.blur();
// 	}
// });


// События мыши:

// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.
// События на элементах управления:

// submit – пользователь отправил форму <form>.
// focus – пользователь фокусируется на элементе, например нажимает на <input>.
// Клавиатурные события:

// keydown и keyup – когда пользователь нажимает / отпускает клавишу.
// События документа:

// DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
// CSS events:

// transitionend – когда CSS-анимация завершена.


//282

//Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.

// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');
// let num = 0;
// button.addEventListener('click',()=>{
// 	p.textContent = num;
// })

// select.addEventListener('change', function(){
// 	num = this.value;
// });


//Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.

// let select = document.querySelector('#select');
// let button = document.querySelector('#button');

// select.addEventListener('change', function(){
// 	console.log(this.value);
// 	let date =  new Date(this.value, 1, 29);
// 	if(Number(date.getDate()) == 29) {
// 		console.log('Весокосный')
// 	}
// });

//Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.

// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
// 	//console.log(this.value);
// 	if( this.value<6) {
// 		console.log('будни')
// 	} else {
// 		console.log('вызодной')
// 	}
// });

//Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
// let select = document.querySelector('#select');
// let today = new Date();
// select.value =today.getMonth();
// console.log(today.getMonth())

// let select = document.querySelector('#select');
// console.log(select.selectedIndex);
// select.selectedIndex = 2;
// console.log(select.selectedIndex);

//Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

// let elem1   = document.querySelector('#elem1');
// let select = document.querySelector('#select');
// let now = new Date();
// let dayToday = now.getDay();
// console.log(dayToday)
// select.selectedIndex = dayToday;

// elem1.addEventListener('blur', ()=>{
// 	select.selectedIndex = elem1.value;
// 	console.log(select.selectedIndex);
// })

//Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.

// let select = document.querySelector('#select');
// for (let option of select) {
// 	console.log(option);
// 	option.textContent += option.value;
// }

//Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.

// let select = document.querySelector('#select');
// for (let option of select) {
// 	console.log(option);
// 	if(option.selected) {
// 		option.textContent += '!';
// 	} else {
// 		option.textContent += '?';
// 	}
// }

//Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.

// let select = document.querySelector('#select');
// let bnt = document.querySelector('#button')

// bnt.addEventListener('click', ()=>{
// 	select[select.length - 1 ].selected = true;
// })

//Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.

// let select = document.querySelector('#select');
// let bnt = document.querySelector('#button')
// bnt.addEventListener('click', ()=>{
// 	console.log(select[select.selectedIndex].textContent);
// })

//Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.

// let select = document.querySelector('#select');
// let bnt = document.querySelector('#button')
// bnt.addEventListener('click', ()=>{
// 	select[select.selectedIndex].textContent += '!';
// })


//286
//Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
//Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.

// let select = document.querySelector('#select');
// console.log(select.length-1)
// let btn = document.querySelector('#button');
// btn.addEventListener('click', ()=>{
// 	select[select.length-1].selected = true;
// 	console.log(select[select.selectedIndex].textContent);
// 	//Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
// 	select[select.selectedIndex].textContent += '!';
// 	// let option = select[2];
// 	// option.selected = true;
// })


//287
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');

// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value;
// });


//По клику на кнопку в див должно записаться или одно, или другое значение:


// let checkbox = document.querySelector('input');
// let button = document.querySelector('button');
// let div = document.querySelector('div');

// button.addEventListener('click', function(){
// 	console.log('1')
// })

// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		div.textContent = '111';
// 	} else {
// 		div.textContent = '222';
// 	}
// });


//По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:

// let checkbox = document.querySelector('[type="checkbox"]');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
// 	if (checkbox.checked == true) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });

//288


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event1) {
// 	console.log(event1);
// });


//289
//Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:

// let elem = document.querySelector('#elem');
			
// window.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.pageX + ':' + event.pageY;
// });

// let elem1 = document.querySelector('#elem1');
			
// window.addEventListener('mousemove', function(event) {
// 	elem1.innerHTML = event.clientX + ':' + event.clientY;
// });


//290
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	console.log(event.type); // выведет 'click'
// });

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
// 	if(event.type == 'click' ) {
// 		elem.style.backgroundColor = 'azure';
// 		console.log(event.type);
// 	} else if(event.type == 'dblclick' ) {
// 		elem.style.backgroundColor = 'red';
// 		console.log(event.type);
// 	}
// }

//291
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	console.log(event.target); 
// 	console.log(this);         
// });

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	console.log(event.target); 
// 	//console.log(this);         
// 	//console.log(elem.tagName.toLowerCase());
// 	//console.log(event.target.tagName.toLowerCase()); 	

// 	let chek = event.target.tagName.toLowerCase();
// 	if(chek == 'li') {
// 		event.target.textContent += '!';
// 	} else  if (chek == 'ul') {
// 		let p = document.createElement('p');
// 		p.innerHTML = '<li> text</li>';
// 		elem.appendChild(p)
// 	}
// });


//292
// let elem = document.querySelector('input');
// elem.addEventListener('input', function(event) {
// 	console.log('+');
// 	console.log(event.key);
// 	console.log(event.code);
// });


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	if (event.ctrlKey) {
// 		console.log('нажат Ctrl');
// 	}
	
// 	if (event.altKey) {
// 		console.log('нажат Alt');
// 		//elem.style.backgroundColor = 'red';
// 		event.target.textContent += '1';

// 	}
	
// 	if (event.shiftKey) {
// 		console.log('нажат Shift');
// 		event.target.textContent += '2';
// 	}
// });

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function() {
// 	console.log('голубой');
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });

// elem1.addEventListener('mousemove', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('mousemove', function() {
// 	console.log('голубой');
// });
// elem3.addEventListener('mousemove', function() {
// 	console.log('красный');
// });

// let div = document.querySelector('div');
// let ul = document.querySelector('ul')

// div.addEventListener('click', function(event) {
// 	if (event.target.matches('div')) {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.matches('ul')) {
// 		console.log('ul');
// 		let p = document.createElement('li');
// 		p.innerHTML = 'text';
// 		ul.appendChild(p)
// 	}
// 	if (event.target.matches('li')) {
// 		console.log('li');
// 		event.target.textContent += '1';
// 	}

// });

// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');

// button.addEventListener('click', function(event) {
// 	block.classList.add('active');
// 	event.stopImmediatePropagation();
// });

// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });

//300

// let list = document.querySelector('ul')
// let button = document.querySelector('button');
// list.addEventListener('click', function(event) {
// 	// console.log(this);         
// 	// console.log(event.target);
// 	event.target.innerHTML = event.target.innerHTML + '!';
// });
// button.addEventListener('click',()=>{
// 	let item = document.createElement('li');
// 	item.innerHTML = 'item';
// 	list.appendChild(item);
// })


// let list = document.querySelector('ul')

// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
// 	if (li) {
// 		li.innerHTML = li.innerHTML + '!';
// 	}
// });

//303

"use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	console.log(this); 

	
// 	function child() {
// 		console.log(this); 
// 	}
// 	child();
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	console.log(this.value); // что выведет?
	
// 	function child() {
// 		console.log(this.value); // что выведет?
// 	}
// 	child();
// }

"use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {

// 	let self = this.value;
// 	alert(square());
// 	function square() {
// 		return self**2;
// 	}
// }


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {

// 	alert(square(this));
// 	function square(param) {
// 		return param.value*param.value;
// 	}
// }


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	let square = () =>  {
// 		return alert(this.value*this.value);
// 	}
// 	square();
// }

//305
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
// 	console.log(this.value); // выведет value инпута
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

//Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + 
// 		surname); 
// }

// func.call(elem,'John', 'Smit');
// func.apply(elem,['John', 'Smit']);

// let elem = document.getElementById('elem');

// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + 
// 		surname); 
// }
// func = func.bind(elem);
// func('John', 'Smit'); 
// func('Eric', 'Luis');

//308

// let num = 0;
// setInterval(function() {
// 	console.log(num +=1);
// }, 3000);

// setInterval(() => console.log(++num), 1000);

// let timerId1 = setInterval(function() {
// 	console.log('!')
// }, 1000);
// let timerId2 = setInterval(function() {
// 	console.log('5455')
// }, 1000);

// alert(timerId1); // выведет номер таймера
// alert(timerId2); // выведет номер таймера

// let i = 0;

// let timerId = setInterval(function() {
// 	console.log(++i);
	
// 	if (i >= 10) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

// let i = 10;

// let timerId = setInterval(function() {
// 	console.log(--i);
	

// }, 1000);

// let start = document.querySelector('#start');

// start.addEventListener('click', function() {
// 	let i = 0;
// 	setInterval(function() {
// 		console.log(++i);
// 	}, 1000);
// });

// let start = document.querySelector('#start');

// start.addEventListener('click', function() {
// 	let i = 100;
// 	let timerId = setInterval(function() {
// 		console.log(--i);
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}

// 	}, 100);
// });

// let start = document.querySelector('#start');

// start.addEventListener('click', function func() {
// 	let i = 0;
	
// 	setInterval(function() {
// 		console.log(++i);
// 	}, 1000);
	
// 	this.removeEventListener('click', func); // отвязываем обработчик
// });


//312
// let timerId;
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// start.addEventListener('click', function() {
// 	let i = 0;
	
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let timerId;
// let i = 10;
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// start.addEventListener('click', function() {

// 	timerId = setInterval(function() {
// 		console.log(--i)
// 		if (i <= 0) {
// 			clearInterval(timerId);
// 		}
// 	}, 100);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// 	console.log(i)
// });

// Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:
// let timerId;
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + 
// 			date.getSeconds()); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + 
// 			date.getSeconds()); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + 
// 			date.getSeconds()); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

//Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// function func (){
// 	timerId = setInterval(function() { 
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + 
// 			date.getSeconds()); 
// 	}, 1000);
// 	this.removeEventListener('click', func); 
// }

// start.addEventListener('click', func);

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// 	start.addEventListener('click', func);
// });

//313

// let elem = document.querySelector('#elem');

// setInterval(function() {
// 	elem.value = Number(elem.value) + 1;
// }, 1000);

// let timerId = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// 	if(elem.value <= 0 ) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

//
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		elem.value = Number(elem.value) + 1;
// 	}, 1000);
// });

// elem.addEventListener('click', function() {
// 	setInterval(() => console.log(++this.value), 1000);
// });

// elem.addEventListener('click', function() {
// 	setInterval(()=>elem.value = Number(elem.value) + 1, 1000);
// });


// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// function makeWorker() {
// 	let name = "Pete";
  
// 	return function() {
// 	  alert(name);
// 	};
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work();

// function bind(){
// 	return 
// }


// let person1 = {name: 'V1', age: 11, job:'front1'}
// function logPerson() {
// 	console.log(`Person: ${this.name}, ${this.age}, ${this.job} `)
// }
// function bind (context, fn) {
// 	return function () {
// 		//fn.apply(context, args1)
// 		fn.apply(context)
// 	}
// }
// bind(person1, logPerson)()

// function showHelp(help) {
// 	document.getElementById('help').innerHTML = help;
// }

// function makeHelpCallback(help) { 
// 	return function() {
// 		showHelp(help);
// 	};
// }

// function setupHelp() {
// 	var helpText = [
// 		{'id': 'email', 'help': 'Ваш адрес e-mail'},
// 		{'id': 'name', 'help': 'Ваше полное имя'},
// 		{'id': 'age', 'help': 'Ваш возраст (Вам должно быть больше 16)'}
// 		];

// 	for (var i = 0; i < helpText.length; i++) {
// 		var item = helpText[i];
// 		// console.log(item)
// 		// console.log(item.id)
// 		// console.log(item.help)
// 		document.getElementById(item.id).onfocus = showHelp(item.help);
// 	}
// }

// setupHelp();

//Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let elem2 = this;
// 	setInterval(function() {
// 		elem2.value = Number(elem2.value) + 1;
// 	}, 1000);
// });

//1 первый вариант решения это сылка сразу да внешнее окружение. Если мы хотим это окружение сделать внутри фунции - это так же решает проблему с ЗИС

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let elem2 = this;
// 	setInterval(()=> elem2.value = Number(elem2.value) + 1 , 1000);
// });


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	function func(self) {
// 		return function() {
// 			console.log(self.value);
// 		}
// 	}
	
// 	setInterval(func(this), 1000);
// });

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() { //Вешаем событие
// 	setInterval((function(self) { //Вызываем функцию с вложением функции, которая возвращает функцию. ссылая на элемент повешаного события.
// 		return function() {
// 			console.log(self.value);
// 		}
// 	})(this), 1000);
// });


//315
// let elem = document.querySelector('#elem');



// elem.addEventListener('click', function() {//по клику у нас вызывается функция
// 	setInterval(function(self) { //функция интервалов - функция с параметром селф, данный селф валюе -- , через 1000 мск, в функцию отправляется параметр зис
// 		self.value--;
// 	}, 1000, this);
// });

//316 Практика на таймеры и работу с DOM в JavaScript

//1 Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.

// let btn = document.querySelector('#start');
// let p = document.querySelector('p');
// btn.addEventListener('click', function() {
// 	setInterval(function(self) { 
// 		self.textContent = + self.textContent +1;
// 	}, 1000, p);
// })

//2 Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.

// let btn = document.querySelector('#start');
// let p = document.querySelector('p');
// btn.addEventListener('click', function() {
// 	setInterval(function(self) { 
// 		if (self.textContent>0) {self.textContent = + self.textContent -1;}
		
// 	}, 1000, p);
// })

//3 Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setInterval(function(self) { 
// 		self.value = self.value**2;
// 	}, 1000, this);
// });

//4 Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// console.log(p.textContent)
// elem.addEventListener('blur', function() {
// 	p.textContent = elem.value;
// 	console.log(p.textContent);
// 	setInterval(function(self) { 
// 		if (p.textContent>0) {
// 			p.textContent = p.textContent - 1;
// 		}
// 	}, 1000, elem.value);
// });

//5 Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// let btn = document.querySelector('#start');

// btn.addEventListener('click', function() {
// 	p.textContent = elem.value;
// 	setInterval(function(self) { 
// 		if (p.textContent>0) {
// 			p.textContent = p.textContent - 1;
// 		}
// 	}, 1000, elem.value);
// })

//6 Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.

// let p = document.querySelector('p');
// let btn1 = document.querySelector('#start1');
// let btn2 = document.querySelector('#start2');

// btn1.addEventListener('click', function() {
// 	let timerId = setInterval(function() { 
// 		if (p.textContent>0) {
// 			p.textContent = +p.textContent + 1;
// 		}
// 	}, 1000, p.textContent);
// 	btn2.addEventListener('click', function() {
// 		clearInterval(timerId);
// 	});
// })


// 7 Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.

// let p = document.querySelector('p');
// setInterval(function() { 
// 	p.classList.toggle("class")
// }, 1000);

//8 Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце:

// let p = document.querySelector('p');
// setInterval(function() { 
// 	let new1 = new Date();
// 	console.log(new1)
// 	p.textContent = new1.getHours() + ':'+ new1.getMinutes()+ ':' + new1.getSeconds() ;
// }, 1000);

//317
//Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.

// let p = document.querySelector('p');

// setTimeout(function() {
// 	p.textContent ='10 sec';
// }, 3000);

//Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды выведите число 3. И так далее до бесконечности.
// let i = 0;

// function timer(i) {
// 	//console.log(i);
// 	setTimeout(function() {
// 		//console.log(i);
// 		i = +i+1000;
// 		console.log(i);
// 		let j = 1000;
// 		setInterval(function() {
// 			//console.log(i);
// 			if(j<i) {
// 				console.log(j/1000 + ' сек');
// 				j+=1000;
// 			}
// 		}, 1000);


// 		timer(i);
// 	}, i);
// }
// timer(i);

//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.Используя setInterval.Используя рекурсивный setTimeout.

// function printNumbers(from, to){
// 	let num1 = from;
// 		setInterval(function() {
// 		if(num1<=to) {
// 			console.log(num1++);
// 		}

// 	}, 1000);
// }
// printNumbers(10, 20)

// function printNumbers(from, to){
// 	let num1 = from;
// 		setTimeout(function run() {
// 		if(num1<=to) {
// 			console.log(num1++);
// 			setTimeout(run, 1000);
// 		}

// 	}, 1000);
// }
// printNumbers(10, 29)

//-------------318

// let ol = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function(){
// 	let ol1 = document.createElement('li');
// 	ol1.textContent = 'item';
// 	ol1.addEventListener('click', function() {this.textContent = this.textContent + '!';
// 	});
// 	ol.appendChild(ol1);
// })
// for(let i=0; i<10; i++) {
// 	let ol1 = document.createElement('li');
// 	ol1.textContent = 'item';
// 	ol.appendChild(ol1);
// 	console.log(i);
// }

//Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.


// let ol = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function(){
// 	for(let i=1; i<=10; i++) {
// 	let ol1 = document.createElement('li');
// 	ol1.textContent = i;
// 	ol.appendChild(ol1);
// 	console.log(i);
// 	}
// })

// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = '!';
	
// 	// Навешиваем обработчик клика:
// 	p.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	});
	
// 	parent.appendChild(p);
// }

// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 5; i++) {
// 	let input = document.createElement('input');
// 	parent.appendChild(input);
// 	console.log(i);
// 	input.textContent = i;
// 	input.addEventListener('blur', function() {
// 		//console.log(this.value);
// 		let z = document.createElement('p');
// 		z.innerHTML = this.value; 
// 		parent.appendChild(z);
// 	});
// }


// let btn = document.querySelector('#button');

// btn.addEventListener('click',function(){
// 	let elems = document.querySelectorAll('li');
// 	elems[elems.length-1].remove();
// })
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }

// let elem = document.querySelector('#elem');
// let li1 = document.createElement('li');
// li1.innerHTML = 'start';
// let li2 = document.createElement('li');
// li2.innerHTML = 'finish';
// elem.prepend(li1);
// elem.appendChild(li2);

// let elem1 = document.querySelector('#elem1');
// let li3 =document.createElement('li')
// li3.innerHTML = '!';

// elem.insertBefore(li3, elem1)
// li3.addEventListener('click',function(){
// 	li3.innerHTML = li3.innerHTML +'!';
// })

// let elem = document.querySelector('#elem');
// let p1 = document.createElement('p');
// p1.innerHTML = 'beforeBegin';

// elem.insertAdjacentElement('beforeBegin', p1);

// let p2 = document.createElement('p');
// p2.innerHTML = 'afterEnd';
// elem.insertAdjacentElement('afterEnd', p2);

// let p3 = document.createElement('p');
// p3.innerHTML = 'afterBegin';
// elem.insertAdjacentElement('afterBegin', p3);

// let p4 = document.createElement('p');
// p4.innerHTML = 'beforeEnd';
// elem.insertAdjacentElement('beforeEnd', p4);

// let elem = document.querySelector('#elem');
// elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div> ');

let parent = document.querySelector('#parent');
let elem = parent.querySelector('.elem');

let clone = elem.cloneNode(false);
parent.appendChild(clone);
console.log(clone)
