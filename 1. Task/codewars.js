
/*
let s = "test";

function getMiddle(s) {

	let sl = s.length;
	if (sl == 1 || sl == 2 ) {
		return console.log(s);

	}
	if (sl % 2 == 0 && sl>3) {
		console.log(s + ' _ ' + s[sl/2-1]+s[sl/2])
	}
	if (sl % 2 !== 0 && sl>=3) {
		console.log(s + ' _ ' + s[Math.floor(sl/2)])
	}
	
	console.log((s.length-1)/2);
	console.log(s.length/2+1);
	console.log(s.slice((s.length-1)/2, s.length/2+1))
	let middle = Math.floor(s.length/2);
  
	return console.log( s.length % 2 === 0 ? s.slice(middle-1, middle+1) : s.slice(middle, middle+1))
}
getMiddle("A")
getMiddle("Aa")
getMiddle("test")
getMiddle("testing")
getMiddle("middle")
getMiddle("middle11middle")
*/

/*

function highAndLow(numbers){
    let arr = numbers.split(' ');
    console.log(arr);
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++){
        if (Number(arr[i])< min){
           min = arr[i];
        } else if (Number(arr[i]) > max) {
            max = arr[i];
        }
    } 
    return (max + ' ' + min)
}

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // "42 -9"
highAndLow("1 2 3") // "3 1"*/

/*
function isIsogram(str){
    let str1 = str.toUpperCase();
    let arr = str1.split('');
    if(arr.length <= 1) {
        console.log('true')
        return true;
    }
    arr.sort();
    for (let elem of arr) {
        elem = elem.toUpperCase();
    }

    for (let i = 0; i<arr.length; i++) {
        if(arr[i] == arr[i+1]) {
            console.log(str + ' ' +'false')
            return false;
        } 
        if (arr[i] == arr[arr.length - 1]) {
            console.log(str + ' ' +'true') 
            return true;
        }
    }
  }

isIsogram("Dermatoglyphics")//, true );
isIsogram("isogram")//, true );
isIsogram("aba")//, false, "same chars may not be adjacent" );
isIsogram("moOse")//, false, "same chars may not be same case" );
isIsogram("isIsogram")//, false );
isIsogram("")//, true, "an empty string is a valid isogram" );
*/

/*

function explode(s) {
    let arr = s.split('');
    if(arr.every(elem=>elem=='0')) {
        console.log('ноль');
        return ('');
    }
    let arr1 = [];
    for(let elem of arr) {
        for( let i =1; i <= elem; i++) {
            arr1.push(elem);
        }    
    }
    console.log(arr1.join(''))
    return arr1.join('')
  }


  explode("312")//, "333122"],
  explode("102269")//, "12222666666999999999"],
  explode("0987")// ""],
  explode("000")// ""],
  explode("123") //"122333"]*/


/*
function duplicateEncode(word){
let arr = word.split('');
console.log(arr);
let arr1 = [];

}
duplicateEncode("din") // "((("
duplicateEncode("recede")// "()()()"
duplicateEncode("Success")// ")())())"
duplicateEncode("(( @")// "))((" 

*/

/*
function nthFibo(n) {
    let a = 0;
    let b = 1;
    for (let i = 1; i < n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    console.log(a);
  }


    nthFibo(1)
    nthFibo(2)
    nthFibo(3)
    nthFibo(4)
*/
/*
function deepCount(a){
    Array.isArray(a)
      ? console.log(1 + Math.max(0, ...a.map(deepCount)))
      : console.log('0');
  }

deepCount([]) //, 0, "Expected 0")
deepCount([1, 2, 3]) //, 3, "Expected 3")
//deepCount(["x", "y", ["z"]]) //, 4, "Expected 4")
//deepCount([1, 2, [3, 4, [5]]]) //, 7, "Expected 7")
//deepCount([[[[[[[[[]]]]]]]]]) //, 8, "Expected 8")*/


/*
function getParticipants(handshakes){
    if (handshakes == 0) {
        return 0;
      }
    let k0 = handshakes*2;


    function kk0(k0) {
        console.log('Стартовое значение в функции под --------    '+ k0);
        let k = 0; 
        let k1 = 0;
        for ( let i = 1; i<k0; i++) {
            k+=1;
            console.log('Функция @1 '+ ' счетчик ' + k);
            }
        for( let j = k0; j>1;j--) {
            k1+=1;
            console.log('Функция @2 '+  ' счетчик ' + k1);  
        }
        let sum = k + k1;
        console.log('Сумма рукопожатий ' + sum );
        if (sum > handshakes) {
            kk0(k0 - 1);
        } else if (sum == handshakes){
            alert(k0+1);
        } else if ( sum < handshakes) {
            alert(k0+1);
        }
    }
    kk0(k0);
}*/


/*
function getParticipants(handshakes){
    if (handshakes == 0){
        console.log(0);
        return 0;
    }



    let num = handshakes
    let result = 0;
    let i = 0;
    while (result < num){
        i = i + 1;
        result = result + i;
        console.log(result +' значение и = ' + i );
    }
    console.log(i + 1);
    return (i+1);
    //https://www.codewars.com/kata/5574835e3e404a0bed00001b/solutions/javascript


}

getParticipants(0)//0
getParticipants(1)//2
getParticipants(2)//3
getParticipants(3)//3
getParticipants(4)
getParticipants(5)
getParticipants(6)//4
getParticipants(7)//5
*/


