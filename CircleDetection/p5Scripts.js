//Runs once at the start and sets environment variable
let capture;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0)
  capture = createCapture(VIDEO);
  capture.size(250, 250);
  //capture.hide();
}

//Runs ever frame
function draw() {
  background(0);
  image(capture, 0, 0, 250, 250);
  filter(GRAY)
}