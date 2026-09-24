
 let x = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  fill(255);
  circle(100,100,5);
  circle(100,150,5);
  fill(0,0,0);
  text("terra",240,170)
  fill(0,200,250);
  circle(250,250,150);
  translate(250,260);

  fill(150);
  circle(240*sin(x),100*cos(x),20);
  fill(20)
  noStroke();
  circle(240*sin(x)-x/9,100*cos(x),20)
  if(x<360){x=x+0.01;}
  else{x=0;}
}