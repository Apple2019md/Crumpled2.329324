var ball;
var rigthSide;
var leftSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	//Create the Bodies Here.
	ball = Bodies.circle(200, 200, 20, ball_options);
	World.add(world , ball);
	
	
	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(700, 600, 20, 120);
	rightSide = new Ground(950, 600, 20, 120);

    
	rectMode(CENTER);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 32);
 
 

  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
  Engine.update(engine);
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position , {x:65, y:-65});

	}
}