/*
function getParticipants(handshakes){
  let farmers = 0
  while(handshakes > farmers * (farmers - 1) / 2){
    farmers++
  }
  return farmers
}*/


//const getParticipants = handshakes => handshakes > 0 ? Math.ceil( ( 1 + (1 + 8 * handshakes)**0.5) / 2 ) : 1



//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
/*
let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
let str = 'Hello';
let str2w = "Two words";
let str3w = " Gap ";
function wave(str){
    let result1 = [];
    let strL = str.length;
    console.log(strL);

    for(i = 0; i < strL; i++) {

        str = str.toLowerCase();
        let str1 = str.split('');
        if(str1[i] !== ' ') {
        //console.log(str1);
        str1[i] = str1[i].toUpperCase();
        str1 = str1.join('');
        result1.push(str1);
        //console.log(str1);
        //console.log(result1);
        //result1 = result1.join('');
        } else {

        }

    }
    console.log(result1)
    return result1
    // Code here
  }

wave(str);
wave(str2w);
wave(str3w);*/

/*
function wave(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    newArr.push(copy.join(''))
    }
  }
  return newArr
}
*/

//https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/solutions/javascript
/*
function isDivideBy(number, a, b) {

    if(number%a==0 && number%b==0) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
  // good luck
}


isDivideBy(-12, 2, -6)//, true);
isDivideBy(-12, 2, -5)//, false);
isDivideBy(45, 1, 6)//, false);
isDivideBy(45, 5, 15)//, true);
isDivideBy(4, 1, 4)//, true);
isDivideBy(15, -5, 3)//, true);*/

/*
function capitalizeWord(word) {    
    word = word[0].toUpperCase()+ word.slice(1);
    console.log(word)
    return word;
  }

  capitalizeWord('word')*/

/*
  function century(year) {
    // Finish this :)

    return console.log(Math.ceil(year));
  }

  century(2000)*/

/*

  function fakeBin(x){
    let x1=[];
    for(let i=0; i<x.length;i++){
        let j=0;
        if(x[i]>=5) {
            j = '1';
        } else {
            j = '0';
        }
        x1.push(j)
    }
    console.log(x1.join(''));
 }
fakeBin('45385593107843568') // 01011110001100111
//https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/javascript

*/

/*
function digits(n) {
    let num1 = Number(String(n).length)
    console.log(num1)
    return num1
// code goes here
}
digits(5)
*/


/*
function removeChar(str){

//You got this!
    return console.log(str.slice(1, str.length - 1))

};


removeChar('eloquent')*/
/*
function noSpace(x){
    console.log(x.replace(/\s/g,''));
  }

  noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')*/

/*
  function solution(str, ending){
    let x = ending.length;
    console.log(str.slice( -x));
    console.log(str.slice( -ending.length))

    if(str.slice( -ending.length) == ending || ending =='') {
        console.log(true)
      return true
    } else {
        console.log(false)
      return false
      console.log(true)
    }
    
    // TODO: complete
  }

  //solution('abcde', 'cde')
  //solution('abcde', 'abc')
  solution('abcde', '') //false
  */
/*
  function finalGrade (exam, projects) {
    if(exam>90||projects>10) {
        console.log(90)
      return 100
    }
      if(exam>75&&projects>=5) {
        console.log(90)
      return 90
    }
      if(exam>50&&projects>=1) {
        console.log(75)
      return 75
    }
        if(exam<50||projects<1) {
            console.log(0)
      return 0
    }
  }

finalGrade (0, 2)
finalGrade (75 , 1)
*/
//https://www.codewars.com/kata/5ad0d8356165e63c140014d4/solutions/javascript
/*

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
    if(mpg*fuelLeft >= distanceToPump) {
        console.log(true)
      return true
    } else {
        console.log(false)
      return false
    }
    // TODO
  };


zeroFuel(50, 25, 2)//, true);
zeroFuel(100, 50, 1)//, false);*/
/*
function toBinary(n){
    console.log(n);
    let binary = (n % 2).toString();
    console.log(binary);
    for (; n > 1; ) {
        n = parseInt(n / 2);
        console.log(n)
        //binary =  (n % 2) + (binary);
        //console.log(binary)
    }
    console.log(binary);
  return Number(binary);
}

//toBinary(1)
////toBinary(2)
//toBinary(3)
toBinary(50)*/
/*
let data = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
function dataReverse(data) {
  let data1=[]
  data1.push(data.slice(8).join(''))
  data1.push(data.slice(8).join(''))
  data1.push(data.slice(8).join(''))
  data1.push(data.slice(8).join(''))
  return data1
}
*/
// console.log(dataReverse(data))

// РС
// let matrix = [
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
//   ];


//   function countCats( matrix ) {
//     let cats1 = [];
//     let cats = matrix.forEach(elem =>cats1.push((elem.filter(elem1 => elem1 == '^^'))));
//     // let stat = cats.length;
//     console.log(cats1.flat().length);
//     return cats1.length;
//   }
// countCats(matrix);


// let maxNumber = Math.pow(10, 1000);
// console.log(maxNumber == Infinity);

// function dateSample(sampleActivity) {
//   console.log(sampleActivity);
//   let num = Number(sampleActivity);
//   // console.log(num);
//   if(isNaN(num)== true || (sampleActivity == Infinity) == true || num < 0 || num == 3) {
//     console.log('infi');
//     return false;
//   } else {
//     num = Math.ceil((Math.log(15/num))/(0.693/5730));
//     console.log(num);
//     if(num<0 || num == Infinity) {
//       console.log('menshe 0');
//       return false;
//     } else {
//       console.log(num);
//       return num;
//     }
//   }
// }

