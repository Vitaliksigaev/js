let calcInputs = document.querySelectorAll('.calc-input')
const calcTime = 100;
const calcTimeStep = 1;

for(let input of calcInputs) {
    console.log( input.value )
    input.addEventListener('change', () => {
        allSum()
    }
    )
}

let btnAll = document.querySelectorAll('.btn')
for (let bt of btnAll){

    bt.addEventListener('click', function(){
        // console.log('click');
        // console.log(bt.innerHTML);
        let btnConstanta = bt.innerHTML;
        bt.innerHTML = "<span class='input-span-pre-button'></span>" + bt.innerHTML;

        let el = bt.firstChild;

        el.addEventListener('animationend', function() {
            el.classList.remove('input-span-pre-button')
            // console.log(bt.innerHTML);
            // bt.innerHTML = btnConstanta;
        })
        // console.log(bt.innerHTML);



        let str1 = bt.className;
        // console.log(str1);
        
        str1 = str1.replace("btn ", "");
        // console.log(str1);
        let num = document.getElementById(str1);
        console.log(num)
        // console.log(bt.innerHTML.length)
            if(num == '-') {
                if(num.value == 0) {
                    num.value = 0;
                    console.log(num.value)
                    // let btnt = document.querySelectorAll('.box_input')
                    // btnt.classList.add('.calc-input-error');
                } else {
                    if(num.classList.contains('111')){
                        num.value = Number(num.value) - 5;
                    } else {
                        num.value = Number(num.value) - 1;
                    }
                }
            } else {
                if(num.classList.contains('111')){
                    num.value = Number(num.value) + 5;
                } else {
                    num.value = Number(num.value) + 1;
                }
            }        
        setTimeout(() => {
            bt.innerHTML = bt.innerHTML[bt.innerHTML.length-1] ;
          }, "10000")
        allSum();
    })
}


function allSum(){
    let calcOldResult = Number(document.getElementById("result").innerHTML.replace(/[а-я]/g, ''));

    let num1 = Number(document.getElementById("num1").value); // кол-во м2
    num1.value = num1;
    let num2 = Number(document.getElementById("num2").value); // длина плитки
    let num3 = Number(document.getElementById("num3").value); // ширина плитки
    let num4 = Number(document.getElementById("num4").value); // штук по длине
    let num5 = Number(document.getElementById("num5").value); // штук по ширине
    // if (num1 == 0 || num2 == 0 || num2 == 0 || num4 == 0 && num5 == 0) {
    //     console.log('Error')
    //     return false
    // }

    let sumRows = ((Math.sqrt(num1))/(num2)*100);    // console.log(' рядов = ' + sumRows)
    let sumColumn = ((Math.sqrt(num1))/(num3)*100);    // console.log(' колонок = '+ sumColumn)
    let m1 = num4*sumColumn*(sumRows-1);    // console.log(' количество по рядам = ' + m1)
    let m2 = num5*sumRows*(sumColumn-1);    // console.log(' количество по колонкам = ' + m2)
    let result = Math.round(m1 + m2);
    if(calcOldResult > result) {
        console.log('OLD = ' + calcOldResult + ' БОЛЬШЕ ' + ' NEW = ' + result);
        calcResultNumberMaxToMin(result, calcOldResult)
    } else {
        console.log('OLD = ' + calcOldResult + ' МЕНЬШЕ ' + ' NEW = ' + result);
        calcResultNumberMinToMax(calcOldResult, result);
    }



    document.getElementById("result").innerHTML = result + " шт";
    let result2 = Math.round(0.65*result);
    document.getElementById("result2").innerHTML = result2 + " шт";
    let result3 = Math.round(result/num1);
    document.getElementById("result3").innerHTML = result3 + " шт";
};
allSum()

function calcResultNumberMinToMax(numMin, numMax) {
    n = numMin;
    let l = document.getElementById("result");
    let t = (calcTime / (numMax - numMin));
    console.log(t);
    let interval = setInterval(() => {
        n = n + calcTimeStep;
        if (n == numMax) {
            clearInterval(interval);
        }
        l.innerHTML = n + " шт";
    }, 
        t);
}
function calcResultNumberMaxToMin(numMin, numMax) {
    n = numMax;
    let l = document.getElementById("result");
    let t = (calcTime / (numMax - numMin));
    // console.log(t);
    let interval = setInterval(() => {
        n = n - calcTimeStep;
        if (n == numMin) {
            clearInterval(interval);
        }
        l.innerHTML = n + " шт";
    }, 
        t);
}