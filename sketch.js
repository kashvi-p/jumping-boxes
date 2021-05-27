var canvas;
var plate1, plate2, plate3, plate4, plate5, plate6; 
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    plate1 = createSprite(20, 200, 30, 400);
    plate1.shapeColor = "purple";

    plate2 = createSprite(0, 580, 360, 30);
    plate2.shapeColor = "blue";

    plate3 = createSprite(295, 580, 200, 30);
    plate3.shapeColor = "green";

    plate4 = createSprite(515, 580, 200, 30);
    plate4.shapeColor = "yellow";

    plate5 = createSprite(740, 580, 220, 30);
    plate5.shapeColor = "orange";

    plate6 = createSprite(780, 200, 30, 400);
    plate6.shapeColor = "red";
    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 5;
    ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(plate1.isTouching(ball) && ball.bounceOff(plate1)){
        ball.shapeColor = "purple";
        music.play();
    }

    if(plate2.isTouching(ball) && ball.bounceOff(plate2)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(plate3.isTouching(ball) && ball.bounceOff(plate3)){
        ball.shapeColor = "green";
        music.play();
    }

    if(plate4.isTouching(ball) && ball.bounceOff(plate4)){
        ball.shapeColor = "yellow";
        music.play();
    }

    if(plate5.isTouching(ball) && ball.bounceOff(plate5)){
        ball.shapeColor = "orange";
        music.play();
    }

    if(plate6.isTouching(ball) && ball.bounceOff(plate6)){
        ball.shapeColor = "red";
        music.play();
    }

    drawSprites();
}
