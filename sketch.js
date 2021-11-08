const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

let ground, ball;

var topWall,bottomWall,rightWall,leftWall

var moveUp,moveRight

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  bottomWall = new Ground(200,390,400,20)
  topWall = new Ground(200,10,400,20)
  leftWall = new Ground(10,200,20,400)
  rightWall = new Ground(390,200,20,400)

  var ball_options =
  {
    restitution: 0.9
  }

  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)

  console.log(ball);

  //moveUp = createButton("MOVE UP")
  moveUp = createImg("up.png")
  moveUp.size(50,50)
  moveUp.position(50,30)
  moveUp.mouseClicked(vForce)

  //moveRight = createButton("MOVE RIGHT")
  moveRight = createImg("right.png")
  moveRight.size(50,50)
  moveRight.position(250,30)
  moveRight.mouseClicked(hForce)
}

function draw() 
{
  background(51);

  Engine.update(engine);

  ellipseMode(RADIUS);
  fill("blue")
  ellipse(ball.position.x,ball.position.y,20)

  bottomWall.display()
  topWall.display()
  rightWall.display()
  leftWall.display()
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}