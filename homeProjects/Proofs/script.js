/*jshint esversion: 6 */
var shape;
class shapeClass {
  constructor(formObject, points) {
    this.points = [];
    for (var x = 0; x < points*2; x = x + 2) {
      this.points.push([formObject[x].value,formObject[x+1].value]);
    }
  }

}
function rombusSubmit() {
  shape = new shapeClass(document.forms.Rombus,4);
  return false;
}
