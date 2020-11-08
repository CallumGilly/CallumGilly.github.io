class birdy {
  constructor() {
    console.log('Made a birdy');
    this.x = 10;
    this.y = displayHeight/4;
    this.upVelocity = 1;
    this.speed = 0;
    this.ylast = 0;
  }
  speeds() {
    //Consts
    const grav = 1.016;
    const speedMultiplier = 1.75;

    //go down
    if (this.upVelocity > 1.01) {
      this.upVelocity -= 0.055;
    }

    //gravity
    if (this.speed < 2 || this.speed > -2) {
      this.speed += grav - this.upVelocity;
    }

    //Limit speeds and adding multipier if limits are not needed
    if (this.y + this.speed < -2 || this.y + this.speed > 402){
      this.speed = 0;
    }else {
      this.y += this.speed  * speedMultiplier;
    }

    //Keep the bird from getting stuck (IDK - needs it)
    if (this.y == this.ylast) {
      if (this.y < 10) {
        this.y = 0;
      }else {
        this.y = 402;
      }
    }
    this.ylast = this.y;
  }
  draw() {
    //Draw
    fill(0,0,0);
    rect(this.x,this.y,25,25);
  }
  jump() {
    this.upVelocity = 1.25;
    this.speed = -1.2;
  }
}
class pipe {
  constructor (position, fX, fY) {
    this.frameX = fX;
    this.frameY = fY;
    this.x = this.frameX + (400 * position);
    this.height = null;
    this.space = null;
    this.newHeight();
  }
  newHeight () {
    var proposedHeight = 0;
    do {
      proposedHeight = Math.floor(Math.random()*400);
      console.log(proposedHeight);
    }
    while(!(proposedHeight < 100 || proposedHeight > this.frameY - 200));
    this.height = proposedHeight;
    this.space = (Math.floor(Math.random() * 60)+130)
  }
  drawPipe() {
    fill(0,255,30);
    rect(this.x,0,50,this.height);
    rect(this.x,this.height + this.space,50,this.frameY);
  }
  update() {
    this.x -= 2;
  }
}

var bird;
var pipes = [];
function setup() {
  createCanvas(1200, 400);
  bird = new birdy();
  for (var ai = 0; ai < 5; ai++) {
    pipes.push(new pipe(ai,1200,400));
  }
}

function draw() {
  background(220);
  bird.speeds();
  bird.draw();
  for (var ai = 0; ai < pipes.length; ai++) {
    pipes[ai].update();
    pipes[ai].drawPipe();
  }
}
function keyPressed() {
  if (keyCode == 32) {
    console.log("Space");
    bird.jump();
  }
}
