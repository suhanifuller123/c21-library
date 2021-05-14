var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 100, 50);
  fixedRect = createSprite(350,200,50,100);
movingRect.shapeColor = "pink";
fixedRect.shapeColor = "pink"
movingRect.velocityX = -4;
fixedRect.velocityX = 4;
}          

function draw() {
  background(0); 
  
 // movingRect.y = mouseY;
   // movingRect.x = mouseX;
if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 )
{  
    movingRect.velocityX = fixedRect.velocityX * -1;
    fixedRect.velocityX = movingRect.velocityX * -1

}

if(movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2) {

    movingRect.velocityY = fixedRect.velocityY * -1;
    fixedRect.velocityY = movingRect.velocityY * -1
}
  drawSprites();
}