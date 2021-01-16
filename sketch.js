var movingRect,fixedRect;
var rect1,rect2;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,200,100,50)
  rect1=createSprite(50,100)
  rect2=createSprite(350,100)
  rect1.velocityX=1
  rect2.velocityX=-1
}

function draw() {
  background(255,255,255);
  if(isTouching(fixedRect,movingRect)){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
    }
    else{
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
    }
    bounceoff(rect1,rect2);
  movingRect.x=mouseX;
  movingRect.y=mouseY;  
  drawSprites();
}