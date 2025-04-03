let startTime;
let kisses = [];

function setup() {
  createCanvas(600, 300);
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(255);

  if (localStorage.getItem('startTime')) {
    startTime = int(localStorage.getItem('startTime'));
  } else {
    startTime = Date.now();
    localStorage.setItem('startTime', startTime);
  }
}

function draw() {
  background(0);

  let now = Date.now();
  let secondsPassed = floor((now - startTime) / 1000);

  let shakeX = map(mouseX, 0, width, -2, 2);
  let shakeY = map(mouseY, 0, height, -2, 2);

  text(secondsPassed + " kisses", width / 2 + shakeX, height / 2 + shakeY);

  for (let i = 0; i < kisses.length; i++) {
    textSize(32);
    text("💋", kisses[i].x, kisses[i].y);

    kisses[i].y -= 0.5;
    kisses[i].life -= 1;

    if (kisses[i].life <= 0) {
      kisses.splice(i, 1);
      i--;
    }
  }
}

function mousePressed() {
  kisses.push({ x: mouseX, y: mouseY, life: 120 });
}
