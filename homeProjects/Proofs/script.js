/*jshint esversion: 7 */
var shape;
class shapeClass {
  constructor(formObject, points) {
    this.numOfPoints = points;
    this.points = [];
    for (var x = 0; x < this.numOfPoints*2; x = x + 2) {
      this.points.push([formObject[x].value,formObject[x+1].value]);
    }
    this.lengths = this.calculateLengths();
  }

  calculateLengths() {
    //This function calculates the length of all the lines. This could most likely be more efficiant but I have school and more important stuff than makeing the big O happy
    var tempArr = [];
    //Push start and end points of lines to the tempArr
    for (var x = 0; x < this.numOfPoints; x++) {
      var temp = [x];
      var y = x+1;
      if (y == this.numOfPoints) {
        //push zero if its the end of lines
        temp.push(0);
      } else {
        //push the second points
        temp.push(y);
      }
      tempArr.push(temp);
    }
    //Calculate the lengths of each line
    for (var i = 0; i < tempArr.length; i++) {
      //Store the X and Y of each points in there own vairiables to stop one massive line
      var xOne = this.points[tempArr[i][0]][0];
      var yOne = this.points[tempArr[i][0]][1];
      var xTwo = this.points[tempArr[i][1]][0];
      var yTwo = this.points[tempArr[i][1]][1];

      //Use pythagoras theorem to calculateLengths
      var myLength = Math.sqrt(Math.abs(xOne-xTwo)**2 + Math.abs(yOne-yTwo)**2);
      //Push to the main array
      tempArr[i].push(myLength);
    }
    return tempArr;
  }

  isRombus() {
    var flag = true;
    if (this.numOfPoints == 4) {
      //Prove Lengths are the same
      var firstLen = this.lengths[0][2];
      for (var x = 1; x < 4; x++) {
        if (this.lengths[x][2] != firstLen) {
          flag = false;
        }
      }

    } else {
      flag = false;
    }
    return flag;
  }
}
function rombusSubmit() {
  shape = new shapeClass(document.forms.Rombus,4);
  return false;
}
