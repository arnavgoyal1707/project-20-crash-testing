var car, wall;
var speed;
var weight;
function setup() {
createCanvas(1600,400);
weight=random(400,1500);
speed=random(55,90);
wall=createSprite(1100,200,50,280);

car=createSprite(50,200,50,50);


car.velocityX=speed;
}

function draw() {
  background(0);
 if(wall.x-car.x<(car.width+wall.width)/2){
 car.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509

if (deformation>180){
  car.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>80){
  car.shapeColor=color(230,230,0);
}
if (deformation<80){
  car.shapeColor=color(0,255,0);

}
   
 }
 drawSprites();
}