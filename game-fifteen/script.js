let body = document.querySelector('body');

// Создание общего блока для игры
let sectionGame = document.createElement('div');
sectionGame.classList.add('box-game');
body.appendChild(sectionGame);

// создание названия игры

let nameGame = document.createElement('h1');
nameGame.innerText = 'Name Game';
sectionGame.appendChild(nameGame);

// создания блока поля игры юзера
let gameArea =  document.createElement('div');
gameArea.classList.add('game-area-style');
sectionGame.appendChild(gameArea);

// создание игры
// функция перемешивания массива
function generateRandomNumbers (num) {
    let array = [];
    for (let i = 1; i< num; i++) {
        array.push(i);
    }
    console.log(array.sort(() => Math.round(Math.random() * 100) - 50));
    return (array.sort(() => Math.round(Math.random() * 100) - 50))
}

// функция создания кнопок - переменная колво
let sumClicks = 0;
function generateBtnGame (num) {

    if(localStorage.getItem('btnSavePosition')){
        console.log('local esti');
        removeBtnGames ();
        gameArea.innerHTML = localStorage.getItem('btnSavePosition');
        //add time
        //add stat


        btnGames = body.querySelectorAll('.btn-game');
    
        for( let i = 0; i < btnGames.length; i++) {
            btnGames[i].addEventListener('click', () => {
                let btnZeroId = document.querySelector('.btn-game-zero');
    
                if(Math.abs(btnGames[i].id - btnZeroId.id) == 10 || Math.abs(btnGames[i].id - btnZeroId.id) == 1 ){                
                    let btnIdOld = btnGames[i].id;
                    btnGames[i].style.transform = `translate3d(  ${btnZeroId.id[0]}00%, ${btnZeroId.id[1]}00%, 0 )`;
                    btnZeroId.style.transform = `translate3d( ${btnGames[i].id[0]}00%, ${btnGames[i].id[1]}00%, 0 )`;
                    btnGames[i].setAttribute('id', btnZeroId.id);
                    btnZeroId.setAttribute('id', btnIdOld);
    
                    sumClicks += 1;
                    if(sumClicks == 1) {
                        timerStart();
                    }
    
                    statMoves.innerText = `${sumClicks} Moves` ;
                    setTimeout(() => {
                        checkWinGame()
                    }, 1000)
                }            
            })
        }

        return
    }

    // перемешанный массив
    let array = [];
    for (let i = 1; i< num; i++) {
        array.push(i);
    }
    array.sort(() => Math.round(Math.random() * 100) - 50);
    array.push(0);

    // создаем кнопки и вписываем значения из массива

    let positionX = 0;
    let positionY = 0;


    // Ширина кнопок
    let btnStyle = 100 / Math.sqrt(num);

    for ( let i = 0; i < num; i++) {
        let btn = document.createElement('button');
        btn.innerText = array[i];
        btn.classList.add('btn-game');

        btn.style.width =  btnStyle +'%';
        btn.style.height = btn.style.width;
        // Надо задать стиль позиционирования в зваисимости от номера 
        if( positionX < Math.sqrt(num)) {
            btn.style.transform = `translate3d( ${positionX * 100}%, ${positionY * 100}%, 0 )`;
            btn.setAttribute('id', `${positionX}${positionY}`);
            positionX += 1;
        } else {
            positionY += 1;
            positionX = 0;
            btn.style.transform = `translate3d( ${positionX * 100}%, ${positionY * 100}%, 0 )`;
            btn.setAttribute('id', `${positionX}${positionY}`);
            positionX += 1;
        }
        if (i == num -1) {
            btn.classList.add('btn-game-zero'); 
        }


        btn.addEventListener('click', () => {
            let btnZeroId = document.querySelector('.btn-game-zero');

            if(Math.abs(btn.id - btnZeroId.id) == 10 || Math.abs(btn.id - btnZeroId.id) == 1 ){                
                let btnIdOld = btn.id;
                btn.style.transform = `translate3d(  ${btnZeroId.id[0]}00%, ${btnZeroId.id[1]}00%, 0 )`;
                btnZeroId.style.transform = `translate3d( ${btn.id[0]}00%, ${btn.id[1]}00%, 0 )`;
                btn.setAttribute('id', btnZeroId.id);
                btnZeroId.setAttribute('id', btnIdOld);

                sumClicks += 1;
                if(sumClicks == 1) {
                    timerStart();
                }

                statMoves.innerText = `${sumClicks} Moves` ;
                setTimeout(() => {
                    checkWinGame()
                }, 1000)
            }
            
        })
        gameArea.appendChild(btn);
    }

}
let numberSquares= 16;
generateBtnGame (numberSquares);

