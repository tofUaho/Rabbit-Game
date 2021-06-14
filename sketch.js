var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaves, leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("image-removebg-preview.png");
  leavesImg = loadImage("image-removebg-preview(1).png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = mouseX;

  edges= createEdgeSprites();

  spawnApples();

  spawnLeaves();
  
  rabbit.collide(edges);

  console.log(leaves);

  drawSprites();
}

function spawnApples() {
  if (frameCount % 80 === 0) {
    
    apple = createSprite(random(50,350), 40, 10, 10);
    
    apple.addImage(appleImg);
    
    apple.scale = 0.2;
    
    apple.velocityY = 4;
    
    apple.lifetime = -1;
    
    var apple = Math.round(random(1,2));
  }
}


function spawnLeaves() {
  if (frameCount % 80 === 0) {

    leaves = createSprite(random(50, 350), 40, 10, 10);

    leaves.addImage(leavesImg);

    leaves.scale = 0.2;

    leaves.velocityY = 4;

    leaves.lifetime = -1;

    var leaves = Math.round(random(1,2));

  }

}


 