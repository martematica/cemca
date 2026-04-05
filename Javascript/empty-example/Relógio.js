function setup() {
  createCanvas(400, 500);
angleMode(DEGREES);

}

function draw() {
  background(100);
  fill(100);
  strokeWeight(5);
  circle(200,200,400);
  stroke(200);
  strokeWeight(1);
  circle(200,200,350);
  fill(255);
  textSize(20);
  textStyle();
  text('12', 190,20);
  text('6',195,395);
  text('3', 380,200);
  text('9', 10, 200);
fill(100);
  quad(160,420,260,420,260,460,160,460);
  fill(255);
  text(hour(),170,450);
  text(':',194,448);
  text(minute(),200,450);
  text(':',224,448);
  text(second(),230,450);
  
  translate(200,200);
  rotate(30*hour()-90);
  strokeWeight(3);
  line(0,0,100,0);
  
  rotate(-30*hour()+90);
  rotate(6*minute()-90);
  strokeWeight(2);
  line(0,0,160,0);
  
  rotate(-6*minute()+90);
  rotate(6*second()-90);
  strokeWeight(1);
  line(0,0,175,0);
  

  
  
  
}