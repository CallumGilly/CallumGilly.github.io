//Sets the speed in mili seconds between each char;
let typeSpeed = 200;

//Sets the data to be type 
let title = "$Callum Gilchrist"; //Title
let subtitle = "";
let typedTitle = "";
let notSkipped = true;
let stage = 0;

//Makes the data to be typedTitle usable with pop() by converting it to an array and reversing it.
title = title.split("").reverse();

async function typeName() {
  //Ignores timer for single spaces.
  if (notSkipped) {
    if (title[title.length - 1] == " ") {
      typedTitle += title.pop();
    }
    typedTitle += title.pop();
  } else {
    while (title.length > 0) {
      typedTitle += title.pop()
    }
  }
  //Writes to the heading.
  $("#NameTitle").text(typedTitle);
 

  //If not at the end of the line, call the function again to print all the next letters.
  if (title.length !== 0) {
    setTimeout(typeName, typeSpeed);
  //Once the end of a line is reached print the next line if there is one.
  } else {
    fadeInPage();
  }
}

async function fadeInPage() {
  $("#nav-placeholder").load("navbar.html");
  if (notSkipped) {
    $("#SubTitle").fadeIn(3000);
    $("#nav-placeholder").fadeIn(3000);
    $("#spiro").fadeIn(3000);
    
  } else {
    $("#SubTitle").fadeIn(0);
    $("#nav-placeholder").fadeIn(0);
    $("#spiro").fadeIn(0);
  }
}

//If user presses any key skip the animation
window.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
  notSkipped = false;
});
$("#spiro").hide();
typeName();