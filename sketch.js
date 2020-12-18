const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(800, 500);
  background("grey")
	polygonSprite=createSprite(400, 100, 400, 20);
	polygonSprite.shapeColor=color("lightpink")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon = Bodies.rectangle(400, 100, 400, 20 , {isStatic:true} );
	World.add(world, polygon);


	ground1 = new Ground(500,500,100,100);
  

  Engine.run(engine);
	

	
   
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  ground1.display();

  drawSprites();
}
