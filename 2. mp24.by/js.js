// let w1 = "No offense but,\nYour writing is among the worst I've ever read";
// console.log(w1);

// function disemvowel(str) {
//     let w2 = str.split('');
//     let w3 = ['a', 'e', 'i', 'o', 'u',];
//     //console.log(w2.length);
//     for(let i = w2.length-1; i>=0; i--){
//         console.log(i);
//         for(let j = 0; j<w3.length;j++){
//             if(w2[i].toUpperCase() == w3[j].toUpperCase()){
//                 console.log( w2[i].toUpperCase()+' _____  '+w3[j].toUpperCase())
//                 w2.splice(i, 1);
//                 break;
//             } 
//         }
//     }
//     console.log(w2.join(''));
//     return w2.join('');
//   }
//   disemvowel(w1)

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }



// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// function formatDuration (seconds) {
//     let d = Number(seconds);
//     if (d==0){
//         return ('now');
//     }
//     let years  = Math.floor(d / (3600 * 24 * 365));
//     let days = Math.floor((d / (3600 * 24)) % 365);
//     //console.log(days)
//     let h = Math.floor((d / 3600) % 24);
//     //console.log(h)
//     let m = Math.floor(d % 3600 / 60);
//     //console.log(m)
//     let s = Math.floor(d % 60);
//     //console.log(s)

//     let yearDisplay = years > 0 ? years + (years == 1 ? " year" : " years")  : "";
//     let dayDisplay = days > 0 ? (years > 0 && ((d / (3600 * 24)) % 365>0) ? ', ' : "" ) + days + (days == 1 ? " day" : " days") + (h > 0 && m > 0 || m > 0 && s > 0 || h > 0 && s > 0 ? ', ' : "" )  : "";
//     let hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") + (m > 0 && s>0 ? ', ' : "" )+ (s > 0 && m==0  ? ' and ' : "" )+ (s == 0 && m > 0  ? ' and ' : "" ) : "";
//     let mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") + (s > 0 ? ' and ' : "" ) : "";
//     let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
//     console.log(dayDisplay + hDisplay + mDisplay + sDisplay);
//     return yearDisplay + dayDisplay + hDisplay + mDisplay + sDisplay; 
//   }



// function formatDuration (seconds) {
// var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//     res = [];

// if (seconds === 0) return 'now';

// for (var key in time) {
//     console.log(time[key]);
//     if (seconds >= time[key]) {
//     var val = Math.floor(seconds/time[key]);
//     res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//     console.log(res);
//     seconds = seconds % time[key];
//     console.log(seconds);
//     }
// }

// console.log(res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0])
// console.log(res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and' + '$1') : res[0])

// return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
// }

// /,([^,]*)$/ // Что ищем шаблон поиска
// ([^,]*) // запоминает сопоставление. Называется «захватывающие скобки».
// * // Сопоставляется с предшествующим элементом - сравнивает конец строки
// [^,] //о есть он сопоставляется со всеми символами, что не заключены в квадратные скобки.
// $// Сопоставляется c концом ввода.



// ' and'+'$1' // Шаблон замены
// '$1' // n-ная сопоставившаяся подгруппа из объекта RegExp 

//formatDuration (1);
// formatDuration (62);
// formatDuration (120);
//formatDuration (36345264706470);
// formatDuration (3662);

// Р. 83/255=0,3(мин) Г. 181/255=0,7(макс) В. 169/255=0,66
// V=((0,7+0,3)/2)*100=50%
// 50%!=70%
// (Math.Max ​​(R/255, G/255, B/255) + Math.Min (R/255, G/255, B/255))/2

// console.log("#000000");


// Варианты обьявления и создания

// let fruits = ['Яблоко', 'Банан'];
// console.log(fruits.length);

// fruits.forEach(function(item, index, array) {
//     console.log(item);
//   });

// let board = [
//     ['R','N','B','Q','K','B','N','R'],
//     ['P','P','P','P','P','P','P','P'],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     ['p','p','p','p','p','p','p','p'],
//     ['r','n','b','q','k','b','n','r'] ];
  
//   console.log(board.join('\n') + '\n\n');

// let arr1 = ['001', '002', '003', '004'];
// function f1(arr1){
//     for(let i=0;i<arr1.length; i++){
//         console.log(arr1[i]);
//     }
// }
// f1(arr1);

// let arr2 = [1,2,3,4,5,6,7,8,9]
// function sumArr(array) {
//     let sum = 0;
//     for ( let i=0; i<=array.length-1; i++) {
//         sum += array[i];
//     }
//     console.log(sum);
// }

// sumArr(arr2)


// let arr2 = [13,42,63,849,59,69,79,38,94]
// function sumArr(array) {
//     let min = array.length ? array[0]: 0;

//     for ( let i=0; i<array.length; i++) {
//         if(array[i]<min){
//             min = array[i];
//         }
//     }
//     console.log(min);
// }

// sumArr(arr2)



// --------------  ИКОНКИ ОБРАТНОЙ СВЯЗИ   --------------  
// console.log('work')

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix);
//  let matrixX = []

// function showM (matrix){
//     for( let i = 0; i< matrix.length; i++){
//         for( let j = 0; j< matrix.length; j++){
//             // console.log(i,j);
//             console.log(sumM(i,j))
//             matrixX.push(sumM(i,j))
//         }
//     }
//     console.log(matrix)
// }
// showM(matrix)

// function sumM( i , j ) {
//     console.log(i ,j)
//     // console.log(matrix.length)
//     let startI;
//     let finishI;
//     let startJ;
//     let finishJ;

//     if(i == 0) {
//          startI = 0;
//          finishI = 1;
//     }
//     if(i > 0 && i < matrix.length-1) {
//          startI = i - 1;
//          finishI = i + 1;
//         // console.log(i);
//     }
//     if(i == matrix.length-1) {
//          startI = i - 1;
//          finishI = i;
//     }

//     if(j == 0) {
//          startJ = 0;
//          finishJ = 1;
//     }
//     if(j > 0 && j < matrix.length-1) {
//          startJ = j - 1;
//          finishJ = j + 1;
//     }
//     if(j == matrix.length-1) {
//          startJ = j - 1;
//          finishJ = j;
//     }
//     let sum = 0;
//     let matrixSum = [];
//     for( let i = startI; i <= finishI; i++) {
//         for( let j = startJ; j <= finishJ; j++) {
//             sum += matrix[i][j];
//             // let matrixSum[i][j] = sum;
//         }
//     }

//     // console.log( sum );
//     // console.log(matrixSum)
//     return sum;

// }

// sumM( 1 , 1 )
// console.log(matrixX)

// --------------  ИКОНКИ ОБРАТНОЙ СВЯЗИ   --------------  


