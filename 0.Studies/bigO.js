 //Оценка сложности
//https://www.youtube.com/watch?v=luExFPwQVOY

//  Сложность алгоритмов оценивают 
//  - по времени выполнения 
//  - по используемой памяти


 // худший и лучший случай по кол-ву N операций.
 // Если мы откидываем половину О (log n)
 // Сортировка 


 function selArr (array) {
    for( let i = 0; i < array.length - 1; ++i) {
        for(let j = i + 1; j< array.length; ++j){
            if(array[i]> array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
 }
 let array = [1,6,53,4,2,12,56,23,14]
 selArr(array)
 console.log(array);