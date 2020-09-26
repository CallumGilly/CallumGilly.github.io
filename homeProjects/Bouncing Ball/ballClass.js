class ball {
  constructor(tempY, tempX) {
    this.y = tempY;
    this.x = tempX;
    this.xVector = 2;
    this.yVector = -2;
  }
  drawBall() {
    stroke(255,165,0);
    fill(255,165,0);
    ellipse(this.y,this.x,50,50);
  }
  moveBall(xWall,yWall) {
    if (this.x >= xWall - 25 || this.x <= 25) {
      this.xVector *= (Math.random() + 0.5) * -1;
      if (this.xVector > 1.5) {
        this.xVector = 1.45;
      }
    }
    if (this.y >= yWall - 25 || this.y <= 25) {
      this.yVector *= (Math.random() + 0.5) * -1;
      if (this.yVector > 1.5) {
        this.yVector = 1.45;
      }
    }
    this.x += this.xVector;
    this.y += this.yVector;
  }
}
