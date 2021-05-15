const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create 1st row of plinko objects
  for (var j = 40; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 60; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,135));
  }

  //create 3rd row of plinko objects
  for (var j = 40; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,195));
  }
  
  //create 4th row of plinko objects
  for(var j = 60; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,260))
  }
  //create 5th row of plinko objects
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,320))
  }
  //create 6th row of plinko objects
  for(var j = 60; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,380))
  }
  //create 7th row of plinko objects
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,440))
  }
  //create a row of division
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  background("black");
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  textSize(20)
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
}