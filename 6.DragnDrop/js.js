let currentDroppable = null;
let main = document.getElementById('main');

let thumb = document.getElementById('second');
let positionA;

thumb.onmousedown = function(event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    let shiftY = event.clientY - thumb.getBoundingClientRect().top;
        // shiftY здесь не нужен, слайдер двигается только по горизонтали


    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {


        let newLeft = event.clientX - shiftX - main.getBoundingClientRect().left;
        let newTop = event.clientY - shiftY - main.getBoundingClientRect().top;

        if(event.clientX > 50 && event.clientY < 50 ) {
            // console.log('GORIZONT')
            console.log(event.clientX )
            console.log(event.clientY )
            // курсор вышел из слайдера => оставить бегунок в его границах.
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = main.offsetWidth - thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            thumb.style.left = newLeft + 'px';
            positionA = newLeft;
        } 

        // if(event.clientX < 50 && event.clientY > 50) {
        //     thumb.style.left = 0 + 'px';
        //     console.log('VERTICAL')
        //     // курсор вышел из слайдера => оставить бегунок в его границах.
        //     if (newTop < 0) {
        //         newTop = 0;
        //     }
        //     let rightEdge = main.offsetWidth - thumb.offsetWidth;
        //     if (newTop > rightEdge) {
        //         newTop = rightEdge;
        //     }
        //     thumb.style.top = newTop + 'px'; 
        // }
        
        // if (event.clientX < 50 && event.clientY > 50 || event.clientX < 50 && event.clientY < 50  ) {
        //     console.log('VERTICAL')
        //     // курсор вышел из слайдера => оставить бегунок в его границах.
        //     if (newTop < 0) {
        //         newTop = 0;
        //     }
        //     let rightEdge = main.offsetWidth - thumb.offsetWidth;
        //     if (newTop > rightEdge) {
        //         newTop = rightEdge;
        //     }
        //     thumb.style.top = newTop + 'px';
        // }
    }

    function onMouseUp() {
        if(positionA <= 25 ) {
            thumb.style.left = 0 + 'px';
        }
        if(positionA > 25 && positionA <= 50 ) {
            thumb.style.left = 50 + 'px';
        }
        if(positionA > 50 && positionA <= 75 ) {
            thumb.style.left = 50 + 'px';
        }
        console.log('CLICKS GAME')

        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};

thumb.ondragstart = function() {
    return false;
};
