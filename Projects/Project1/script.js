function setup() {
  frameRate(0);
  createCanvas(300,300);
  background('#CCC');
}
function draw() {

}
function getData() {
  fill(document.getElementById("BackColour").value);
  stroke(document.getElementById("StrokeColour").value);
  strokeWeight(document.getElementById("SW").value);
}
function clean() {
  background('#CCC');
}
function circ() {
  getData();
  console.log('circl');
  ellipse(document.getElementById("x").value,
    document.getElementById("y").value,
    document.getElementById("w").value,
    document.getElementById("h").value);
}
function rectang() {
  getData();
  console.log('rect');
  rect(document.getElementById("x").value,
    document.getElementById("y").value,
    document.getElementById("w").value,
    document.getElementById("h").value);
}
