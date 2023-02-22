console.log('js2')
let calcInputs = document.querySelectorAll('.calc-input')

for(let input of calcInputs) { // console.log( input.value )
    input.addEventListener('change', () => { // console.log('изменения в импуте')   // console.log(input.value);
        if(isNaN(input.value)) {
            console.log('not a number') 
            input.closest('div').classList.add('box_input_error');
        } else {
            input.closest('div').classList.remove('box_input_error');
        }
        allSum();
    })
}
function checkInputError (value, button, inputButton) {
    if(value <= 0 || isNaN(value)) {
        button.closest('div').classList.add('box_input_error');
        return inputButton.value = 0;
    } else {
        button.closest('div').classList.remove('box_input_error');
    }
}

let btnAll = document.querySelectorAll('.btn-calc');

// let intervalMaxToMin;
// let intervalMinToMax;

// function bntclearInterval (){
//     for (let btn of btnAll){
//         btn.addEventListener('click', function() {
//             clearInterval(intervalMaxToMin);
//             clearInterval(intervalMinToMax);
//         })
//     }
// };

for (let btn of btnAll){
    btn.addEventListener('click', function() {        // console.log('клик по кнопке  - или +');        // console.log(btn);
        let btnUniqueClass = btn.className.replace("btn-calc ", "");        // console.log(btnUniqueClass);
        let inputButton = document.getElementById(`${btnUniqueClass}`);     // console.log(inputButton);


        if(btn.innerHTML == '-') {
            if (inputButton.classList.contains('input-change-5ps')) {
                inputButton.value -= 5;
            } else {
                inputButton.value -= 1;
            }
            checkInputError (inputButton.value, btn, inputButton)             // console.log('minus')
        } else {
            if(inputButton.value == 0) {
                btn.closest('div').classList.remove('box_input_error');
            }
            if (inputButton.classList.contains('input-change-5ps')) {
                inputButton.value = +inputButton.value + 5;            
            } else {
                inputButton.value = +inputButton.value + 1;
            }                        // console.log('plus')
        }
        allSum();
    })
}



function allSum(){
    // bntclearInterval ();

    let calcOldResult = Math.round(Number(document.getElementById("result").innerHTML.replace(/[а-я]/g, ''))); //записываем старый результат
    
    let num1 = Number(document.getElementById("num1").value); // кол-во м2
    let num2 = Number(document.getElementById("num2").value); // длина плитки
    let num3 = Number(document.getElementById("num3").value); // ширина плитки
    let num4 = Number(document.getElementById("num4").value); // штук по длине
    let num5 = Number(document.getElementById("num5").value); // штук по ширине

    // if(num1 <= 0 ) { //Устанавливаем минимум 1 м2
    //     document.getElementById("num1").value = 1;
    // }

    let sumRows = ((Math.sqrt(num1))/(num2)*100);    // console.log(' рядов = ' + sumRows)
    let sumColumn = ((Math.sqrt(num1))/(num3)*100);    // console.log(' колонок = '+ sumColumn)
    let m1 = num4*sumColumn*(sumRows-1);    // console.log(' количество по рядам изделий = ' + m1)
    let m2 = num5*sumRows*(sumColumn-1);    // console.log(' количество по колонкам изделий = ' + m2)
    let result = Math.round(m1 + m2);
    document.getElementById("result").innerHTML = result + " шт";
    let result2 = Math.round(0.65*result);
    document.getElementById("result2").innerHTML = result2 + " шт";
    let result3 = Math.round(result/num1);
    document.getElementById("result3").innerHTML = result3 + " шт";

    if(isNaN(result || result3) || num2 == 0 || num3 == 0 ){
        return calcErrorResult ();
    }
    if(calcOldResult > result) {
        console.log('OLD = ' + calcOldResult + ' БОЛЬШЕ ' + ' NEW = ' + result);

        function calcResultNumberMaxToMin(numMin, numMax) {
            let l = document.getElementById("result");
            let intervalMaxToMin = setInterval(() => {
                if(numMax - numMin > 100) {
                    numMax = numMax - 100;
                    // l.innerHTML = n + " шт";
                }
                if(numMax - numMin > 10) {
                    numMax = numMax - 10;
                    // l.innerHTML = n + " шт";
                }
                if(numMax - numMin >= 1) {
                    numMax = numMax - 1;
                    // l.innerHTML = n + " шт";
                }
                if (numMax == numMin ) {
                    clearInterval(intervalMaxToMin);
                }
                l.innerHTML = numMax + " шт";
            }, 
               100);
        }
        calcResultNumberMaxToMin(result, calcOldResult);

    } else {
        console.log('OLD = ' + calcOldResult + ' МЕНЬШЕ ' + ' NEW = ' + result);
        function calcResultNumberMinToMax(numMin, numMax) {
            let l = document.getElementById("result");
            console.log(l);
            let intervalMinToMax = setInterval(() => {
                if(numMax - numMin > 100) {
                    numMin = numMin + 100;
                    l.innerHTML = numMin + " шт";
                }
                if(numMax - numMin > 10) {
                    numMin = numMin + 10;
                    l.innerHTML = numMin + " шт";
                }
                if(numMax - numMin >= 1) {
                    numMin = numMin + 1;
                    l.innerHTML = numMin + " шт";
                }
                if (numMin == numMax) {
                    clearInterval(intervalMinToMax);
                    l.innerHTML = numMin + " шт";
                }

            }, 
               100);
        }
        calcResultNumberMinToMax(calcOldResult, result);
    }
};
// allSum()

