let size = 50,
  pos = [0, 0],
  speed = [1, 1];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  fill('#225490');
  rect(pos[0], pos[1], size, size);
  move();
  checkCollisions();
}

function checkCollisions() {
  if (pos[0] > windowWidth - size) speed[0] = speed[0] * -1;
  if (pos[0] < 0) speed[0] = speed[0] * -1;
  if (pos[1] > windowHeight - size) speed[1] = speed[1] * -1;
  if (pos[1] < 0) speed[1] = speed[1] * -1;
}

function move() {
  pos[0] = pos[0] + speed[0];
  pos[1] = pos[1] + speed[1];
}
