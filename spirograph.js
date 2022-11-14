//Half of these are useless but I do not wish to deal with this bull rn
let r=10;
let rDir=1;
let rEnabled=1;
let rMax;
let R=2;
let RDir=10;
let REnabled=0;
let RMax;
let O=30;
let ODir = 2.5;
let OMax;
let frame = 0;
let frameMod = 20;

//Runs once at the start and sets environment variable
function setup() {
  createCanvas(windowWidth,windowHeight);
  rMax = 70//windowWidth/8;
  OMax = windowWidth/4;
  R=windowWidth/4+1;
  background(0);
  stroke(0,100,0);
  frameRate(30);
}

//Runs ever frame
function draw() {
  background(0);
  for (let t = 0; t < (100 / frameMod) * (frame % frameMod); t+= 0.025) {
    line(x(t),y(t),x(t+0.025),y(t+0.025));
  }
  //This does cool maths to make it move, I've changed it so much I no longer know what it does
  if (frame % frameMod == 0) {
    //Code in this runs ever 20 frames
    r +=rDir;
    if (O == r) {
      r += rDir;
    }
    if (r >= rMax || r <= 9) {
      rDir *= -1;
    }
    if (frame % (frameMod*7) == 0) {
      O += ODir;
      if (O >= 40 || O <= 20) {
        ODir *= -1;
      }
    }
  }
  frame++;
}

//Calculate a X coordinate
function x(t) {
  return windowWidth/2 + (R-r)*Math.cos(t) + O*Math.cos(((R-r)/r)*t);
}

//Calculate a Y coordinate
function y( t) {
  return windowHeight/2 + (R-r)*Math.sin(t) + O*Math.sin(((R-r)/r)*t);
}

//Resize the canvas on window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  R = windowWidth/4 + 1;
}