const Engine= Matter.Engine; 
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint

var engine,world;
var ground, base, polygon, polygon_img
var block1,block2,block3,block4,block5,block6,block7
var block8,block9,block10,block11,block12
var block13,block14,block15,block16

function preload(){
    polygon_img=loadImage("polygon.png")
    
}
function setup() {
  createCanvas(800,500);

  engine=Engine.create();
  world=engine.world;

  polygon=Bodies.circle(200,200,20)
  World.add(world,polygon)

  slingshot = new Slingshot(this.polygon,{x:200,y:200})

  ground=new Ground(400,450,800,10)
  base=new Ground(600,295,300,10)
  //level one
  block1=new Box(500,275,30,40,'lightBlue')
  block2=new Box(530,275,30,40,'lightBlue')
  block3=new Box(560,275,30,40,'lightBlue')
  block4=new Box(590,275,30,40,'lightBlue')
  block5=new Box(620,275,30,40,'lightBlue')
  block6=new Box(650,275,30,40,'lightBlue')
  block7=new Box(680,275,30,40,'lightBlue')
  //level two
  block8=new Box(530,235,30,40,'lightPink')
  block9=new Box(560,235,30,40,'lightPink')
  block10=new Box(590,235,30,40,'lightPink')
  block11=new Box(620,235,30,40,'lightPink')
  block12 = new Box(650,235,30,40,'lightPink')
  //level three
  block13=new Box(560,195,30,40,'lightSeaGreen')
  block14=new Box(590,195,30,40,'lightSeaGreen')
  block15 = new Box(620,195,30,40,'lightSeaGreen');
  //top
  block16 = new Box(590,155,30,40,'purple')
} 

function draw() {
  background(0);  
  Engine.update(engine);
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  ground.display()
  base.display()
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.polygon)
  }
}