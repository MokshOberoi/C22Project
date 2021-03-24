var background , backgroundImage ;
var fairy , fairyImage;
var star , starImage;

//Namespacing
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function preload()
{
   //preload the images here
   backgroundImage = loadImage("./images/starnight.png");
   fairyImage = loadAnimation("./images/fairy2.png","./images/fairy2.png");
   starImage = loadImage("./images/star.png");

}

function setup() {
  createCanvas(800, 750);

  myEngine = Engine.create (); 
  myWorld = myEngine.world ;

  fairy = createSprite(130,520,20,20);
  fairy.addAnimation("fairyflying",fairyImage);
  fairy.scale = 0.3;

  var staroptions = { 
    isStatic : true,
    restitution:0.5
  }

  star = Bodies.circle(600 , 30 , 5 , staroptions);
  World.add (myWorld, star );
 
  
console.log(star);


}


function draw() {

  background(backgroundImage);
  
  if (keyDown(LEFT_ARROW)){
      fairy.x = fairy.x - 10;
  }

  if (keyDown(RIGHT_ARROW)){
      fairy.x = fairy.x + 10;
  }

  if (keyDown(DOWN_ARROW)){
    Matter.Body.setStatic (star, false);
  }

  if(star.position.y > 470 ){
    Matter.Body.setStatic(star,true);
  }



  Engine.update (myEngine);

  image (starImage,star.position.x,star.position.y,50,50);

  drawSprites();
}
