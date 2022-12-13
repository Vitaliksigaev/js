let body = document.querySelector('body');

// Создание общего блока для игры
let sectionGame = document.createElement('div');
sectionGame.classList.add('box-game');
body.appendChild(sectionGame);

// создание названия игры

let nameGame = document.createElement('h1');
nameGame.innerText = 'FIFTEEN';
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
let starTimer = 0;
let numberSquares = 9;

function generateBtnGame (num) {

    if(localStorage.getItem('btnSavePosition')){
        console.log('local esti');
        removeBtnGames ();
        gameArea.innerHTML = localStorage.getItem('btnSavePosition');

        //Возобновление работы счетчика шагов
        sumClicks = Number(localStorage.getItem('moves'));
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
                    starTimet +=1;
                    if(starTimer == 1) {
                        timerStart();
                    }
                    // if(sumClicks == Number(localStorage.getItem('moves')) + 1) {

                    // }

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
                btn.style.transform = `translate3d(  ${btnZeroId.id[0]}00%, ${btnZeroId.id[1]}00%, 0 )` + "rotate(360deg)";
                btnZeroId.style.transform = `translate3d( ${btn.id[0]}00%, ${btn.id[1]}00%, 0 )` + "rotate(360deg)";









                btn.setAttribute('id', btnZeroId.id);
                btnZeroId.setAttribute('id', btnIdOld);

                sumClicks += 1;
                starTimer +=1;

                if(starTimer == 1) {
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
generateBtnGame (numberSquares);

// Delete button
function removeBtnGames () {
    let btnGames = body.querySelectorAll('.btn-game');
    for (let elem of btnGames) {
        elem.remove();
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
    // localStorage.clear();
    let btnGames = body.querySelectorAll('.btn-game').length; 
    removeBtnGames ();
    generateBtnGame (btnGames);
    refreshResults ();
    //перезиписали на верные значения
    let newbtnGames = body.querySelectorAll('.btn-game'); 

    for( let i = 0; i < newbtnGames.length; i++) {
        newbtnGames[i].innerText = i + 1;
    }
    setTimeout(()=>{
        alert('Сдвиньте последний квадрат и верните его на место, чтобы выйграть! Пока реализованиа на 3-3')
    }, 1000)
})


// работа перемешивание кнопки
let gameControlReset = document.createElement('button');
gameControlReset.innerText = 'Shuffle';
sectionGameControl.appendChild(gameControlReset);
gameControlReset.addEventListener('click', () => {
    localStorage.clear();
    let btnGames = body.querySelectorAll('.btn-game'); 
    removeBtnGames ();
    generateBtnGame (btnGames.length);
    refreshResults ();
})

//  Кнопка остановка игры
let gameControlStop = document.createElement('button');
gameControlStop.innerText = 'Stop';
sectionGameControl.appendChild(gameControlStop);
gameControlStop.addEventListener('click', () => {
    clearInterval(intervalID);
    starTimer = 0;
    let timerAll = document.getElementById('statTime');
    let timerArr = timerAll.innerText.split(':').reverse();
    let timerSec = timerArr[0];
    let timerMin = timerArr[1];
    let timerH = timerArr[2];
    
    localStorage.setItem('timerSec', `${timerSec}`);
    localStorage.setItem('timerMin', `${timerMin}`);
    localStorage.setItem('timerH', `${timerH}`);
})

// Кнопка сохранения
let gameControlSave = document.createElement('button');
gameControlSave.innerText = 'Save';
sectionGameControl.appendChild(gameControlSave);

gameControlSave.addEventListener ('click', () => {
    clearInterval(intervalID);
    let statPosition = gameArea.innerHTML;
    let statStatistics = statSection.innerHTML;
    let timerAll = document.getElementById('statTime');
    let timerArr = timerAll.innerText.split(':').reverse();
    let timerSec = timerArr[0];
    let timerMin = timerArr[1];
    let timerH = timerArr[2];
    let moves = statMoves.innerText.replace(/[\D]+/g, '');
    
    localStorage.setItem('btnSavePosition', `${statPosition}`);
    localStorage.setItem('btnSaveStat', `${statStatistics}`);
    localStorage.setItem('timerSec', `${timerSec}`);
    localStorage.setItem('timerMin', `${timerMin}`);
    localStorage.setItem('timerH', `${timerH}`);
    localStorage.setItem('moves', `${moves}`); // Отделяю секунды минуты и часы чтобы таймер запустился с нужного места
})

// Кнопка вывода результатов
let gameControlResults = document.createElement('button');
gameControlResults.innerText = 'Results';
sectionGameControl.appendChild(gameControlResults);

gameControlResults.addEventListener ('click', () => {

    function konc () {
        let object = JSON.parse(localStorage.getItem("arrWin"));
        console.log(object);
        reiting(object);

        return 
    }
    konc ();

    tableResults.classList.toggle("hidden");




})

let tableResults = document.createElement('div');
tableResults.classList.add('table-results');
gameArea.appendChild(tableResults);

//Функция вывода  рейтинг

function reiting(arrPlayers) {
    // var elem = document.querySelector('.table-results');
    // elem.remove(); 

    // let tableResults = document.createElement('div');
    // tableResults.classList.add('table-results');
    // gameArea.appendChild(tableResults);
    while (tableResults.firstChild) {
        tableResults.removeChild(tableResults.firstChild);
    }

    var table = document.createElement('table');   

    arrPlayers.forEach(function(obj, index){
        let print = (index + 1) + '. ' ;
        for (var key in obj){
            // console.log(key, obj[key]);
            print += key + "= " + (obj[key]) + ' / ' ;
        }
        let tr = table.insertRow();
        tr.innerText = print;
    });
    console.log(table);
    let test = document.querySelector('.table-results');
    test.appendChild(table);
    
    localStorage.setItem("arrWin", JSON.stringify(arrPlayers));

}







function refreshResults () {
    clearInterval(intervalID);
    statMoves.innerText = `0 Moves` ;
    statTime.innerText = "0:0:0" ;
    timerSec = 0;
    sumClicks = 0;
}
function checkWinGame (){
    let btnGames = body.querySelectorAll('.btn-game');
    let num = 0;
    // let sizeMatrix = Math.sqrt(btnGames.length);
    // console.log(sizeMatrix);

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
        // let finishTime = document.getElementById('statTime').innerHTML;
        alert(`Ура! Вы решили головоломку за ${statTime.innerText} и ${sumClicks} ходов!`);

        winnerSortToLocal (statTime.innerText);


        localStorage.setItem('person', `Ура! Вы решили головоломку за ${statTime.innerText} и ${sumClicks} ходов!`);
    }
}


//Создание если локал пустой если нет то вносим сохраненнный хтмл
let statSection = document.createElement('div');
let statTime = document.createElement('button');
let statMoves = document.createElement('button');

if(localStorage.getItem('btnSaveStat')){
    statSection.innerHTML = localStorage.getItem('btnSaveStat');
    sectionGame.appendChild(statSection); 
    statSection.classList.add('stat-section');
    statMoves = document.getElementById('statMoves');
} else {
    statSection.classList.add('stat-section');
    sectionGame.appendChild(statSection);  
    
    statTime.innerText = "0:0:0" ;
    statTime.setAttribute('id', "statTime");
    statSection.appendChild(statTime);

    statMoves.innerText = "0 Moves" ;
    statSection.appendChild(statMoves);
    statMoves.setAttribute('id', "statMoves");
}

// Создание секундомера
let intervalID;
let timerSec = 0;
let timerMin = 0;
let timerHour = 0;

function timerStart() {
    if(localStorage.getItem('btnSaveStat')){
        // document.getElementById('statTime');
        setTimeout(() => {
            timerSec = Number(localStorage.getItem('timerSec'));
            timerMin = Number(localStorage.getItem('timerMin'));
            timerHour = Number(localStorage.getItem('timerH'));                 
        }, 0)
    }
    intervalID = setInterval(timerS, 1000);
}

function timerS() {
    //собираем данные если было сохранение.
    // timerSec = Number(localStorage.getItem('timerSec'));
    // timerMin = Number(localStorage.getItem('timerMin'));
    // timerHour = Number(localStorage.getItem('timerH'));   

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

// создание блока выбора размера
function generateBtnSizes () {
    let sectionBtnSizes = document.createElement('div'); 
    sectionBtnSizes.setAttribute('id', 'allBtnSizes');

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






// Создание блока статистики
// создадим функцию которая будет принимать время и будем сортировать победителей по времени.
// let player1 = {
//     results: 106,
// }

// localStorage.setItem('arrWin','[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]');
let arrPlayers = [ ];
function createPlayers () {
    for( let i = 0; i < 10; i++) {
        let player = {
            name: 'playerDefault',
            moves: Number(`${[i]}`),
            time: Number(`${[i]}`)
        }        
        arrPlayers.push(player);
    }
    console.log(arrPlayers);
}
createPlayers ();

// Функиция сортировки и поиска максимального значение
let maxTime;
function sortArrPlayersStat (arr) {
    arr.sort((a, b) => a.time > b.time ? 1 : -1);
    console.log(arr[9].time);
    maxTime = arr[9].time;

}
sortArrPlayersStat (arrPlayers);



function winnerSortToLocal (time) {
    // let now = new Date();

    let moves = statMoves.innerText.replace(/[\D]+/g, '');

    let timerArr = time.split(':').reverse();
    let timerSec = timerArr[0];
    let timerMin = timerArr[1];
    let timerH = timerArr[2];
    let sumSecAll = Number(timerSec) + Number(timerMin*60) + Number(timerH*3600);

    if(sumSecAll < maxTime) {
        arrPlayers.splice(-1, 1);

        let playerBrayser = {
            name: '***player***',
            moves: Number(`${moves}`),
            time:  Number(`${sumSecAll}`)
        }; 
        arrPlayers.push(playerBrayser);

        sortArrPlayersStat (arrPlayers);
        reiting(arrPlayers); 

    }




    // // console.log(sumSecAll);
    // let newArr = localStorage.getItem('arrWin').split(', ').map(elem => Number(elem));
    // newArr.push(sumSecAll);
    // // console.log(newArr.sort(function(a, b) {
    // //     return a - b;
    // // }))
    // newArr = newArr.sort(function(a, b) {
    //     return a - b;
    // });
    // console.log(newArr);




    
    // newArr.push(sumSecAll);
    // console.log(newArr);

    // let newArrOnlyScore = arrWin.map( elem => elem.split('/')[0]);
    



    // 

    // console.log( timerArr + "-" + timerSec + "-" + timerMin + "-" + timerH + "-" + moves + " было => " + now)
    
    // for( let i = 0 ; i <= 10; i++) {
    //     if(arrWin[i] == undefined) {
    //         console.log("-")
            
    //     } else {
    //         console.log(arrWin[i])

    //     }
    // }

    // localStorage.setItem('timerSec', `${timerSec}`);
    // localStorage.setItem('timerMin', `${timerMin}`);
    // localStorage.setItem('timerH', `${timerH}`);
    // localStorage.setItem('moves', `${moves}`);    
}

// надо записать в локал и вытянуть из локала  массив с объектами через строку.

// узнать максимальное время в локале

// если оно больше то создаем объект и добавляем в массив и сортируем массив по ключам.

// выводим в консоль первые 10 победителей

// записываем результат в локол










//есть возможность включения/выключения звукового сопровождения движения плитки

//10 лучших результатов сохраняются в таблице рекордов и могут быть просмотрены любым способом (например, нажатием кнопки)
//реализовано сохранение состояния игры и сохранение топ-10 результатов с помощью LocalStorage:+10









//плитки можно перетаскивать в пустую ячейку с помощью мыши


// Изменение позиции по клику + проверку надо сделать
// window.addEventListener('keydown', (event) => {
//     if(!event.key.includes('Arrow')) {
//         return
//     }
//     console.log(event.key);
// })


// Изменение позиции по стрелочкам