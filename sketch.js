var fixed, moving;
var edges;

function setup() 
{
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200, 200, 80, 60);
  fixed.velocityX = 5;
  moving.velocityX = -5;

}

function draw() 
{
  background(0);  

//moving.x = mouseX;
//moving.y =mouseY;
edges = createEdgeSprites();

moving.bounceOff(edges[0]);
fixed.bounceOff(edges[1]);
//moving.bounceOff(edges[1]);
//fixed.bounceOff(edges[1]);

if(moving.x - fixed.x < fixed.width/2 + moving.width/2  &&
  fixed.x - moving.x < fixed.width/2 + moving.width/2 )
{
moving.velocityX = moving.velocityX *(-1);
fixed.velocityX = fixed.velocityX*(-1);

}


  if(moving.y - fixed.y  < fixed.height/2 + moving.height/2 &&
    fixed.y - moving.y < fixed.height/2 + moving.height/2)
  
{
moving.velocityY = moving.velocityY*(-1);
fixed.velocityY = fixed.velocityY*(-1) ;
}


  drawSprites();
}