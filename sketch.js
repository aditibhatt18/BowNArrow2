var rb1, rb2, bb1,bb2, gb1, gb2, pb1,pb2
var ground, groundImg; 
var bow, bowImg, arrow, arrowImg; 
var selector;

function preload(){
  groundImg = loadImage("background0.png"); 
  rb1 = loadImage("red_balloon0.png");
  bb1 = loadImage("blue_balloon0.png");
  gb1 = loadImage("green_balloon0.png");
  pb1 = loadImage("pink_balloon0.png");
  arrowImg = loadImage("arrow0.png"); 
  bowImg = loadImage("bow0.png"); 
}

function setup() {
  createCanvas(600, 600);
  
  ground = createSprite(200,200); 
  ground.addImage(groundImg);
  ground.scale = 3; 
  ground.velocityX = -2; 
  
  bow = createSprite(360,100,10,10); 
  bow.addImage(bowImg); 
  
}

function draw() {
  background(0); 
  
  if(ground.x<0){
    ground.x = ground.width/2; 
  }
  
  if(keyDown("space")){
    var temp_Arrow = createArrow(); 
    temp_Arrow.addImage(arrowImg); 
  }
  
  
  redBallon(); 
  greenBallon();
  blueBallon(); 
  pinkBallon(); 
  //add code here
  drawSprites(); 
}

function redBallon(){
  for(i = 100; i<550; i = i+70){
    rb2 = createSprite(100,i,10,10); 
    rb2.addImage(rb1); 
    rb2.scale = 0.1; 
  }
}

function blueBallon(){
  for(i = 170; i<530; i = i+70){
    bb2 = createSprite(170,i,10,10); 
    bb2.addImage(bb1); 
    bb2.scale = 0.1; 
  }
}

function greenBallon(){
  for(i = 240; i<520; i = i+70){
    gb2 = createSprite(240,i,10,10); 
    gb2.addImage(gb1); 
    gb2.scale = 0.1; 
  }
}

function pinkBallon(){
  for(i = 270; i<500; i = i+70){
    pb2 = createSprite(280,i,10,10); 
    pb2.addImage(pb1); 
    pb2.scale = 1; 
  }
}

function createArrow(){
  arrow = createSprite(360,100,5,10); 
  arrow.velocityX = -6; 
  arrow.scale = 0.3; 
  return arrow; 
}