// Delete button
function removeBtnGames () {
    let btnGames = body.querySelectorAll('.btn-game');
    for (let elem of btnGames) {
        elem.remove();
    }
}

function checkWinGame (){
    let btnGames = body.querySelectorAll('.btn-game');
    let num = 0;
    let sizeMatrix = Math.sqrt(btnGames.length);
    console.log(sizeMatrix);

    for( let i = 0; i < btnGames.length; i++) {
        if(btnGames[i].id == '00' && btnGames[i].innerText == '1') {
            num += 1;
        }
        if(btnGames[i].id == '10' && btnGames[i].innerText == '2') {
            num += 1;
        }
        if(btnGames[i].id == '20' && btnGames[i].innerText == '3') {
            num += 1;
        }
        if(btnGames[i].id == '01' && btnGames[i].innerText == '4') {
            num += 1;
        }
        if(btnGames[i].id == '11' && btnGames[i].innerText == '5') {
            num += 1;
        }
        if(btnGames[i].id == '21' && btnGames[i].innerText == '6') {
            num += 1;
        }
        if(btnGames[i].id == '02' && btnGames[i].innerText == '7') {
            num += 1;
        }
        if(btnGames[i].id == '12' && btnGames[i].innerText == '8') {
            num += 1;
        }
    }

    if (num == btnGames.length - 1) {        
        clearInterval(intervalID);
        let finishTime = document.getElementById('statTime').innerHTML;
        alert(`Ура! Вы решили головоломку за ${finishTime} и ${sumClicks} ходов!`);
        localStorage.setItem('person', `Ура! Вы решили головоломку за ${finishTime} и ${sumClicks} ходов!`);
    }
}



// создания блока управления игры
let sectionGameControl = document.createElement('div');
sectionGameControl.classList.add('game-area-controls');
sectionGame.appendChild(sectionGameControl);

// Ауто финиш

let gameControlAuto = document.createElement('button');
gameControlAuto.innerText = 'Auto';
sectionGameControl.appendChild(gameControlAuto);

gameControlAuto.addEventListener ('click', () => {
    localStorage.removeItem('btnSaveStat'); 
    localStorage.removeItem('btnSavePosition'); 
    let btnGames = body.querySelectorAll('.btn-game');
    
    for( let i = 0; i < btnGames.length; i++) {
        btnGames[i].innerText = i + 1;
    }
})


// работа перемешивание кнопки
let gameControlReset = document.createElement('button');
gameControlReset.innerText = 'Shuffle';
sectionGameControl.appendChild(gameControlReset);

//  Кнопка остановка игры
let gameControlStop = document.createElement('button');
gameControlStop.innerText = 'Stop';
sectionGameControl.appendChild(gameControlStop);
gameControlStop.addEventListener('click', () => {
    clearInterval(intervalID);
})

// Кнопка сохранения
let gameControlSave = document.createElement('button');
gameControlSave.innerText = 'Save';
sectionGameControl.appendChild(gameControlSave);

