
var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700); 


	engine = Engine.create();
  world = engine.world;
  

  
  
    ball=new Paper(400,50,1);

    dustbin1=createSprite()



  
}
 

function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();

  
 
}
