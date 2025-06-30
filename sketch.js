function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent("animacao-canvas");
  frameRate(30);
}

let carroX = 0;
let tratorX = 600;

function draw() {
  background(230);

  // Campo (lado esquerdo)
  noStroke();
  fill(150, 200, 150);
  rect(0, 0, width / 2, height);

  // Cidade (lado direito)
  fill(180, 200, 220);
  rect(width / 2, 0, width / 2, height);

  // Sol
  fill(255, 204, 0);
  ellipse(70, 70, 50, 50);

  // Árvore no campo
  fill(101, 67, 33); // tronco
  rect(100, 200, 10, 40);
  fill(34, 139, 34); // copa
  ellipse(105, 190, 40, 40);

  // Trator
  fill(255, 80, 80);
  rect(tratorX, 230, 40, 20);
  fill(0);
  ellipse(tratorX + 5, 255, 10);
  ellipse(tratorX + 35, 255, 10);
  tratorX -= 1;
  if (tratorX < -50) tratorX = width + 20;

  // Estrada no centro
  fill(80);
  rect(0, 270, width, 30);
  for (let i = 0; i < width; i += 40) {
    fill(255);
    rect(i, 285, 20, 5);
  }

  // Prédios na cidade
  fill(100, 100, 120);
  rect(420, 160, 30, 90);
  rect(460, 180, 25, 70);
  rect(500, 140, 35, 110);

  // Carro na estrada
  fill(0, 150, 255);
  rect(carroX, 240, 35, 15);
  fill(0);
  ellipse(carroX + 5, 255, 10);
  ellipse(carroX + 30, 255, 10);
  carroX += 2;
  if (carroX > width + 50) carroX = -50;
}
