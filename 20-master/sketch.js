var astronaut;
var bath,sleep,brush,drink,iss,eat,gym,move;

function preload(){
  //made mistake in loading animations its "bath1.png",bath2.png its not bath1.png,bath2.png"
  iss = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
//create a seperate sprite for space ship and astronaut 
//for spaceship use this x, y, width, height
  astronaut = createSprite(400,200,800,400);
  astronaut.addImage(iss);
  //use this scale
  astronaut.scale = 0.2;
  //add labels 
  astronaut.addAnimation(bath);
  astronaut.addAnimation(sleep);
  astronaut.addAnimation("brushing",brush);
  astronaut.addAnimation(drink);
  astronaut.addAnimation(eat);
  astronaut.addAnimation(gym);
  astronaut.addAnimation(move);
}

function draw() {
  //give a background
background("black")
//this is perfect
  if(keyDown("UP_ARROW")){
    //astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 360
  }
   
  drawSprites();
}