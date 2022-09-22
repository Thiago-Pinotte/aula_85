canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasaMatris=["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
randomNumber=Math.floor(Math.random()*4);
console.log(randomNumber);


roverWidth=100;
roverHeight=90;

backgroundImage=nasaMatris[randomNumber];
console.log("Imagem= "+ backgroundImage)
roverImage="rover.png";

roverX=10;
roverY=10;



function add() {
    backgroundImageTag=new Image();
    backgroundImageTag.onload=uploadBackground;
    backgroundImageTag.src=backgroundImage;

    roverImageTag=new Image();
    roverImageTag.onload=uploadrover;
    roverImageTag.src=roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(roverImageTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=="38") {
        up();
        console.log("tecla para cima")
    }
    if (keyPressed=="40") {
        down();
        console.log("tecla para baixo")
    }
    if (keyPressed=="37") {
        left();
        console.log("tecla para esquerda")
    }
    if (keyPressed=="39") {
        right();
        console.log("tecla para direita")
    }
}

function up() {
    if (roverY>=0) {
        roverY=roverY-10;
        console.log("quando a seta para cima for presionada, x= "+ roverX+ "Y= "+ roverY);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (roverY<=500) {
        roverY=roverY +10;
        console.log("quando a seta para baixo for presionada, x= "+ roverX+ "Y= "+ roverY);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (roverX>=0) {
        roverX=roverX-10;
        console.log("quando a seta para esquerda for presionada, x= "+ roverX+ "Y= "+ roverY);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (roverX<=700) {
        roverX=roverX +10;
        console.log("quando a seta para direita for presionada, x= "+ roverX+ "Y= "+ roverY);
        uploadBackground();
        uploadrover();
    }
}