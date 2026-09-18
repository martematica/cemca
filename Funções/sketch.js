let x = -350; 
let x1 = -380;
let y = -150;
let y1 = -150;
let z = -900;
let z1 = -900;
let t = -130;
let t1 = -130;
function setup() {
  createCanvas(1500, 750);
  background(250,250,250);
  let a = createA('https://martematica.github.io/cemca/Fun%C3%A7%C3%B5es/index.html','Apagar',);
  a.position(700,28);
  
}

function draw() {
  fill(220);
  square(30,30,40);
  rect(100,30,45,40);
  rect(175,30,50,40);
  rect(255,30,50,40);
  rect(335,30,70,40);
  rect(435,30,70,40);
  rect(535,30,50,40);
  rect(615,30,50,40);
  
fill(0);
  text('f(x) = x',32,53);
  text('f(x) = - x',100,53);
  text('f(x) = x²',177,53);
  text('f(x) = - x²',257,53);
text('f(x) = sen(x)',337,53);
  text('f(x) = cos(x)',437,53);
  text('f(x) = x³',537,53);
  text('f(x) = - x³',617,53);
  line(width/2,0,width/2,height);
line(0,height/2,width,height/2);

  translate(width/2,height/2)
  noStroke(0);
  if(mouseX<60 && mouseX>30 && mouseY<70 && mouseX>30){
  fill(255,0,0);  
  circle(x,-x,5);
  fill(220);  
 x = x + 1;
}
if(mouseX<145 && mouseX>100 && mouseY<70 && mouseX>30){
  fill(0,255,0);  
  circle(x1,x1,5);
  fill(220);  
 x1 = x1 + 1;
}
  if(mouseX<225 && mouseX>175 && mouseY<70 && mouseX>30){
  fill(0,0,255);  
  circle(y,-y*y/50,5);
  fill(220);  
 y = y + 1;
} 
  if(mouseX<305 && mouseX>255 && mouseY<70 && mouseX>30){
  fill(0,250,255);  
  circle(y1,y1*y1/50,5);
  fill(220);  
 y1 = y1 + 1;
} 
   if(mouseX<407 && mouseX>337 && mouseY<70 && mouseX>30){
  fill(250,250,0);  
  circle(z+155,30*sin(z/50),5);
  fill(220);  
 z = z + 1;
} 
   if(mouseX<507 && mouseX>437 && mouseY<70 && mouseX>30){
  fill(250,0,255);  
  circle(z1+155,30*cos(z1/50),5);
  fill(220);  
 z1 = z1 + 1;
} 
   if(mouseX<605 && mouseX>535 && mouseY<70 && mouseX>30){
  fill(200);  
  circle(t,-t*t*t/3000,5);
  fill(220);  
 t = t + 1;
} 
   if(mouseX<665 && mouseX>615 && mouseY<70 && mouseX>30){
  fill(0,0,0);  
  circle(t1,t1*t1*t1/3000,5);
  fill(220);  
 t1 = t1 + 1;
   }
    
}


