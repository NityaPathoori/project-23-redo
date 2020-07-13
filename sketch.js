var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redZone1, redZone2, redZone3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	Matter.Body.setStatic(packageSprite,false);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redZone1 = createSprite(370,380,20,100);
	redZone1.shapeColor = "red"

	redZone2 = createSprite(430,380,20,100);
	redZone2.shapeColor = "red"

	redZone3 = createSprite(400,380,200,20);
	redZone3.shapeColor = "red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.65, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	redZone1 = Bodies.rectangle(370,380,20,100, {isStatic:true} );
	World.add(world,redZone1);

	redZone2 = Bodies.rectangle(370,380,20,100, {isStatic:true} );
	World.add(world,redZone2);

    redZone3 = Bodies.rectangle(370,380,200,20, {isStatic:true} );
	World.add(world,redZone3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,true);
    
  }
}







