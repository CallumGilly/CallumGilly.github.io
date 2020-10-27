class birdy {
  constructor() {
    console.log('Made a birdy');
    this.x = 10;
    this.y = displayHeight/4;
    this.upVelocity = 1;
    this.gravity = 1.016;
    this.speed = 0;
  }
  update() {
    fill(0,0,0);
    //go down
    if (this.upVelocity > 1.01) {
      this.upVelocity -= 0.055;
    }

    //gravity
    if (this.speed < 2 || this.speed > -2) {
      this.speed += this.gravity - this.upVelocity;
    }
    if (this.y + this.speed < 0 || this.y + this.speed > 400){
      this.speed = 0;
    }else {
      this.y += this.speed;
    }
    //Draw
    rect(this.x,this.y,25,25);
  }
  jump() {
    this.upVelocity = 1.25;
    this.speed = -1.8;
  }
}
var bird;
function setup() {
  createCanvas(1200, 400);
  bird = new birdy();
}

function draw() {
  background(220);
  bird.update();
}
function keyPressed() {
  if (keyCode == 32) {
    console.log("Space");
    bird.jump();
  }
}
