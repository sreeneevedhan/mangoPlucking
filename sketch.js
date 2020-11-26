
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stone;
var ground;
var mango,mango1,mango2,mango3,mango4,mango5,mango6;
var boy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree= new Tree(500,400,500,500);
stone=new Stone(100,500,20,20);
ground=new Ground(400,670,800,20);
mango=new  Mango(500,300,40,40);
mango1=new  Mango(400,320,40,40);
mango2=new  Mango(600,330,40,40);
mango3=new  Mango(500,200,40,40);
mango4=new  Mango(650,350,40,40);
mango5=new  Mango(440,400,40,40);
mango6=new  Mango(450,260,40,40);


boy=new Boy(stone.body,{x:120,y:604});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(165,42,42);

  detecdtolllision(stone,mango);
  detecdtolllision(stone,mango1);
  detecdtolllision(stone,mango2);
  detecdtolllision(stone,mango3);
  detecdtolllision(stone,mango4);
  detecdtolllision(stone,mango5);
  detecdtolllision(stone,mango6);




  tree.display();
  stone.display();
  ground.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  boy.display();  
  console.log(mouseY);

  drawSprites();
 
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

boy.fly();


}

function detecdtolllision(stone,mango){

  var mangoBodyPosition=mango.body.position;
var stoneBodyPosition=stone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=mango.r+stone.r){

 Matter.Body.setStatic(mango.body,false);
}

}
function keyPressed(){

  if(keyCode=== 32){
  boy.attach(stone.body);
  }
  
  }