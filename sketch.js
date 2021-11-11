
var trex ,trex_running, ground, groundImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  
  trex = createSprite(50,160,20,50);
  trex.scale = 0.4;
  trex.addAnimation("Running",trex_running);
  ground = createSprite(200,180,1000,10)
  ground.addImage("Floor",groundImage); 
  ground.velocityX=-5;

}


function draw(){ 
  background("white")

  if(keyDown("space")){
    trex.velocityY=-9;
  }
  trex.velocityY += 0.9;
  trex.collide(ground);
  
  drawSprites();
}
