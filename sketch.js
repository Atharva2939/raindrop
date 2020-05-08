const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1;
var drops=[]
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
 // one=randomNumber(200,600)
 for (var i=0; i<1000; i++){
  // arrays formed which is storing new objects formed of drop class
      drops.push(new Raindrop());
      }
  //box1=new Raindrop();
}

function draw() {
  background(100);  
 // drawSprites();
  //box1.display();
  for (var i=0; i<1000; i++){
    drops[i].show();
    drops[i].update();
    }
}