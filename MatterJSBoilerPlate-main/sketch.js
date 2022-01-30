
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

   var ground_options ={
	isStatic: true
  }



 ground = new Ground(width/2,390,width,20);
 leftside = new Ground(200,350,20,60);
 rightside = new Ground(300,350,20,60);

 ball = Bodies.circle(100,10,20,ball_options);
 World.add(world,ball); 

  Engine.run(engine);

}


function draw() {

	rectMode(CENTER);
	background(0);


   ground.show();
   leftside.show();
   rightside.show();

   ellipse(ball.position.x,ball.position.y,20);
 
   drawSprites();

}


function keyPressed() {

	Matter.Body.applyForce(ball,ball.position,{x: 10, y: -20});
}

