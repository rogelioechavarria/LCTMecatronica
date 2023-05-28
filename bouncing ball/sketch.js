let size = 100,
  posX,
  posY,
  initialSpeed = -2 * 100,
  speed = initialSpeed,
  g = 1 * 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2 - size / 2;
  posY = windowHeight - size / 2;
}

function draw() {
  clear();
  squeeze();
  move();
  checkCollisions();
}

function checkCollisions() {
  if (posY > windowHeight) {
    speed = initialSpeed;
    initialSpeed = initialSpeed;
    posY = windowHeight - size / 2;
  }
}

function move() {
  const oldSpeed = speed;
  const dt = deltaTime / 1000;
  speed = speed + g * dt;
  posY += ((oldSpeed + speed) * dt) / 2;
}

function squeeze() {
  fill('#225490');
  let squeezedX = size;
  let squeezedY = size;
  const sigmoid = 1 + Math.abs(2 / (1 + Math.E ** (-speed / 350))) - 1;
  if (posY > windowHeight - size / 2) {
    squeezedY = size / sigmoid;
    squeezedX = sigmoid * size;
  }
  ellipse(posX, posY, squeezedX, squeezedY);
}