// dateSample('3');






// function countCats( matrix ) {
//   let cats1 = [];
//   let cats = matrix.forEach(elem =>cats1.push((elem.filter(elem1 => elem1 == '^^'))));
//   // let stat = cats.length;
//   console.log(cats1.flat().length);
//   return cats1.flat().length;
// }



// function dateSample(sampleActivity) {
//   console.log(sampleActivity);
//   let num = Number(sampleActivity);
//   // console.log(num);
//   if(isNaN(num)== true || (sampleActivity == Infinity) == true || num < 0 || typeof sampleActivity !== 'string') {
//     console.log('infi');
//     return false;
//   } else {
//     num = Math.ceil((Math.log(15/num))/(0.693/HALF_LIFE_PERIOD));
//     console.log(num);
//     if(num<0 || num == Infinity) {
//       console.log('menshe 0');
//       return false;
//     } else {
//       console.log(num);
//       return num;
//     }
//   }
// }

// function createDreamTeam(members) {
//   console.log(members);
//   if(!Array.isArray(members)) {
//     console.log('NO Array');
//     return false;
//   } else {
//     let sortTeam = members.filter(elem => typeof elem == 'string');
//     // sortTeam.forEach(elem => elem.split(' ').join(''))
//     console.log(sortTeam);
//     let push1 =[];
//     sortTeam.forEach(elem => push1.push(elem.split(' ').join('').substring(0, 1).toUpperCase()));
//     let teamName = push1.join('').split('').sort().join('');
//     console.log(teamName);
//     return teamName;
//   }
// }


// let team = ['Matt', 'Ann', 'Dmitry', 'Max']
// createDreamTeam(team);
// createDreamTeam('!');



// const winter= new Date(2019, 11, 22, 23, 45, 11, 500);
// const spring = new Date(2018, 4, 17, 11, 27, 4, 321);
// const summer = new Date(2017, 6, 11, 23, 45, 11, 500);
// const autumn= new Date(1994, 8, 26, 3, 0, 11, 500);

// springDate = new Date(2019, 11, 22, 23, 45, 11, 500);


// function getSeason(date) {
//   let dat = date;
//   console.log(dat);
//   if(dat == undefined) {
//     let str1 = 'Unable to determine the time of year!';
//     console.log('Unable to determine the time of year!')
//     return str1;
//   }
//   try {
//     date.getTime()
//   } catch (e) {
//       throw new Error('Invalid date!')
//   }
  
//   let m = dat.getMonth();
//   console.log(m);

//   if(m<2 || m>10) {
//     console.log('winter');
//     return('winter')
//   }
//   if(m>1 && m<5) {
//     console.log('spring');
//     return('spring');
//   }
//   if(m>4 && m<8) {
//     console.log('summer');
//     return('summer');
//   }
//   if(m>7 && m<11) {
//     console.log('autumn');
//     return('autumn');
//   }
// }


// module.exports = {
//   getSeason
// };


// function calculateHanoi(disksNumber, turnsSpeed) {
//   let num1 = 2 ** disksNumber - 1
//   let num2 = Math.floor(num1 / turnsSpeed * 3600)
//   return {turns: num1, seconds: num2}
// }

// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }
// let arrT = [...arr];

// arrT.map((elem, index, array) => {console.log(index + " - " + elem + ' - ' + array);
//   if( elem == '--discard-prev' ){
//     if (array[index - 1]) {
//       array[index] = "-";
//       array[index - 1] = "-";
//       // array.splice(index-1,2)
//     } else {
//       array.splice(index,1)
//     }    
//   }
//   if( elem == '--discard-next'){
//     array[index] = "-";
//     array[index + 1] = "-";
//     // array.splice(index,2)
//     // console.log('check')
//   }
//   if( elem == '--double-next'){
//     if (array[index + 1]) {
//       array[index] = array[index + 1];
//     } else {
//       array.splice(index,1);
//     }
//     console.log('check')
//   }
//   if( elem == '--double-prev'){
//     if (array[index - 1]) {
//       array[index] = array[index - 1];
//     } else {
//       array.splice(index,1);
//     }
//   }
// })
// return arrT.filter((elem) => elem !== "-");;
// }

// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]) 


// const chainMaker = {
//   chain: [],
//   getLength() {
//     return this.chain.length;
//   },


// addLink(value) {
//   if (value === undefined) {
//     this.chain.push("");
//   } else {
//     this.chain.push(value);
//   }
//   console.log(this);
//   return this;
// },


// removeLink(position) {
//   if (this.chain.length === 0 || position < 1 || position >= this.getLength() ||    typeof position !== "number" ||!Number.isInteger(position)) {
//       this.chain = [];
//       throw new Error("You can't remove incorrect link!");
//   }
//   this.chain.splice(position-1, 1);
//   return this;
// },




//   reverseChain() {
//     this.chain = this.chain.reverse();
//     return this;
//   },
//   finishChain() {
//     console.log(this.chain);
//     let r = this.chain.map(elem => elem = '( ' + elem + ' )')
//     console.log(r);
//     this.chain = [];
//     return r.join("~~");
//   },
// };


