function setup(){
            createCanvas(400,400);
            
            angleMode(DEGREES);
        }
        function draw(){
            background(220);
            
            text('0', 1,20);
            text('30', 30,20);
            text('45', 45,20);
            text('60', 60,20);
            text('90', 90,20);
            text('180', 180,20);
            text('360', 360,20);
            translate(200,200);
            circle();
            arc(0,0,50,50,-mouseX,0);
            line(0,0,200,0);
            rotate(-mouseX);
            circle(200,0,10);
            line(0,0,200,0);
            





        }