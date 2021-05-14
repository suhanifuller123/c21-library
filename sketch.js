var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 100, 50);
  fixedRect = createSprite(400,200,50,100);
movingRect.shapeColor = "pink";
fixedRect.shapeColor = "pink"

movingRect.velocityX = -4;
fixedRect.velocityX = 4;

gameobj1=createSprite(100,100,50,50)
gameobj2=createSprite(200,100,50,50)
gameobj3=createSprite(300,100,50,50)

}          

function draw() {
  background(0); 
  bounceOff(movingRect,fixedRect)
  movingRect.y = mouseY;
  movingRect.x = mouseX;


  if(isTouching(movingRect, gameobj2) === true){
    movingRect.shapeColor = "white";
    gameobj2.shapeColor = "white"
  }
  else{
    movingRect.shapeColor = "pink";
    gameobj2.shapeColor = "pink"
  }

  drawSprites();
}

