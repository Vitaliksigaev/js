///Вторая попытка реализация игры
// let body = document.querySelector('body');
// let gameBox = document.createElement('div');
// let gameHeader = document.createElement('div'); 
// let gameDashboard = document.createElement('div'); 
// let gameCheckSize = document.createElement('div'); 

// body.appendChild(gameBox);
// gameBox.appendChild(gameHeader);
// gameBox.appendChild(gameDashboard);
// gameBox.appendChild(gameCheckSize);

// gameBox.classList.add('game-box');
// gameHeader.classList.add('game-header');
// gameDashboard.classList.add('game-dashboard');
// gameCheckSize.classList.add('game-size');





// Создание кнопок игры
// function genBtnMainGame (num) {
//     for( let i = 1; i <= num**2; i++) {
//        // console.log(i)
//         let btn = document.createElement('button');
//         btn.innerText = ( i ) ;
        
//         btn.classList.add('btn-game'); 
//         gameDashboard.appendChild(btn);

//         btn.style.top = "100px";
//         btn.style.left = "100px";

//         btn.addEventListener("click", function() {
//             console.log('click on btn game = ' + btn.innerHTML);
//         });
//     }
// }
// genBtnMainGame (4);


// Создание 4 кнопок с размерами
// let sizeGame = 6;
// function genBtnSizeGame (sizeGame) {

//     for( let i = 3; i <= sizeGame; i++) {
//        // console.log(i)
//         let btn = document.createElement('button');
//         btn.innerText = ( i + 'x' + i ) ;
//         btn.classList.add('btn-size-game'); 
//         gameCheckSize.appendChild(btn);

//         btn.addEventListener("click", function() {
//             console.log('click on btn sizes = ' + btn.innerHTML);
//             // genBtnMainGame (sizeGame);
//         });
//     }
// }
// genBtnSizeGame (sizeGame);


// //Первая попытка реализации игры

// let body = document.querySelector('body');

// //  Создаем блок для всей игры
// let boxGame = document.createElement('div');
// boxGame.classList.add('box-game');

// // создаем шапку для кнопок управления игры
// let headerGame = document.createElement('div');
// headerGame.classList.add('header-game');

// let mainBtn = ['Star', "Stop", "Save" , "Results"];

// function generateMainBtn (array) {
//     for( let i = 0; i < array.length; i++) {
//         let btn = document.createElement('button');
//         btn.innerText = array[i];
//         btn.classList.add('header-btn'); 
//         headerGame.appendChild(btn);
//     }
// }
// generateMainBtn(mainBtn);

// function generateStat() {
//     let statSection = document.createElement('div');
//     statSection.classList.add('stat-section');
//     let statSectionTime = document.createElement('div');
//     statSectionTime.classList.add('stat-box');

//     let time = document.createTextNode("Время");
//     statSectionTime.appendChild(time);

//     let statSectionMoves = document.createElement('div');
//     statSectionMoves.classList.add('stat-box');
//     let moves = document.createTextNode("Ходов");
//     statSectionMoves.appendChild(moves);

//     statSection.appendChild(statSectionTime);
//     statSection.appendChild(statSectionMoves);
//     console.log(statSection)
//     boxGame.appendChild(statSection) ;
// }
// generateStat();


// // создаем и генерируем таблицу с рандомом
// let gameTable = document.createElement('table');
// // let gameThead = document.createElement('thead');

// function generateRandomNumbers (num) {
//     let array = [];
//     for (let i = 1; i< num; i++) {
//         array.push(i);
//     }
//     console.log(array.sort(() => Math.round(Math.random() * 100) - 50));
//     return (array.sort(() => Math.round(Math.random() * 100) - 50))
// }

// function generateGameTable (table, array) {
//     let sizesTable = Math.sqrt(array.length);

//     // let thead = table.createTHead();
//     // let row = thead.insertRow();
//     let couter = 0;
//     for (let i = 0 ; i < sizesTable; i++) {
//         let row = table.insertRow();
//         for(let j = 0; j < sizesTable; j++ ) {
//             let cell = row.insertCell();

//             cell.classList.add('table-td');

//             if(array[couter] == undefined) {
//                 // console.log('1')
//                 break       
//             }
//             let text = document.createTextNode(array[couter]);
//             cell.appendChild(text);
//             cell.addEventListener("click", function() {
//                 console.log('click on');
//                 console.log(cell.closest('td'))

//             });
//             couter++;
//         }

//     }

// }

// // function moveSqare() {
// //     console.log('click on')
// // }


// body.appendChild(boxGame);
// boxGame.appendChild(headerGame);


// boxGame.appendChild(gameTable);

// let arra = generateRandomNumbers(16)




// let name = 'jon';
// function printName() {
//     let name = 'Player';
//     console.log(name);
// }
// printName();


// function foo() {
//     return { bar: 1};
// }
// console.log(typeof foo().bar); //number

// function foo(a,b) {
//     return a * b;
// }
// const bar = foo.bind(null, 2);
// console.log(bar(2)); //4

// var name = 'John';
// function printName() {
//     console.log(name);
//     var name = 'PETER';
//     console.log(name);
// }
// printName(); //undefined 'Peter'



// let f = function(a,b) { return a+b };


// let f = new Function("a,b", "return a+b")

// let f = new Function("a", "b", "return a+b")

// let f = (a, b) => a + b

// let f = (a, b) => { a + b } // ОШИБКА

// console.log(f(1,3)); //


// let name = 'John';
// function printName() {
//     console.log(name);
// }

// setTimeout(() => {
//     let name = 'PETER';
//     printName();
// }, 1000); //John

// var a=1, b= function a(x) {x && a(--x);};
// console.log(a);// 1

// const details = {
//     message: 'Hello',
// } 
// function getMessage(){
//     return this.message;
// }
// console.log(getMessage.call(details)); // Hello

// function getThis() { return this; }
// console.log(getThis()); //undefined

// var name = 'John';
// var user = {
//     name: "PEter",
//     printMEssage() {
//         console.log(`Hello, ${this.name}}`);
//     }
// }
// var printMEssage = user.printMEssage;
// printMEssage(); //Hello, John}

// console.log(message);
// let message = "Hello"; // Error message

// console.log(message);
// var message = "Hello"; // undefined

// for(var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i); // 3 3 3 
//     })
// }

// for(let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i); // 0 1 2
//     })
// }

// function getThis() { return this; }
// console.log(getThis()); // [object Window]


// function foo(){ console.log(this)};
// foo.call(null); // window

//. Укажите, что в JavaScript подвергается всплытию (hoisting)?

// Function declaration

// Объявление переменной



// let name = 'John';
// function printName() {
//     let name = 'PETER'
//     console.log(name);
// }
// printName() // PETER



// printMessage();
// function printMessage() {
//     console.log('Hello');
// } // Hello


// let f = function g() { return 23; };
// console.log(typeof g()); // ERROR


// const foo = bar();
// const number = 2;
// function bar() {return number;} // ReferenceError: number is not defined

// const details = {
//     name: 'John',
// }
// function getMessage(message) {
//     return `${message} ${this.name}`;
// }
// console.log(getMessage.apply(details, ['Hello'])); //Hello John


// for( var i = 0; i < 10; i++ ) {

// }
// console.log(i); // 10 


// (
//     function(a) {
//         arguments[0] = 10;
//         return console.log(a);
//     }
// )(5); // 10