
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
