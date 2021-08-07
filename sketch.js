var pathimg, track, running, leftwall, rightwall;

function preload(){
  //pre-load images
  pathimg = loadImage("path.png");
  running = loadAnimation("Runner-1.png","Runner-1.png", "Runner-2.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200,400,400);
  track.addImage(pathimg);
  track.scale = 1.25;
  

  runningboy = createSprite(200,320,10,10);
  runningboy.addAnimation("runningboy", running);
  runningboy.scale = 0.09;

  leftwall = createSprite(10,200,25,400);
  leftwall.visible = false;

  rightwall = createSprite(400,200,25,400);
  rightwall.visible = false;
  
}

function draw() {
  background(140);

  track.velocityY = 3;
  if(track.y>400){
    track.y = track.width/2;
  }

  runningboy.x = mouseX;
  
  runningboy.collide(leftwall);
  runningboy.collide(rightwall);
  drawSprites();
}

