function setup() {
  frameRate(0);
  createCanvas(300,300);
  background('#CCC');
}
function draw() {

}
function clean() {
  background('#CCC')
}
function rectang() {
  fill(document.getElementById("BackColour").value);
  stroke(document.getElementById("StrokeColour").value);
  rect(document.getElementById("x").value,
    document.getElementById("y").value,
    document.getElementById("w").value,
    document.getElementById("h").value);

}
