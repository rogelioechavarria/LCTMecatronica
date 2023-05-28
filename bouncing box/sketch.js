let size = 50,
  posX,
  posY;
(direction = false), (speed = 2);
function setup() {
  let bg = createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = windowHeight - size;
}
// let value = 10;

function draw() {
  clear();
  fill('#225490');
  rect(posX, posY, size, size);
  move();
  checkCollisions();
}

function checkCollisions() {
  if (posY > windowHeight - size) direction = false;
  if (posY < 0) direction = true;
}

function move() {
  if (direction) posY = posY + speed;
  else posY = posY - speed;
}
