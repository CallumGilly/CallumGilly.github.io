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
    this.rightAngles = this.isRightAngles();
    this.equalSides = this.isEqualSides();
    this.shapeType = this.whatShape();
    this.proof();
  }
  proof() {
    var myText = "";
    if (this.numOfPoints == 4) {
      myText += "The shape must be a quadrilateral as there are four points";
      //stringfie points:
      var points = "";
      for (var x = 0; x < this.numOfPoints; x++) {
        if (x == 0) {
          points += " ";
        } else if (x + 1 == this.numOfPoints) {
          points += " and ";
        } else {
          points += ", ";
        }
        points += ("(" + this.points[x][0] + "," + this.points[x][1] + ")");
      }
      myText += "\nThese are:" + points;

      

      document.getElementById('results').value = myText;
      console.log(myText);
    }
  }
  isRightAngles() {
    var tempArr = [];
    //Push start and end points of lines to the tempArr
    for (var x = 0; x < this.numOfPoints; x++) {
      var temp = [x];
      if (x + 1 < this.numOfPoints) {
        temp.push(x+1);
      }
      else {
        temp.push(0);
      }
      if (x + 2 < this.numOfPoints) {
        temp.push(x + 2);
      }
      else {
        temp.push(1);
      }
      tempArr.push(temp);
    }
    var flag = false;
    for (var i = 0; i < tempArr.length; i ++) {
      var gradient0 = (this.points[tempArr[i][0]][1] - this.points[tempArr[i][1]][1]) / (this.points[tempArr[i][0]][0] - this.points[tempArr[i][1]][0]);
      var gradient1 = (this.points[tempArr[i][1]][1] - this.points[tempArr[i][2]][1]) / (this.points[tempArr[i][1]][0] - this.points[tempArr[i][2]][0]);
      if (-1 * (gradient0**-1) == gradient1) {
        flag = true;
      }
    }
    return flag;
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
  isEqualSides() {
    //Calculates whether all sides are equal lengtb
    var equalSides = true;
    //Prove Lengths are the same
    var firstLen = this.lengths[0][2];
    for (var x = 1; x < 4; x++) {
      if (this.lengths[x][2] != firstLen) {
        equalSides = false;
      }
    }
    return equalSides;
  }
  whatShape() {
    //0 = unknow
    //1 = square
    //2 = Rectangle
    //3 = Rombus
    var type = 0;
    if (this.rightAngles) {
      if (this.equalSides) {
        type = 1;
      } else {
        type = 2;
      }
    } else {
      if(this.equalSides) {
        type = 3;
      }
    }
    return type;
  }
}
function rombusSubmit() {
  shape = new shapeClass(document.forms.Rombus,4);
  return false;
}
