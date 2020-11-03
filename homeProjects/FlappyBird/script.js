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
    this.speed = -1.8;
  }
}
class pipe {
  constructor (position) {
    this.x = 1200 + (100 * position)
  }
}

var bird;
function setup() {
  createCanvas(1200, 400);
  bird = new birdy();
}

function draw() {
  background(220);
  bird.speeds();
  bird.draw();
}
function keyPressed() {
  if (keyCode == 32) {
    console.log("Space");
    bird.jump();
  }
}
