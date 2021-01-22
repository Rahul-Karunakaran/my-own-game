var player

function setup() {
  createCanvas(displayWidth/2,displayHeight/2);
  
  player = new Player(width/8,height-100,40,60)
  console.log(displayWidth)
  console.log(width)
  upArrow = createSprite(width/2,height-100,20,20)

}

function draw() {
  background(0); 
  
   if (mousePressedOver(upArrow)){
     player.body.velocityY = -2
   }

  
  drawSprites();
}