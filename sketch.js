var man,manImg;


function preload(){
  manImg=loadAnimation("wavingMan/wm1.png","wavingMan/wm4.png","wavingMan/wm12.png")
  backgroundImg=loadImage("cartoonCity.jpg")
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  man=createSprite(400, 400, 50, 50);
  man.addAnimation("abc",manImg)
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}