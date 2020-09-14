var player,player_running;
var banana;
var jungle,jungleimage;
var obstacles;
var ground;
function preload(){
player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  banana=loadImage("banana.png");
  jungleimage=loadImage("jungle.png");

  obstacles=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  jungle=createSprite(0,400,20,20);
 jungle.addImage(jungleimage);
  jungle.velocityX=-3;
  ground=createSprite(0,380,400,10)
  Invisbleground=createSprite(0,390,400,5);
  ground.x=ground.width/2;
  Invisbleground.visible=false;
 ground.addImage(ground_running);
  ground.velocityX=-3;
count=0 
  bananagroup= new Group();
  obstaclesgroup= new Group();
  player_running.addAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}

function draw() {
  background(100);
  fill("white");
  textSize(18);
  text("score:"+count,285,302);
  if(obstaclesgroup.isTouching(player)){
  player.scale=0.2;  
  }
  if(bananagroup.isTouching(player)){
   player.scale=0.1; 
  }
switch(score){
  case 10 : player.scale=0.12;
    break;
    case 20 : player.scale=0.14;
    break;
    case 30 : player.scale=0.16;
    break;
    case 40 : player.scale=0.18;
    break;
    default: break;
}
}