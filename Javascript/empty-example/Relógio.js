// Declare variables for shape radii
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(710, 710);
  stroke(255);
  angleMode(DEGREES);

  // Set radius for each shape based on canvas dimensions
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  describe('Functioning pink clock on a grey background.');
}

function draw() {
  background(27,27,27);

  // Move origin to center of canvas
  translate(width / 2, height / 2);

  // Draw the clock background
  noStroke();
  fill(120, 120, 120);
  ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill(37, 37, 37);
  ellipse(0, 0, clockDiameter, clockDiameter);

  // Calculate angle for each hand
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(255);

  // Second hand
  
  push();
  rotate(secondAngle);
  strokeWeight(1);
  line(0, 0, 0, -secondsRadius);
  pop();

  // Minute hand
  push();
  strokeWeight(2);
  rotate(minuteAngle);
  line(0, 0, 0, -minutesRadius);
  pop();

  // Hour hand
  push();
  strokeWeight(4);
  rotate(hourAngle + (minuteAngle/12));
  line(0, 0, 0, -hoursRadius);
  pop();

  // Tick markers around perimeter of clock
  push();
  strokeWeight(2);
  for (let ticks = 0; ticks < 60; ticks += 1) {
    point(0, -secondsRadius);
    rotate(6);
  }
  pop();
  fill(220,220,220);
  textSize(30);
  text('12',-17,-270);
  text('1',130,-230);
  text('11',-155,-235);
  text('5',130,250);
  text('7',-145,255);
  text('6',-7,290);
  text('3',270,10);
  text('9',-290,10);
  text('2',235,-130);
  text('4',230,150);
  text('8',-255,145);
  text('10',-260,-130);


}