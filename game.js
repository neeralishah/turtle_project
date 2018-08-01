function component (width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  thisx.x = x;
  this.update = function (){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.width, this.height);
  }
}
  this.newPos = function(){
    this.x += this.speedX;
}
function updateGameArea(){
  myGameArea.clear();
  myGamePiece.newPos();
  myGamePiece.update();
}
function moveright(){
  myGamePiece.speedX +=1;
}
funtion moveleft(){
  myGamePiece.speedX -=1;
}
function draw() {
  // drawing code
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI*2);
  ctx.fillStyle = "#71f756";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 0);
