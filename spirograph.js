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
function setup() {
  createCanvas(windowWidth,windowHeight);
  rMax = windowWidth/4;
  OMax = windowWidth/4;
  R=rMax+1;
  background(0);
  stroke(0,100,0);
  frameRate(30);
}

function draw() {
  background(0);
  for (let t = 0; t < (100 / frameMod) * (frame % frameMod); t+= 0.025) {
    line(x(t),y(t),x(t+0.025),y(t+0.025));
  }
  if (frame % frameMod == 0) {
    r +=rDir;
    if (O == r) {
      r += rDir;
    }
    if (r >= rMax || r <= 9) {
      rDir *= -1;
      O += ODir;
      if (O >= 40 || O <= 20) {
        ODir *= -1;
      }
    }
  }
  frame++;
}

function x(t) {
  return windowWidth/2 + (R-r)*Math.cos(t) + O*Math.cos(((R-r)/r)*t);
}

function y( t) {
  return windowHeight/2 + (R-r)*Math.sin(t) + O*Math.sin(((R-r)/r)*t);
}