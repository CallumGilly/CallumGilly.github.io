var boardX = 10;
var boardY = 20;
var board = [];

function draw_board() {
  //Function used to draw the board
  var square_size = 20;
  for (var x = 0; x < board.length; x++) {
    for (var y = 0; y < board[x].length; y++) {
      stroke(200,200,200);
      //Colours:
      //null = black
      //1 = Light blue - 4 long line Line
      //2 = Dark blue - Inverted L
      //3 = Orange - L
      //4 = Red - Z
      //5 = Pink - T
      //6 - Yellow - Square
      //7 - Green - S
      switch (board[x][y]) {
        case null:
          fill(0,0,0);
          break;
        case 1:
          fill(0, 204, 255);
          break;
        case 2:
          fill(0, 51, 204);
          break;
        case 3:
          fill(255, 102, 0);
          break;
        case 4:
          fill(255, 0, 0);
          break;
        case 5:
          fill(255, 0, 255);
          break;
        case 6:
          fill(255, 204, 0);
          break;
        case 7:
          fill(0, 204, 0);
          break;
        default:
          fill(255);
      }
      rect(square_size+x*square_size,square_size+y*square_size,square_size,square_size);
    }
  }
}

function setup() {
  //setup p5js constants
  createCanvas(600,600);
  background(0,0,0);

  // Make the blank board and print it to the console - board can be accessed as board[x][y]
  for (var x = 0; x < boardX; x++) {
    temp = [];
    for (var y = 0; y < boardY; y++) {
      temp.push(null);
    }
    board.push(temp);
  }
  console.log(board);
}

function draw() {
  draw_board(board);
}
