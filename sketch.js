var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(130,500,10,20);
  ghost.addImage (ghostImg);
  ghost.velocityY = 0.5
  ghost.scale = 0.5

}

function draw() {
  background(200);
  ghost.velocityY = ghost.velocityY + 0.5;

  // if mechanism
  if (keyDown ("space")){
    ghost.velocityY = -5
  }

  if (keyDown ("a")){
    ghost.velocityX = -5
  }

  if (keyDown ("d")){
    ghost.velocityX = 5
  }
  // creating door
  if (frameCount == 100){
    door = createSprite (150,80,30,30);
    door.addImage (doorImg);
  }

  // touching the door
  if ( frameCount > 100 && ghost.isTouching (door)){
    gameState = "LEVEL 2"
    monster1 = createSprite (200,450,30,20);
    monster1.velocityX = 5
    monster1.shapeColor = "red"
    
  }

  if (gameState == 'LEVEL 2'){
    door.destroy ()
  }

  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites();
}
