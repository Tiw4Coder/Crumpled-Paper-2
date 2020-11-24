var paperImages, binImages;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,650,30)
	ground = new Ground(400,680,800,20)
	bin1 = new Bin(530,650,30,200)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  ground.display();
  bin1.display();
  
  
}

function keyPressed() {
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
