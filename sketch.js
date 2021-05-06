const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var boy,boyImg;
var snow1 = [];
var snow2 = [];
var snowman,snowmanImage;
var snowfall1,snowfall2;

function preload(){
  bg = loadImage("bg2.jpg");
  boyImg = loadImage("boy.png");
  snowmanImage = loadImage("snowman.png");
}

function setup() {
  createCanvas(900,700);
  engine = Engine.create();
  world = engine.world;

  boy = createSprite(350, 450, 50, 50);
  boy.addImage(boyImg);
  boy.scale = 0.3;

  snowman = createSprite(650,500,50,60);
  snowman.addImage(snowmanImage);
  snowman.scale= 0.2;

  ground = createSprite(450,630,900,20);
  ground.shapeColor = "brown";
  ground.visible=false;

}

function draw() {
  background(bg); 
  Engine.update(engine); 

  boy.velocityY = boy.velocityY+0.2;
  boy.collide(ground);

  textSize(35);
  fill(0,102,0);
  text("Press Space To Jump The Boy!",60,120);

  if(frameCount%25===0){
    snow1.push(new Snow1(random(0,900),15));
    snow2.push(new Snow2(random(0,900),15));
  }

  for(var i = 0; i < snow1.length; i++){
    snow1[i].display();
    snow1[i].update();
  }

  for(var u = 0; u < snow2.length; u++){
     snow2[u].display();
     snow2[u].update();
  }

  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    boy.velocityY=-5;
  }
}