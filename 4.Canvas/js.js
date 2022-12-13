function draw() {
	const canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");

		ctx.fillRect(25, 25, 100, 100);
		ctx.clearRect(45, 45, 60, 60);
		ctx.strokeRect(50, 50, 50, 50);
	}
}
draw();


function drawpath() {
	const canvaspath = document.getElementById("path");
	if (canvaspath.getContext) {
		const ctx = canvaspath.getContext("2d");

		ctx.beginPath();
		ctx.moveTo(75, 50); // перемещение пера на точку ху
		ctx.lineTo(100, 75);
		ctx.lineTo(100, 25);
		ctx.fill();
	}
}
drawpath()

function draw2() {
	const canvas = document.getElementById("path2d");
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");

		const rectangle = new Path2D();
		rectangle.rect(10, 10, 50, 50);

		const rectangle2 = new Path2D();
		rectangle2.rect(60, 60, 100, 100);

		const circle = new Path2D();
		circle.arc(100, 35, 25, 0, 2 * Math.PI);

		ctx.stroke(rectangle);
		ctx.fill(rectangle2);
		// ctx.fill(circle);
	}
}

draw2() 