let size = 50,
  posX,
  posY,
  initialSpeed = -5 * 100,
  speed = initialSpeed,
  g = 9.8 * 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2 - size / 2;
  posY = windowHeight - size / 2;
}

function draw() {
  clear();
  fill('#225490');
  ellipse(posX, posY, size, size);
  move();
  checkCollisions();
}

function checkCollisions() {
  if (posY > windowHeight - size / 2) {
    speed = initialSpeed;
    initialSpeed = initialSpeed * 0.8;
    posY = windowHeight - size / 2;
  }
}

function move() {
  const oldSpeed = speed;
  const dt = deltaTime / 1000;
  speed = speed + g * dt;
  posY += ((oldSpeed + speed) * dt) / 2;
}
