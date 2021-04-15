
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	g = new Ground(500,200,400,20)
  b = new Bob(500,450,25)
	b2 = new Bob(450,450,25)
	b3 = new Bob(550,450,25)
	b4 = new Bob(400,450,25)
	b5 = new Bob(600,450,25)

	r1   =  new Chain(b.body,500,200)
	r2  = new Chain(b2.body,450,200)
	r3  = new Chain(b3.body,550,200)
	r4  = new Chain(b4.body,400,200)
	r5  = new Chain(b5.body,600,200)
  
}

function draw() {

  rectMode(CENTER);
  Engine.update(engine);

  background("skyBlue");
  
  //
  
  g.display();
  b4.display(); 
  b5.display();
  b.display();
  b3.display();
  b2.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  drawSprites();

  textSize(30)
  text("x : "+mouseX+"y : "+mouseY,mouseX,mouseY)

  keyPressed();

}

function keyPressed()
{
  if(keyCode === "UP_ARROW")
  {
    Body.applyForce(b4.body,b4.body,{x:-9000,y:9000})
  }
}

