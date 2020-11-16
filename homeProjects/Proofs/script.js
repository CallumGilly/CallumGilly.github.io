/*jshint esversion: 6 */
var shape;
class shapeClass {
  constructor(formObject) {
    this.a = [formObject[0].value,formObject[1].value];
    this.b = [formObject[2].value,formObject[3].value];
    this.c = [formObject[4].value,formObject[5].value];
    this.d = [formObject[6].value,formObject[7].value];
  }
}
function rombusSubmit() {
  shape = new shapeClass(document.forms.Rombus);
  return false;
}