function calcErrorResult () {
    document.getElementById("result").innerHTML = "0  шт";
    document.getElementById("result2").innerHTML = "0  шт";
    document.getElementById("result3").innerHTML = "0  шт";
}


// function calcResultNumberMaxToMin(numMin, numMax) {
//     n = numMax;
//     let l = document.getElementById("result");
//     let intervalMaxToMin = setInterval(() => {
//         if(n - numMin > 100) {
//             n = n - 100;
//             // l.innerHTML = n + " шт";
//         }
//         if(n - numMin > 10) {
//             n = n - 10;
//             // l.innerHTML = n + " шт";
//         }
//         if(n - numMin >= 1) {
//             n = n - 1;
//             // l.innerHTML = n + " шт";
//         }
//         if (n == numMax) {
//             clearInterval(intervalMaxToMin);
//         }
//         l.innerHTML = n + " шт";
//     }, 
//        100);
// }


// $('.plus').click(function() {
//     const input = $(this).closest(".counter").find("input");
//     input.val(+input.val() + 1);
//   });
  
//   $('.minus').click(function() {
//     const input = $(this).closest(".counter").find("input");
//     input.val(+input.val() - 1);
//   });




// // Убавляем кол-во по клику
//     $('.quantity_inner .bt_minus').click(function() {
//     let $input = $(this).parent().find('.quantity');
//     let count = parseInt($input.val()) - 1;
//     count = count < 1 ? 1 : count;
//     $input.val(count);
// });
// // Прибавляем кол-во по клику
// $('.quantity_inner .bt_plus').click(function() {
//     let $input = $(this).parent().find('.quantity');
//     let count = parseInt($input.val()) + 1;
//     count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
//     $input.val(parseInt(count));
// }); 
// // Убираем все лишнее и невозможное при изменении поля
// $('.quantity_inner .quantity').bind("change keyup input click", function() {
//     if (this.value.match(/[^0-9]/g)) {
//         this.value = this.value.replace(/[^0-9]/g, '');
//     }
//     if (this.value == "") {
//         this.value = 1;
//     }
//     if (this.value > parseInt($(this).data('max-count'))) {
//         this.value = parseInt($(this).data('max-count'));
//     }    
// });  