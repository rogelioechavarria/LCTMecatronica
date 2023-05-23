function setup() {
  createCanvas(windowWidth, windowHeight);
}
let value = 10;
function draw() {
  clear();
  fill('#ff4502');
  rect(0, 0, 250, 250);
  fill('#00ff12');
  rect(250, 0, 250, 250);
  fill('#00aa88');
  rect(500, 0, 250, 250);
  fill('#502390');
  rect(0, 250, 250, 250);
  fill('#9009bb');
  rect(250, 250, 250, 250);
  fill('#ffaa80');
  rect(500, 250, 250, 250);

  fill('#000000');
  rect(windowWidth / 2 - value / 2, windowHeight / 2 - value / 2, value, value);
}

function mouseClicked(event) {
  value += 20;
  if (value > windowHeight) value = 10;
}
