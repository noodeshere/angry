const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,350,70,70);
    box2 = new Box(1100,350,70,70);
   pig1= new Pig(1000,350,50,50)
    ground = new Ground(600,height,1200,20)
 log1= new Log(1000,300,300,20,PI)
 box3 = new Box(900,250,70,70);
 box4 = new Box(1100,250,70,70);
pig2= new Pig(1000,250,50,50)
 log2= new Log(1000,200,300,20,PI)
 box5 = new Box(1000,150,70,70);
 log3= new Log(950,100,140,20,-PI/5)
 log4= new Log(1050,100,140,20,PI/11)
bird1= new Bird(100,100,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
pig1.display();
log1.display();
box3.display();
    box4.display();
    box5.display();
pig2.display();
log2.display();
log3.display();
log4.display();
bird1.display();








}
