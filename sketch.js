var gameOver, gameOverImg;
var gameState = "PLAY"; 
var skyImg, sky;
var enemies, enemiesImg, enemiesGroup;
var enemy, enemyImg, enemyGroup;
var planeImg, plane;
var invisibleBlockGroup, invisibleBlock;
var restartImg;
var reset;

function preload(){
planeImg=loadImage("plane.png");
enemyImg=loadImage("enemy.png");
enemiesImg=loadImage("enemy1.png");
skyImg=loadImage("sky.jpg");
  gameOverImg=loadImage("game over.jpg");
  restartImg=loadImage("reset.png")
}

function setup() {
createCanvas(1200,600);
  sky=createSprite(300,300);
sky.addImage("skybackground",skyImg);
sky.velocityY=5;  
  sky.scale=12;

  plane = createSprite(600,300,50,50);
  plane.scale = 0.3;
  plane.addImage("airplane", planeImg);
    
  enemyGroup = new Group();
  enemiesGroup = new Group();

  
    gameOver = createSprite(600,310);
  gameOver.addImage(gameOverImg);
  gameOver.scale=1.5;
  
  
  restart = createSprite(600,350);
  restart.addImage(restartImg);
  restart.scale=0.09;
}

function draw() {
 background("black");
  
  if (gameState === "PLAY"){
gameOver.visible=false;
restart.visible=false;    
    
     if(sky.y>400){ 
    sky.y=300 }

        plane.x = World.mouseX;
         plane.y= World.mouseY;
    
    
  
    
   reset();
 spawnInvader();
  spawnEnemy();
    
      
   if (plane.isTouching(enemiesGroup)||plane.isTouching(enemyGroup)){
     gameState="END";
    }
   
  }
  
  
  
  if (gameState === "END") {
    gameOver.visible = true;
    restart.visible=true;
       plane.velocityY=0;
         plane.velocityX=0;
        enemiesGroup.setVelocityYEach(0); 
     enemyGroup.setVelocityYEach(0);
    sky.velocityY=0;
      enemiesGroup.destroyEach();
      enemyGroup.destroyEach();
       }
     drawSprites();
    if(mousePressedOver(restart)) {
      reset();
    }
}

function spawnEnemy(){
  if(frameCount%200 ===0){
    var enemy=createSprite(200,-50)
    enemy.addImage("enemys",enemyImg);
    enemy.scale=0.3;
    enemy.x=Math.round(random(1,1200))
    enemy.velocityY=10;
    enemyGroup.add(enemy);
    enemy.lifetime=650;
    
    
  }}
  
function spawnInvader(){
   if(frameCount%215 ===0){
    var enemies=createSprite(300,-69)
    enemies.addImage("enemiey",enemiesImg);
    enemies.scale=0.3;
    enemies.x=Math.round(random(1,1100))
    enemies.velocityY=10;
    enemiesGroup.add(enemies);
    enemies.lifetime=650;
  
}}

function reset(){
  gameState = "PLAY";
  
}