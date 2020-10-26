const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,400,1200,20);
    
    box1 = new Box(700,355,70,70);
    box2 = new Box(900,355,70,70);
    pig1=new Pig(800,365);
    
    
    log1 = new Log(800,310,275, PI/2);

    box3 = new Box(700,265,70,70);
    box4 = new Box(900,265,70,70);
    pig2=new Pig(800,275);
    
    
    log2 = new Log(800,220,275, PI/2);
    box5 = new Box(800,175,70,70);
    log3 = new Log(750,170,100, PI/7);
    log4 = new Log(850,170,100, -PI/7);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log4.display();
    log3.display();

    bird.display();
   ground.display();

}