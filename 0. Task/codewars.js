
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
