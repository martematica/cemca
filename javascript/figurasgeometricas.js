function setup() {
  createCanvas(400, 430); // tamanho da tela 
}

function draw() {   // desenhar
  background(250); // cor de fundo 


  
  stroke(255,0,0);  // cor da borda
  fill(255,0,0); //cor do triangulo
  triangle(20,200,180,200,180,380);
  stroke(0,0,0);
  fill(0,0,0);
  triangle(220,200,380,200,220,380);
  
  stroke(0,0,0);
  quad(20,180,380,180,380,100,20,100);
  strokeWeight(5);
  stroke(0,0,0)
  line(0,80,400,80);
  line(3,80,3,210);
  line(396,80,396,210);
  line(0,210,200,430);
  line(400,210,200,430);
  
  fill(255,255,255);
  textSize(100);
  

  
  
  
}