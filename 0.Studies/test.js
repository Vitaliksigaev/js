//Вторая попытка реализация игры
let body = document.querySelector('body');
let gameBox = document.createElement('div');
let gameHeader = document.createElement('div'); 
let gameDashboard = document.createElement('div'); 
let gameCheckSize = document.createElement('div'); 

body.appendChild(gameBox);
gameBox.appendChild(gameHeader);
gameBox.appendChild(gameDashboard);
gameBox.appendChild(gameCheckSize);

gameBox.classList.add('game-box');
gameHeader.classList.add('game-header');
gameDashboard.classList.add('game-dashboard');
gameCheckSize.classList.add('game-size');





// Создание кнопок игры
function genBtnMainGame (num) {
    for( let i = 1; i <= num**2; i++) {
        console.log(i)
        let btn = document.createElement('button');
        btn.innerText = ( i ) ;
        
        btn.classList.add('btn-game'); 
        gameDashboard.appendChild(btn);

        btn.style.top = "100px";
        btn.style.left = "100px";

        btn.addEventListener("click", function() {
            console.log('click on btn game = ' + btn.innerHTML);
        });
    }
}
genBtnMainGame (4);


// Создание 4 кнопок с размерами
let sizeGame = 6;
function genBtnSizeGame (sizeGame) {

    for( let i = 3; i <= sizeGame; i++) {
        console.log(i)
        let btn = document.createElement('button');
        btn.innerText = ( i + 'x' + i ) ;
        btn.classList.add('btn-size-game'); 
        gameCheckSize.appendChild(btn);

        btn.addEventListener("click", function() {
            console.log('click on btn sizes = ' + btn.innerHTML);
            // genBtnMainGame (sizeGame);
        });
    }
}
genBtnSizeGame (sizeGame);


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