gameControlSave.addEventListener ('click', () => {
    clearInterval(intervalID);
    let statPosition = gameArea.innerHTML;
    let statStatistics = statSection.innerHTML;

    localStorage.setItem('btnSavePosition', `${statPosition}`);
    localStorage.setItem('btnSaveStat', `${statStatistics}`);

    // Отделяю секунды минуты и часы чтобы таймер запустился с нужного места



})

// Кнопка вывода результатов
let gameControlResults = document.createElement('button');
gameControlResults.innerText = 'Results';
sectionGameControl.appendChild(gameControlResults);



function refreshResults () {
    clearInterval(intervalID);
    statMoves.innerText = `0 Moves` ;
    statTime.innerText = "0:0:0" ;
    timerSec = 0;
    sumClicks = 0;
}


    // Изменение позиции по клику + проверку надо сделать
// window.addEventListener('keydown', (event) => {
//     if(!event.key.includes('Arrow')) {
//         return
//     }
//     console.log(event.key);
// })


// Изменение позиции по стрелочкам


// Создание блока статистики

//Создание если локал пустой если нет то вносим сохраненнный хтмл
let statSection = document.createElement('div');
let statTime = document.createElement('button');
let statMoves = document.createElement('button');


if(localStorage.getItem('btnSaveStat')){
    statSection.innerHTML = localStorage.getItem('btnSaveStat');
    sectionGame.appendChild(statSection); 
    statSection.classList.add('stat-section');
} else {
    statSection.classList.add('stat-section');
    sectionGame.appendChild(statSection);  
    
    statTime.innerText = "0:0:0" ;
    statTime.setAttribute('id', "statTime");
    statSection.appendChild(statTime);

    statMoves.innerText = "0 Moves" ;
    statSection.appendChild(statMoves);
}




// Создание секундомера
let intervalID;
// функция сбора текущего значения.

let timerSec = 0;
let timerMin = 0;
let timerHour = 0;

function timerStart() {
    if(localStorage.getItem('btnSaveStat')){
        // document.getElementById('statTime');
        setTimeout(() => {

            timerSec = 5;
            timerMin = 5;
            timerHour = 5;
          }, 0)
    }
    intervalID = setInterval(timerS, 1000);
}

function timerS() {



    //собираем данные если было сохранение.



    timerSec++;
    if( timerSec >= 60 ) {
        timerMin++;
        timerSec = 0;
    }
    if( timerMin >= 60 ) {
        timerHour++;
        timerMin = 0;
    }
    document.getElementById('statTime').innerHTML = timerHour + ':' + timerMin + ':' + timerSec;
}

gameControlReset.addEventListener('click', () => {
    // Сбор кнопок игры
    let btnGames = body.querySelectorAll('.btn-game');
    removeBtnGames ();
    generateBtnGame (btnGames.length);
    refreshResults ();
})




// создание блока выбора размера

function generateBtnSizes () {
    let sectionBtnSizes = document.createElement('div'); 
    sectionGame.appendChild(sectionBtnSizes);
    for( let i = 3; i <= 8; i++) {
        let btn = document.createElement('button');
        btn.innerText = i + 'x' +i;
        sectionBtnSizes.appendChild(btn);
        btn.addEventListener('click', () => {
            // console.log(i);
            removeBtnGames ();
            
            refreshResults ();
            generateBtnGame (i**2);
        })
    }
}
generateBtnSizes();







// реализовать функционал для сохранения игры (например, с помощью localStorage), чтобы при перезагрузке страницы игрок мог продолжить с того места, на котором остановился

//есть возможность включения/выключения звукового сопровождения движения плитки

//10 лучших результатов сохраняются в таблице рекордов и могут быть просмотрены любым способом (например, нажатием кнопки)
//реализовано сохранение состояния игры и сохранение топ-10 результатов с помощью LocalStorage:+10


//плитки можно перетаскивать в пустую ячейку с помощью мыши

// баг если мы уже поиграли и хотим чтобы расставились все по местам то значение переписываются а стили нет