// class DepthCalculator {
//   calculateDepth(arr) {
//     let count = 1;
//     if (arr.some(elem => Array.isArray(elem))) { //проверяет, проходит ли хотя бы один элемент в массиве проверку
//       arr = arr.flat() //  подмассивов были рекурсивно "подняты" 
//       count += this.calculateDepth(arr);
//       return count;
//     }
//     return count;
//   }
// }

// console.log(1);

//НЕ ТАК ПОНЯЛ ЛОГИКУ ЗАДАЧИ

// function repeater(str, options) {
//   let string = "";
//   if (options.separator === undefined) {
//     options.separator = "+";
//   } 
//   if (typeof options.separator !== "string") {
//     options.separator = String(options.separator);
//   }
//   if (options.additionSeparator === undefined) {
//     options.additionSeparator = "|";
//   }
//   if (typeof options.additionSeparator !== "string") {
//     options.additionSeparator = String(options.additionSeparator);
// }



// let arrStr=[];
// for(let i=1;  i<=options.repeatTimes; i++) {
//   arrStr.push(str);
// }
// console.log(arrStr);

// let arrAdd=[];
// for(let i=1;  i<=options.additionRepeatTimes; i++) {
//   arrAdd.push(str + options.addition);
//   arrStr[i-1] = arrAdd[i-1];
// }

// console.log(arrAdd);
// console.log(arrStr);
// console.log(arrStr.join(options.additionSeparator));
// return arrStr.join(options.additionSeparator);

// }


// repeater('la', { repeatTimes: 3 })// 'la+la+la'

// repeater('STRING',{ repeatTimes: 5, addition: 'PLUS', additionRepeatTimes: 2, additionSeparator: '00'});

//repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) //=>'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

// function repeater(str, options) {
//   // let string = "";
//   str = String(str);
//   if (options.separator === undefined) {
//     options.separator = "+";
//   } 
//   if (typeof options.separator !== "string") {
//     options.separator = String(options.separator);
//   }
//   if (options.additionSeparator === undefined) {
//     options.additionSeparator = "|";
//   }
//   if (typeof options.additionSeparator !== "string") {
//     options.additionSeparator = String(options.additionSeparator);
//   }
//   if(options.addition === null) {
//     options.addition =String(options.addition);
//   } 


//   let add1 = xxx1(options.addition, options.additionRepeatTimes,  options.additionSeparator);
//   let rez = xxx0(str, options.repeatTimes,  options.separator, add1);

//   function xxx0(str, repeat=1, add , add1) {

//     let arr1=[];
//     for( let i = 1; i<= repeat; i++){
//       arr1.push(str + add1);
//       arr1.push(add);
//     }
//     arr1.pop()
//     console.log(arr1.join(''));
//     // console.log(str); 
//     // console.log(num1);
//     let rez = arr1.join('');
//     return rez;
//   }

//   function xxx1(str, repeat=1, add ) {
//     add = String(add);
//     let arr1=[];
//     for( let i = 1; i<= repeat; i++){
//       arr1.push(str);
//       arr1.push(add);
//     }
//     arr1.pop()
//     console.log(arr1.join(''));
//     console.log(str); 

//     let rez = arr1.join('');
//     console.log(arr1);
//     return rez;
//   }
//   return rez;
// }


// repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })
//'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'

// repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })// 'TESTstrADD!'
// repeater('STRING_OR_DEFAULT', { repeatTimes: 2, addition: 'STRING_OR_DEFAULT' })
// repeater('la', { repeatTimes: 3 })  //'la+la+la'
// repeater('la', { repeatTimes: 3, separator: 's' }) //, 'laslasla'
// repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 })// , 'la+sla+sla+');


// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

// console.log('STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS')


// function repeater(str, options) {
//   str = String(str);
//   if (options.separator === undefined) {
//     options.separator = "+";
//   } 
//   if (typeof options.separator !== "string") {
//     options.separator = String(options.separator);
//   }
//   if (options.additionSeparator === undefined) {
//     options.additionSeparator = "|";
//   }
//   if (typeof options.additionSeparator !== "string") {
//     options.additionSeparator = String(options.additionSeparator);
//   }
//   if(options.addition === null) {
//     options.addition =String(options.addition);
//   } 



//   let addition = xxx(options.addition, options.additionRepeatTimes,  options.additionSeparator);
//   let strN = str+addition;
//   let string = xxx(strN, options.repeatTimes,  options.separator);

//   function xxx(str, repeat=1, add ) {
//     let arr1=[];
//     for( let i = 1; i<= repeat; i++){
//       arr1.push(str);
//       arr1.push(add);
//     }
//     arr1.pop()
//     console.log(arr1.join(''));
//     // console.log(str); 
//     // console.log(num1);
//     let rez = arr1.join('');
//     return rez;
//   }
//   return rez;
// }

// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
//=>'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'


// function getCommonCharacterCount( s1, s2 ) {
//   let num1 = 0;
//   let arr1 = s1.split('');
//   console.log(arr1);
//   let arr2 = s2.split('');
//   console.log(arr2);
//   let sortArr = [...arr1,...arr2].sort();
//   console.log(sortArr);
//   for (let i = 0; i < sortArr.length; i++) {
//     if (sortArr[i] === sortArr[i + 1]) {
//       num1++;
//       console.log(num1 + ' - ' + i);
//       i++;
//     }
//   }
//   console.log(num1);
//   let arr = [num1, arr1.length, arr2.length].sort();
//   return arr[0]
// }

