let nums = document.querySelectorAll('input')

for(let num of nums) {
    console.log(num.value)
    num.addEventListener('change', ()=>{
        allSum()
    })
}

let btnAll = document.querySelectorAll('.btn')
for (let bt of btnAll){
    bt.addEventListener('click', function(){
        let str1 = bt.className;
        str1 = str1.replace("btn ", "");
        let num = document.getElementById(str1);
            if(bt.innerHTML == '-') {
                if(num.value == 0) {
                    num.value = 0; 
                } else {
                    num.value = Number(num.value) - 1;
                }
            } else {
                num.value = Number(num.value) + 1;
            }        
        console.log(num.value)
        allSum()
    })
}

function allSum(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let num4 = Number(document.getElementById("num4").value);
    let num5 = Number(document.getElementById("num5").value);
    let sumRows = ((Math.sqrt(num1))/(num3)*100);
    console.log(' рядов = ' + sumRows)
    let sumColumn = ((Math.sqrt(num1))/(num3)*100);
    console.log(' колонок = '+ sumColumn)
    let m1 = num4*sumColumn*(sumRows-1);
    console.log(' количество по рядам = ' + m1)
    let m2 = num5*sumRows*(sumColumn-1);
    console.log(' количество по колонкам = ' + m2)
    let result = Math.round(m1 + m2);
    document.getElementById("result").innerHTML = result + " шт";
    let result2 = Math.round(0.65*result);
    document.getElementById("result2").innerHTML = result2 + " шт";
    let result3 = Math.round(result/num1);
    document.getElementById("result3").innerHTML = result3 + " шт";
};
allSum()
