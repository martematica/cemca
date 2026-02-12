let x = 0;
let y = 0;

function setup() {
  createCanvas(900, 900);
  background(220);
  // Desenhar os eixos
  stroke(0);
  line(width / 2, 0, width / 2, height); // Eixo y
  line(0, height / 2, width, height / 2); // Eixo x
  // Desenhar as marcações
  for (let i = -50; i <= 50; i++) {
    line(width / 2 + i * 50, height / 2 - 5, width / 2 + i * 50, height / 2 + 5); // Marcações no eixo x
    line(width / 2 - 5, height / 2 + i * 50, width / 2 + 5, height / 2 + i * 50); // Marcações no eixo y
    text(i, width / 2 + i * 50 - 10, height / 2 + 20); // Números no eixo x
    text(i, width / 2 - 20, height / 2 + i * 50 + 5); // Números no eixo y
  }
}

function draw() {
  // Desenhar o ponto
  fill(255, 0, 0);
  noStroke();
  ellipse(width / 2 + x * 50, height / 2 - y * 50, 10, 10);
  fill(0,0,0);
  quad(0,0,width,0,width,height/2-30,0,height/2-30);
  quad(0,0,0,height,width/2-30,height,width/2-30,0);
}

function mousePressed() {
  // Atualizar o ponto
  x = (mouseX - width / 2) / 50;
  y = (height / 2 - mouseY) / 50;
  console.log("Ponto: (" + x + ", " + y + ")");
}