// getCommonCharacterCount('aabcc', 'adcaa')//=>3
// getCommonCharacterCount('aabcc', 'aaaaaaaa')//=>3

// function deleteDigit(n) {
//   let st = n.toString();
//   let st1 = [];
//   for (let i = 0; i < st.length; i++) {
//     st1.push(+((st.slice(0,i) + (st.slice(i + 1,st.length)))));
//   }
//   function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
//   }

//   return getMaxOfArray(st1)
// }


// module.exports = {
//   deleteDigit
// };


//src/dns-stats.js.

// function getDNSStats(domains) {
//   console.log(domains);
//   let obj = {};
//   let arr = domains.map(elem => check(elem.split('.').map(elem => '.'+ elem).reverse()));
// function check(elem) {
//   let num = '';
//   for( let i = 0 ; i< elem.length; i++) {
//     num += elem[i];
//     obj.hasOwnProperty(num) ? obj[num]++ : obj[num] = 1;
//   }
// }
//   console.log(obj);
//   return obj;
// }



// function getDNSStats( domains ) {
//   let newArr = domains.map(t=> {
//       t = t.split('.');  
//       let arr = [];
//       for (let i = 0; i < t.length; i++){
//           arr.push('.' + t.slice(i).reverse().join('.'));
//       }
//       return arr ;      
//   }).flat().sort();
//      let obj = {};
//      newArr.map(t=> {
//          obj.hasOwnProperty(t) ? obj[t]++ : obj[t] = 1
//      })
//      console.log(obj)
//      return obj
//  }


// getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])

//{'.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1,'.ru.yandex.music': 1}

// function encodeLine(str) {
//   let arr = [];
//   let count = 1;
//   let arrStr = str.split('');
//   for (let i = 0; i < arrStr.length; i++) {
//     if (arrStr[i] === arrStr[i + 1]) {
//       count++;
//     } else {
//       if (count !== 1) {
//         arr.push(count);
//       }
//       arr.push(arrStr[i]);
//       count = 1;
//     }
//   }
//   console.log(arr.join(''))
//   return arr.join('');
// }


///Ваша задача — реализовать функцию, которая принимает строку ( str) и возвращает ее закодированную версию.

// решение ниже помогает в том случае если идет сбор жлементов по всему объекту. Если в строке повторяющие элементы то она их сортирует .

// function encodeLine(str) {
//   let arrStr1 = str.split('');
//   let obj = {};
//   arrStr1.map(t=> {
//     obj.hasOwnProperty(t) ? obj[t]++ : obj[t] = 1
//   })

//   let arr = [];
//   for (let key in obj) {
//     (obj[key] == 1) ? arr.push(key) : arr.push(obj[key] +  key );

//   }
//   console.log(arr.join(''))
// }


