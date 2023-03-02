// https://www.youtube.com/watch?v=iT6P2ajyf2g
// https://www.youtube.com/watch?v=I_aTbZcH8Do

const sumArgs = (a: number, b: number): number => a ** b; // явное указание

// без указания явного типа
const now = new Date();


// примитивные типы

let a: number;
a = 1;
// a = 'string'; // eroor

// const user = {
//     name: 'User',
//     age: 30,
//     isAdmin: true
// }



// const user: {
//     name: string;
//     age: number;
//     isAdmin: boolean;
// } = {
//     name: 'User',
//     age: 30,
//     isAdmin: true  
// }


// type User = {
//     name: string;
//     age: number;
//     isAdmin: boolean;
// }

// const user: User = {
//     name: 'User',
//     age: 30,
//     isAdmin: true      
// };

// interface IUser {
//     name: string;
//     age: number;
//     isAdmin: boolean;
// }

// const user: IUser = {
//     name: 'User',
//     age: 30,
//     isAdmin: true      
// };


// ARRAY 
const stringArray : string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const anyTypeArray : any[] = [ 'a', 1, true, {}];

// TUPLES
const numericTuple = [ 1, 2,] as const;


//FUNCTION

// function declaration

function printMsg(msg: string): void { // не возвращают явный тип
    console.log(msg);
}

// function expression
const printMsg2 = function(msg: string): void {
    console.log(msg);
}

// interface

interface ISumSunc {
    (a: number, b: number): number;
}

let sum: ISumSunc;

sum = (a: number, b: number) => a + b;

// UNION TYPES

let strOrNum: number | string;
strOrNum = 'string or number';
strOrNum = 100500;
// strOrNum = true;


//ALIASES
type numOrString = number | string;
let myValue: numOrString;
myValue = 100;
myValue = '100';


//ENUMS

enum DeviceState {

}

//INTERFACES

interface IUser {
    login: string;
    password: string;
}


const user: IUser = {
    login: 'LOGINI4',
    password: 'PASSWORD'
};