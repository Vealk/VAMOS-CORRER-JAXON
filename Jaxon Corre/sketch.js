//CRIE SPRITE AQUI
var path,pathImg;
var Corredor,RunnerImg;
var Bomba,BombImg;

function preload(){
  //Colocando Imagens em uma "var" .
  pathImg = loadImage("path.png");
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  BombImg = loadImage("bomb.png");
}

function setup(){
  createCanvas(400,400);

  console.log("passei pela function setup");
  path = createSprite(200,0,400,400);
  path.addImage(pathImg);
  path.scale = 1;
  path.y = path.height /2;
  Corredor = createSprite(200,350,400,400);
  Corredor.addAnimation("corredor", RunnerImg);
  Corredor.scale = 0.1;
}
//FRAMES | |
//       V V
    
function draw() {
  background("black");
  if(path.y < 400)
  {
    path.y = path.height/2;
  }
  path.velocityY + 5;

  if(keyDown("right")){
    Corredor.x = Corredor.x + 10;
  }
  if(keyDown("left")){
   Corredor.x = Corredor.x - 10;
  }
  if(Corredor.x < 50)
  {
    Corredor.x = 50;
  }
    
  if(Corredor.x > 350)
  {
    Corredor.x = 350;
  }
  drawSprites();
}

spawnBombs();

function spawnBombs() { 
  //Escreva O Código Aqui Para Gerar As Bombas
 if(frameCount % 60 === 0) {
  Bomba = createSprite(200,200,70,70);
  Bomba.addImage(BombImg);
  Bomba.y = Math.round(random(30,10))
  Bomba.scale = 0.1;
  Bomba.velocityY = +5;
  }
}