// function encodeLine(str) {
//   let strArr = str.split('');
//   let counter = 1;
//   let array = [];
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === strArr[i + 1]) {
//       counter++;
//     } else {
//       if (counter !== 1) {
//         array.push(counter);
//       }
//       array.push(strArr[i]);
//       counter = 1;
//     }
//   }
//   console.log(array.join(''))
//   return array.join('');
// }

// encodeLine('aabbbc')//=>'2a3bc'
// encodeLine('abbcca')

// function renameFiles(names) {

//   console.log(names);

// }
// renameFiles(["file", "file", "image", "file(1)", "file"]);


// function renameFiles(names) {
//   names.map(name => {
//     let counter = 0;
//     for( let i=0; i< names.length; i++) {
//       if(name == names[i]) {
//         if(counter>0) {
//           names[i] = names[i] + `(${counter})`
//         }
//         counter++;
//       }
//     }
//   })
//   console.log(names);
//   return names;
// }
// console.log(["file", "file", "image", "file(1)", "file"]);
// renameFiles(["file", "file", "image", "file(1)", "file"])



// function getEmailDomain(email) {
//   email.split('@').reverse()[0]
//   console.log(email.split('@').pop())
// return email.split('@').pop()
// }
// getEmailDomain('prettyandsimple@example.com') // =>'example.com'


// function isMAC48Address(n) {
//   let test = /([0-9a-fA-F][0-9a-fA-F])-([0-9a-fA-F][0-9a-fA-F])-([0-9a-fA-F][0-9a-fA-F])-([0-9a-fA-F][0-9a-fA-F])-([0-9a-fA-F][0-9a-fA-F])-([0-9a-fA-F][0-9a-fA-F])/
//   return test.test(n)
  // // console.log(n.split('-'));
  // let num = n.split('-');

  // num.map(t => {
  //   if(t.match(/([0-9a-fA-F])/)) {
  //     console.log('yes')
  //   } else {
  //     console.log('no')
  //   }
  // })
  // let regExp = /([0-9a-fA-F]{2}([:-]|$)){6}$|([0-9a-fA-F]{4}([.]|$)){3}/
  // return regExp.test(n)
// }
// isMAC48Address('00-1B-63-84-45-E6')

// console.log('00'.match(/([0-9a-fA-F])/))
// console.log('1B-'.match(/([0-9a-fA-F][0-9a-fA-F]-)/))
// console.log('1B-1B-1B-12'.match(/([0-9a-fA-F][0-9a-fA-F])-([0-9a-fA-F][0-9a-fA-F])-([0-9a-fA-F][0-9a-fA-F])-([0-9a-fA-F][0-9a-fA-F])/))


// function isMAC48Address(n) {
//   let regExp = /([0-9a-fA-F]{2}([:-]|$)){6}$|([0-9a-fA-F]{4}([.]|$)){3}/
//   let test = /([0-9a-fA-F]{2}-[0-9a-fA-F]{2}-[0-9a-fA-F]{2}-[0-9a-fA-F]{2}-[0-9a-fA-F]{2}-[0-9a-fA-F]{2})/
//   console.log(regExp.test(n))
//   console.log(test.test(n))
//   return regExp.test(n)
// }
// isMAC48Address('00-1B-63-84-45-E6')





// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
//  ];

// function getMatrixElementsSum(matrix) {
//   let sum = 0;
//   console.log(matrix);
//   for (let i=0; i< matrix[0].length; i++) {
//     for(let j=0; j<matrix.length; j++) {
//       if(matrix[j][i] !==0) {
//         sum += matrix[j][i]
//       } else {
//         break
//       }
//       console.log(matrix[j][i]);
//     }
//   }
//   console.log(sum)
//   return sum
// }
// getMatrixElementsSum(matrix)// => 9


function minesweeper(matrix) {
  // console.log(matrix);
  for (let i=0; i< matrix[0].length; i++) {
    for(let j=0; j<matrix.length; j++) {
      // sumMatrix (j, i)

      // if(matrix[j][i]) {
      //   matrix[j][i] = 1;
      // } else {
      //   matrix[j][i] = 0;
      // }
      // console.log(matrix[j][i]);
    }
  }
  // console.log(matrix);
  // return sum
}

// let matrix = [
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
//    ]

  //  minesweeper(matrix)

  //  console.log(true + false);


// let matrix =  [true, false, false, false, true, true ]
// function sumMatrix (matrix) {
//   let num1 = 0;
//   for( let i = num1; i<=num2; i++) {

//   }

// }

// let matrix = [
//     [1, 2, 3],
//     [3, 4, 5],
//     [6, 7, 8]
//    ]

// function sumMatrix(matrix, num1, num2){
//   let sum = 0;

//   for (let i = num1 - 1 ; i <= num1 + 1; i++) {
//     for(let j = num2 - 1; j<= num2 + 1; j++) {
//       sum += matrix[i][j]
//     }
//   }
//   console.log(sum)

// }

// sumMatrix(matrix, 1, 1)

// console.log('work')

// let matrix = [
//   [false, false, false],
//   [false, false, false],
// ];
// console.log(matrix);


// let matrixSum = matrix.map(function (item) {
// 	return [...item]
// })

// function sumM( i , j ) {
//   if(matrix[i][j]==1) {
//     return matrixSum[i][j] = 1;
    
//   }
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
//     if(j > 0 && j < matrix[0].length-1) {
//          startJ = j - 1;
//          finishJ = j + 1;
//     }
//     if(j == matrix[0].length-1) {
//          startJ = j - 1;
//          finishJ = j;
//     }
//     let sum = 0;
    
//     for( let i = startI; i <= finishI; i++) {
//         for( let j = startJ; j <= finishJ; j++) {
//             sum += matrix[i][j];
//             // console.log(matrixSum[i][j]);
            
//         }
//     }
    
//     matrixSum[i][j] = sum;
//     console.log(matrixSum[i][j]);
//     console.log( sum );
//     // console.log(matrixSum)
//     return sum;
// }

// // sumM( 1 , 1 )
// // console.log(matrixX)

// // let matrixX = []
// function showM (matrix){
//     for( let i = 0; i< matrix.length; i++){
//         for( let j = 0; j< matrix[0].length; j++){
//             // console.log(i,j);
//             console.log(sumM(i,j))
//            // matrixX.push(sumM(i,j))
//         }
//     }
//     console.log(matrix);
//     console.log(matrixSum);
//     return matrixSum;
// }
// showM(matrix);

// let matrix = [
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
//    ]



// function minesweeper(matrix) {
//   matrix = matrix.map((t, index, array) => {
//       t = t.map((e, indexE, arrayE) => {
//           let arr = [];
//           if (arrayE[indexE - 1]) {
//               arr.push(arrayE[indexE - 1]);
//           }
//           if (arrayE[indexE + 1]) {
//               arr.push(arrayE[indexE + 1]);
//           }
//           if (index > 0 && array[index - 1][indexE - 1]) {
//               arr.push(array[index - 1][indexE - 1]);
//           }
//           if (index > 0 && array[index - 1][indexE]) {
//               arr.push(array[index - 1][indexE]);
//           }
//           if (index > 0 && array[index - 1][indexE + 1]) {
//               arr.push(array[index - 1][indexE + 1]);
//           }
//           if (index < matrix.length - 1 && array[index + 1][indexE - 1]) {
//               arr.push(array[index + 1][indexE - 1]);
//           }
//           if (index < matrix.length - 1 && array[index + 1]) {
//               arr.push(array[index + 1][indexE]);
//           }
//           if (index < matrix.length - 1 && array[index + 1][indexE + 1]) {
//               arr.push(array[index + 1][indexE + 1]);
//           }
//           console.log( arr.filter((t) => t === true).length);
//           return arr.filter((t) => t === true).length;
//       });
//       console.log(t);
//       return t;
//   });
//   console.log(matrix);
//   return matrix;
// }

// minesweeper(matrix)

// arr = [-1, 150, 190, 170, -1, -1, 160, 180]
// arr = [ 11, 16, 2, 2, 4, 9 ]
// function sortByHeight(arr) {
//   // console.log(arr.sort());
//   console.log(arr.filter(e => e > 0).sort((a,b) => a-b));
//   let arr2 = arr.filter(e => e > 0).sort((a,b) => a-b);
//   let i = 0;
//   let r = arr.map( elem => {
//     if (elem<0) {
//       return elem;
//     } else {
//       i++;
//       return arr2[i-1]
//     }
//   })
//   console.log(r);
//   return r
// }

// sortByHeight(arr)

// function getSumOfDigits( n ) {
//   let sum = 0;
//   let arr = n.toString().split('');
//   console.log(arr);
//   arr.map(elem => {
//     sum += +elem;
//   })
//   if (sum > 9) {
//     sum = getSumOfDigits(sum)
//   }
//   console.log(sum);
//   return sum
// }
// getSumOfDigits( 164556 )


// basic-gs-gs
console.log('w')

//            remove-from-list 

//решение рабочее если к является массивом.
// let l = [3, 1, 2, 3, 4, 5];
// let k = 3;
// let arr = [];
// arr.push(k);
// console.log(arr)
// let rez = l.filter(elem => {
//   if(!arr.includes(elem)) {
//     return elem
//   }
// });
// console.log(rez)
// console.log(l.includes(k.filter(elem => elem)));





// const person1 = { name: '1', age: 11, job: 'front1'}
// const person2 = { name: '2', age: 22, job: 'front2'}

// function fn1() {
//     console.log(this)
//     // console.log(`Person: ${this.name} , Age: ${this.age} , Job: ${this.job}.`)
// }
// function bild (context, fn) {
//     return function (...args) {
//         fn.apply(context, args)
//     }
    
// }

// bild(person1, fn1 )()


let arr =  [7, 6, 15, 8]; // 3 23 29 13 30

// function bild(arr) {
//     let minN = arr[0];

//     for (let i = 0; i < arr.length-1; i++) {
//         for(let j = 0; j < arr.length-1; j++){
//         }
//         if (Math.clz32(arr[i]) > Math.clz32(minN)) {
//             minN = arr[i];
//         }
//     }





// function sortByBit(arr) {
//     const countBits=(num)=>{
//         // console.log(num);
//         console.log([...(num).toString(2)].reduce((acc,el)=> el==='1' ? acc+1 : acc, 0));
//         // return [...(num).toString(2)].reduce((acc,el)=> el==='1' ? acc+1 : acc, 0)
//         return numZ
//     }
//   return arr.sort((a,b)=> countBits(a)-countBits(b) ||  a - b);
// }
// sortByBit(arr);
// 





    // console.log(arr);
    // console.log(Math.clz32(arr[0]));
    // let access = parseInt(String(arr[0], 32));
    // console.log(access);
    // let access2 = access.toString(32);
    // console.log(access2);

    // let access1 = parseInt(String(arr[1], 2));
    // console.log(access1);
    // let access3 = arr[1].toString(2);
    // console.log(access3);

// }

// bild(arr) //[8, 6, 7, 15].



// paper, glass, organic, и plastic.


// input = [
//     {"type": "rotten apples", "material": "organic"},
//     {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//     {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//     {"type": "amazon box", "material": "paper"},
//     {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
//   ]


  input = [
    { type: 'printer box', material: 'plastic' },
    { type: 'beef', material: 'glass' },
    { type: 'broken record', material: 'plastic' },
    { type: 'iphone box', material: 'paper' },
    { type: 'sunglasses', material: 'paper', secondMaterial: 'glass' },
    { type: 'pasta', material: 'paper', secondMaterial: 'plastic' },
    { type: 'statue', material: 'glass' },
    { type: 'glass', material: 'paper' },
    { type: 'jar', material: 'plastic' },
    { type: 'newspaper', material: 'organic' },
    { type: 'sword', material: 'glass' },
    {
      type: 'rotten bananas',
      material: 'glass',
      secondMaterial: 'organic'
    },
    { type: 'chair', material: 'plastic', secondMaterial: 'glass' }
  ]
  
//   output = [
//     ["wine bottle", "amazon box", "beer bottle"],
//     ["wine bottle", "beer bottle"],
//     ["rotten apples", "out of date yogurt"],
//     ["out of date yogurt"]
//   ]

// function recycle(array) {
//     const types = [];
//     array.map(elem => {
//         types.push(elem.type);
//     });
//     // console.log(types);

//     const material = [...new Set(array.map(obj => Object.values(obj)).flat())];
//     // console.log(material);

//     const onlyMaterial = material.filter(mat => !types.includes(mat));
//     // console.log(onlyMaterial);

    // const materialTest = [ 'paper', 'glass', 'organic', 'plastic']

    // let testArray = [];
    // for(let i = 0; i < materialTest.length; i++) {
    //     testArray.push([]);
    //     for(let j = 0; j < types.length; j++) {
    //         if (materialTest[i] == array[j].material || materialTest[i]== array[j].secondMaterial) {
    //             testArray[i].push(array[j].type);
    //         }
    //     }
    // }
    //Object.values(array[j]).includes(materialTest[i]) || 
    // console.log(testArray);
    // return testArray


    // result = [...new Set(someData.map(obj => Object.keys(obj)).flat())]
    // .filter(name => 'name' !== name) 
    // .map(name => ({key: name, title: name, value: 0}));

    // result = [...new Set(array.map(obj => Object.values(obj)).flat())].filter(name => 'type' !== name) 

    // console.log(result);
    // let testArray = [];
    // for(let i = 0; i < type1.length; i++) {
    //     testArray.push([]);
    //     for(let j = 0; j <  array.length; j++) {
    //         if (Object.values(array[j]).includes(type1[i])) {
    //             testArray[i].push(array[j].type);
    //         }
    //     }
    // }
    // console.log(testArray);
    // return testArray
//   }
//   recycle(input);

// let gloves = [
//     'Black',  'Teal',    'Yellow', 'Lime',
//     'Red',    'Gray',    'Aqua',   'Olive',
//     'Silver', 'Black',   'Olive',  'Maroon',
//     'White',  'Navy',    'Blue',   'Black',
//     'Navy',   'Aqua',    'Aqua',   'Gray',
//     'Gray',   'Black',   'White',  'Yellow',
//     'Blue',   'Fuchsia', 'Navy',   'Lime',
//     'Yellow', 'Aqua',    'Aqua',   'Silver',
//     'Olive',  'Yellow',  'Silver', 'Fuchsia',
//     'Green',  'White',   'White',  'Yellow',
//     'Black'
//   ];

// function numberOfPairs(gloves) {

//     let testArray = gloves.slice(0);;
//     console.log(gloves);
//     let result = 0;
//     for(let i = 0; i < testArray.length; i++) {
//         for(let j = i + 1; j < testArray.length; j++) {
//             if(testArray[i] === testArray[j]) {
            
//                 testArray.splice(j, 1);
//                 // console.log(gloves);
//                 result += 1;
//                 break;
//             }
//         }
//     }
//     console.log(result);
//     return result;
// }

// numberOfPairs(gloves);

// let object = { people: ['John', 'Dave', 'Lisa'] };
// let object1 = { user: { name: { first: 'John', last: 'Snow' } } }
// let path = 'people.1';

// function find(object, path) {
//     let pathArray = path.split('.');

//     // if(!object[pathArray[0]][pathArray[1]]){
//     //     return undefined;
//     // }
//     // console.log(pathArray[0]);
//     // console.log(pathArray[1]);
//     // console.log(object[pathArray[0]][pathArray[1]])
//     // console.log(Object.hasOwn(object, 'last'));
//     // return object[pathArray[0]][pathArray[1]];


//     // console.log(object.people[1]);
//     console.log(Object.keys(object));
// }

// find(object1, path) 



// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//     var ms0 = Date.parse(currentDate);
//     console.log(ms0)
//     var ms1 = Date.parse(expirationDate);
//     console.log(ms1)

//     if(ms0 < ms1 && enteredCode === correctCode ) {
//         console.log('right code')
//     } else {
//         return false;
//     }
// }

// checkCoupon('123','123','September 5, 2014','October 1, 2014');
// checkCoupon('123a','123','September 5, 2014','October 1, 2014');



// let results = {"Java": 10, "Ruby": 80, "Python": 65}  //  -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


// function myLanguages(results) {
//     console.log(Object.keys(results))
//     console.log(Object.keys(results).filter(r => results[r] > 59))
//     console.log(Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]))

//     return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
//   }

//   myLanguages(results)


// var runLengthEncoding = function(str){
//     results = [];
//     let splitStr = str.split('');
//     console.log(splitStr);
//     let count = 1;
//     for (let i = 0; i < splitStr.length; i++) {
//         let arr = [];

//         if (splitStr[i] == splitStr[i + 1]) {
//             count++;
//         } else {
//             arr.push(count);
//             arr.push(splitStr[i]);

//             results.push(arr);
//             count = 1;
//         }
//     }

// console.log(results);
//     return results // << fix this
//   }

//   runLengthEncoding('hello')

function makeDate (hours, minutes) {
	const date = new Date();
	date.setMinutes(minutes);
	date.setHours(hours);
	return date;
}



function handAngle (date) {
    // console.log(date)
    let minStep = 360 / 60;
    let hourStep = 360 / 12;

    let minNumber = date.getMinutes(date);
    let hourNumber = date.getHours(date);
    if(hourNumber == 12) {
        hourNumber = 0;
    }
    console.log(minNumber);
    console.log(hourNumber);
    console.log(hourNumber*hourStep);
    let result = Math.abs(minNumber*minStep - hourNumber*hourStep);
    console.log(result);
    console.log(Math.PI/2);

    // if(result/ Math.PI > Math.PI) {
    //     result = Math.PI * 2 - result/ Math.PI;
    // }

    // if (2 * Math.PI - result > Math.PI) {
    //     result = Math.PI * 2 - result;
    // }


    console.log(result);
    // часы минуты
      return result
  }
// console.log(1.4398966328953218/Math.PI/30)
//   handAngle(makeDate(0, 0))
//   handAngle(makeDate(12, 0))
//   handAngle(makeDate(6, 0))
//   handAngle(makeDate(1, 0))
//   handAngle(makeDate(9, 0))
//   handAngle(makeDate(10, 0))
  handAngle(makeDate(0, 15))
  handAngle(makeDate(0, 45))
//   handAngle(makeDate(12, 30))
//   handAngle(makeDate(7, 15))
//   handAngle(makeDate(6, 5))