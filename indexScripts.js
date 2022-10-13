//Sets the speed in mili seconds between each char;
let typeSpeed = 200;

//Sets the data to be typed
let toType = ["$Callum Gilchrist","Computer Science Student and General Nerd"]; //Array of strings at first, then should become and array or reversed arrays
let currentLine = 0;
let typed = "";

//Makes the data to be typed usable with pop().
for (var ai = 0; ai < toType.length; ai++) {
  toType[ai] = toType[ai].split("").reverse();
}

async function typeHeadings() {
  //Ignores timer for single spaces.
  if (toType[currentLine][toType[currentLine].length - 1] == " ") {
    typed += toType[currentLine].pop();
  }
  typed += toType[currentLine].pop();
  
  //Writes to the current line.
  switch (currentLine) {
    case 0:
      $("#NameTitle").text(typed);
      break;
    case 1:
      $("#SubTitle").text(typed);
      break;
    default:
      break;
  }

  //If not at the end of the line, call the function again to print all the next letters.
  if (toType[currentLine].length !== 0) {
    setTimeout(typeHeadings, typeSpeed);
  //Once the end of a line is reached print the next line if there is one.
  } else if (currentLine + 1 < toType.length){
      typed = "";
      currentLine += 1;
      typeSpeed = 100;
      setTimeout(typeHeadings, typeSpeed);
  }
}

typeHeadings();
