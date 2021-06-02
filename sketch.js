var Edges
var block1,block2,block3,block4;
var ball;


function preload(){
   
  
}


function setup(){
    canvas = createCanvas(900,600);

    block1 = createSprite(135,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(360,580,200,30);
    block2.shapeColor = "orange";

    block3=createSprite(580,580,200,30);
    block3.shapeColor="yellow"

    block4=createSprite(795,580,200,30);
    block4.shapeColor="green"
    
    ball = createSprite(100,200,45,45);
    ball.shapeColor="white";
    ball.velocityY=5;
    ball.velocityX=5; 
    
    

}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    

    



    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        
    }
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
      
    }if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
        
    }if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
       
    }

drawSprites();
}

function touching(o1,o2){
    if(o2.x-o1.x<o1.width/2+o2.width/2&&o1.x-o2.x<o1.width/2+o2.width/2&&o2.y-o1.y<o1.height/2+o2.height/2&&o1.y-o2.y<o1.height/2+o2.height/2){
     // a.shapeColor="green"
    // b.shapeColor="green"
      return true
    }
    else{
      //a.shapeColor="red"
     // b.shapeColor="red"
      return false
    }z
  }
  
  function bounceoff(o1,o2){
    if(o2.x-o1.x<o1.width/2+o2.width/2&&o1.x-o2.x<o1.width/2+o2.width/2&&o2.y-o1.y<o1.height/2+o2.height/2&&o1.y-o2.y<o1.height/2+o2.height/2){
   o1.velocityX=o1.velocityX*-1
   o2.velocityX=o2.velocityX*-1
  }
  }

