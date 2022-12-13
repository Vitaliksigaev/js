
const sun = new Image();
const moon = new Image();
const earth = new Image();

function init() {
    sun.src = "canvas_sun.png";
    moon.src = "canvas_moon.png";
    earth.src = "canvas_earth.png";
    window.requestAnimationFrame(draw); //https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
}

function draw() {
    const canvas = document.getElementById("canvas");
    canvas.width = 300;
    canvas.height = 300; // задаем ширину и высоту
    const ctx = document.getElementById("canvas").getContext("2d");


    ctx.globalCompositeOperation = "destination-over"; //Целевое изображение накрывает исходное
    ctx.clearRect(0, 0, 300, 300); // clear canvas // устанавливает прозрачный чёрный цвет для всех пикселей, расположенных внутри прямоугольника, заданного начальной точкой (x, y) и размерами (width, height), таким образом стирая любое ранее нарисованное содержимое.

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)"; // ТЕНЬ ЛУНЫ    задаёт цвет или стиль, используемый при заливке фигур
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";  // ОРБИТА ЗЕМЛИ  задаёт цвет или стиль, используемый при выполнении обводки фигур.
    ctx.save(); // Сохраняем
    ctx.translate(150, 150); // Перемещаем центр координат в центр холста. перемещая холст и его исходные xединицы по горизонтали и y единицы по вертикали на сетке.

    // Earth
    const time = new Date(); // получение текущей даты или текущего положения земли и луны
    ctx.rotate( // Центр вращения всегда является исходной точкой холста.
    ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );

    ctx.translate(105, 0); // перемещаем начало холста
    ctx.fillRect(0, -12, 40, 24); // Shadow  прямоугольник тени



    // Добавление земли которая вращается
    ctx.rotate( // Центр вращения всегда является исходной точкой холста.
    ((2 * Math.PI) / 20) * time.getSeconds() +
        ((2 * Math.PI) / 20000) * time.getMilliseconds()
    );
    ctx.drawImage(earth, -12, -12); // рисование земли на холсте

    // Moon
    ctx.save();
    ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );

    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();




    // Вращение солнца

    ctx.translate(150, 150); // перемещаем начало холста
    ctx.rotate( // Центр вращения всегда является исходной точкой холста.
    ((2 * Math.PI) / 30) * time.getSeconds() +
        ((2 * Math.PI) / 30000) * time.getMilliseconds()
    );
    ctx.scale(1.41 , 1.41);
    ctx.translate(-150, -150);
    ctx.drawImage(sun, 0, 0, 300, 300);
    window.requestAnimationFrame(draw);
}

init();