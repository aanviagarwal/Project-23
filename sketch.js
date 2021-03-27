var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	var options ={
		isStatic : true
	}
	groundSprite=createSprite(width/2, height-35, width,10,options);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var pakageOption ={
		restitution : 1.0,
		isStatic : true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , pakageOption);
	World.add(world, packageBody);
	

	//create a ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxPosition = width/2-100
	boxY = 610
	box1 = createSprite(boxPosition,boxY,20,100);
	box2 = createSprite(100,boxY+40,200,20);
	box3 = createSprite(boxPosition+200,boxY,20,100);
	box1Body = Bodies.rectangle(boxPosition+20,boxY,20,100, {isStatic:true});
	World.add(world,box1Body);
	box2Body = Bodies.rectangle(boxPosition+100,boxY+25,20,100, {isStatic:true});
	World.add(world,box2Body);
	box3Body = Bodies.rectangle(boxPosition+180,boxY,20,100, {isStatic:true});
	World.add(world,box3Body);
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
 if (keyDown(DOWN_ARROW)) {
	 Matter.Body.setStatic(packageBody,false)
  }
}