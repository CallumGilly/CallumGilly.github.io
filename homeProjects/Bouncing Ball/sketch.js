
function setup() {
	createCanvas(500, 500);
	myBall = new ball(250, 250);
}

function draw() {
  background(100,0,120);
	myBall.drawBall();
  myBall.moveBall(500,500);
}
