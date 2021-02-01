var cat,catImg2;
var mouse;
var ground;

function preload(){
   
}
function setup(){
    createCanvas(900,700);
    cat=createSprite(450,350,10,20);

    ground=createSprite(600,600,10000,200);
 
    
    mouse=createSprite(400,300,10,10);

}

function draw() {

    background("lightgreen");


    keyPressed();
    drawSprites();
}

function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-1;

}

if(keyCode===RIGHT_ARROW){
    cat.velocityX=1;

}

if(keyCode===UP_ARROW){
    cat.velocityY=-1;

}
if(keyCode===DOWN_ARROW){
    cat.velocityY=1;

}
}
