let xbarra=150;
let ponto = 0;
let xbola = 200;
let ybola = 0;
let xvelocidade = 3;
let yvelocidade = 3;
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  

  textSize(30);

xbola = xbola + xvelocidade;
ybola = ybola + yvelocidade;  
text('Ponto:',30,30);
text(ponto,130,30)
if(xbola > width){xvelocidade = - xvelocidade;}
if(xbola < 0){xvelocidade = -xvelocidade;}
if(ybola < 0){yvelocidade = -yvelocidade;ponto = ponto+1;}
if(dist(xbola,ybola,xbarra+100,height-20)<20 || dist(xbola,ybola,xbarra,height-20)<20||dist(xbola,ybola,xbarra+50,height-20)<20){yvelocidade = - yvelocidade;}
  

  if(ybola >height){text('Perdeu!!!',width/2-50,200);text('Pontuação:',width/2-50,250);text(ponto,width/2+120,250);}
  circle(xbola,ybola,20);
  rect(xbarra,height-20,100,15,10);
} 
function keyPressed() {
if(key === RIGHT_ARROW){xbarra = xbarra+50;}
  if(key === LEFT_ARROW){xbarra = xbarra-50}
}
