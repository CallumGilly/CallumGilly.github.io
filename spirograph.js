//Defines each variable required for spirographhs
let r;
let R;
let O;
let frame = 0;
let frameMod = 40;

//Runs once at the start and sets environment variable
function setup() {
  //R has to stay constant to take up the whole canvas
  R=(windowWidth/2)+1;

  //P5JS canvas setup
  createCanvas(windowWidth,windowHeight);
  stroke(0,100,0);
  frameRate(frameMod * (2/3));
}

//Runs ever frame
function draw() {
  background(0);
  //Calculate current r and O values and draw the next step of spiro graph
  r= 9 + Math.abs(60 - (Math.floor(frame / 20) % 120));
  O= 20 + Math.abs(20 - (Math.floor(frame / 100) % 40));
  for (let t = 0; t < (100 / frameMod) * (frame % frameMod); t+= 0.025) {
    line(x(t),y(t),x(t+0.025),y(t+0.025));
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
  R = windowWidth/2 + 1;
}