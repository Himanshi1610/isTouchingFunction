var fixedRect, movingRect, gameOb1, gameOb2, gameOb3, gameOb4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameOb1 = createSprite(100, 100, 50, 50);
  gameOb1.shapeColor = "Yellow";
  gameOb2 = createSprite(1000, 600, 50, 50);
  gameOb2.shapeColor = "Yellow";
  gameOb3 = createSprite(1000, 100, 50, 50);
  gameOb3.shapeColor = "Yellow";
  gameOb4 = createSprite(100, 600, 50, 50);
  gameOb4.shapeColor = "Yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameOb3)){
    movingRect.shapeColor = "cyan";
    gameOb3.shapeColor = "cyan";
  }
  else{
  movingRect.shapeColor = "green";
  gameOb3.shapeColor = "yellow";
  }
  
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
 return false; 
}
}