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

//classes

class Person21 {
    name: string;
    age: number | null;
    constructor(name = 'ana', age = 20) {
        this.name = name;
        this.age = age;
    }
}

// const person11 = new Person21();
const person21 = new Person21('JOe', 11);


//https://www.youtube.com/watch?v=CegrbRXGw20

class Person22 {
    name: string;
    age: number ;
    constructor(name = 'ana', age = 30) {
        this.name = name;
        this.age = age;
    }
    sayHi(): void {
        console.log("1")
    }
}

// const person11 = new Person21();
const person22 = new Person22('JOe22', 11);


// class and interfaces

interface IPerson1 {
    name:string;
    age: number;
}

class Person implements IPerson1 {
    name: string;
    age:number;
    
    constructor(name = 'Anonymous', age = 10500) {
        this.name = name;
        this.age = age;
    }
    sayHi = () => {
        console.log(this.age);
    }

}

// abstract class

abstract class Abdtract {
    abstract sayHi(): void;
}

class MyGreeter extends Abdtract {
    sayHi() {
        console.log('Hi');
    }
}

// GENERIC 

function identity <T> (value :T) : T {
    return value;
}

interface MyStorage<T> {
    value : T[];
    getValue: () => T[];
}

const numericStorage: MyStorage<number> = {
    value: [1, 2, 3],
    getValue() {
        return this.value
    }
}

class IdebClass<T> {
    value : T;
    constructor(value : T) {
        this.value = value;
    }
    getIden(): T {
        return this.value;
    }
}

const num1: IdebClass<number> = new IdebClass(1);
const sring1: IdebClass<string> = new IdebClass('xds')

// TYPE MANIPULATION

