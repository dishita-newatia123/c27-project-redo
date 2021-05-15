
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render= Matter.Render;
var roof,b1,b2,b3,b4,b5;
var sBobX,sBobY;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;

  /*var render = Render.create({ 
    element: document.body, 
    engine: engine, 
    options: { width: 1200, height: 700, wireframes: false } });*/
	//Create the Bodies Here.


	
  roof = new Roof(width/2,height/4,width/7,20)

  bobDiameter= 40
  sBobX=width/2
  sBobY=height/4+500

    /*b1 = new Bob(320,575,40); 
    b2 = new Bob(360,575,40); 
    b3 = new Bob(400,575,40);
    b4 = new Bob(440,575,40); 
    b5 = new Bob(480,575,40); 
    
    rope1 = new Rope(b1.body,roof.body,-80,0) 
    rope2 = new Rope(b2.body,roof.body,-40,0) 
    rope3 = new Rope(b3.body,roof.body,0,0) 
    rope4 = new Rope(b4.body,roof.body,40,0) 
    rope5 = new Rope(b5.body,roof.body,80,0)*/
 
  b1=new Bob(sBobX-(2*bobDiameter),sBobY,bobDiameter) 
  b2=new Bob(sBobX-bobDiameter,sBobY,bobDiameter) 
  b3= new Bob(sBobX,sBobY,bobDiameter)
  b4= new Bob(sBobX+bobDiameter,sBobY,bobDiameter)
  b5=new Bob(sBobX+(2*bobDiameter),sBobY,bobDiameter)


  rope1= new Rope(b1.body,roof.body,-bobDiameter*2,0)
  rope2= new Rope(b2.body,roof.body,-bobDiameter*1,0)
  rope3= new Rope(b3.body,roof.body,0,0)
  rope4= new Rope(b4.body,roof.body,bobDiameter*1,0)
  rope5= new Rope(b5.body,roof.body,bobDiameter*2,0)
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine)
  //drawSprites();
 roof.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}

function keyPressed(){
  if(keyCode ===UP_ARROW){
  Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45})
  }
}

