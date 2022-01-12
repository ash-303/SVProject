var btn, buttonImg;
var beerBottle, beerBottleImg;
var floor, floorImg;
var truth, truthImg;
var dare, dareImg;
var gameState = "Intro";
var spin;
var gameState2 = "bottleIdle";
var time = 0;

function preload(){
    buttonImg = loadImage("startButton.png");
    floorImg = loadImage("woodenfloor.jpg");
    truthImg = loadImage("truth.png");
    dareImg = loadImage("dare.png");
    beerBottleImg = loadImage("beerbottle.png");
}



function setup(){
    createCanvas (900, 600)
    btn = createSprite(450, 560);
    btn.scale = 0.2;
    btn.addImage(buttonImg);
    spin = createSprite(460, 50, 150, 50);
        spin.shapeColor = "teal";
        spin.visible = false;

        beerBottle = createSprite(460, 300);
        beerBottle.addImage(beerBottleImg);
        beerBottle.scale = 0.9;
        beerBottle.visible = false;

        truth = createSprite(250, 500);
        truth.scale = 0.3;
        truth.addImage(truthImg);
        truth.visible = false;

        dare = createSprite(600, 500);
        dare.scale = 0.3;
        dare.addImage(dareImg);
        dare.visible = false;
    
}



function draw(){


    if(gameState === "Intro"){

    
        background (178, 255, 102);
        textSize(30);
        fill (random(0,255), random(0, 255), random(0, 255));
        text("Spin The Bottle", 350, 50);

        textSize(20);
        fill("black");
        text("How to play:-", 20, 100);

        textSize(18);
        fill("blue");
        text("Step 1: Gather a group of friends.", 30, 150);

        textSize(18);
        fill("blue");
        text("Step 2: Sit in a circle.", 30, 180);

        textSize(18);
        fill("blue");
        text("Step 3: Place your electronic device in the centre of the circle.", 30, 210);

        textSize(18);
        fill("blue");
        text("Step 4: Click on the start button at the end of the screen. (Not now! Read the instructions first.) ", 30, 240);

        textSize(18);
        fill("blue");
        text("Step 5: Once you ahve clicked on the start button, a beer bottle will appear.", 30, 270);

        textSize(18);
        fill("blue");
        text("Step 6: Below the bottle, you will see a button named 'Spin'. Click on it.", 30, 300);

        textSize(18);
        fill("blue");
        text("Step 7: Upon clicking the button, the bottle will spin and land on a random person.", 30, 330);

        textSize(18);
        fill("blue");
        text("Step 8: You will be given two options: Truth or Dare.", 30, 360);

        textSize(18);
        fill("blue");
        text("Step 9: Choose any one of the options. Once you have chosen your desired option you will either", 30, 390) 
        text("be asked a question you have to asnwer truthfully, or do something that you have been dared to do.", 30, 410);

        textSize(18);
        fill("blue");
        text("Step 10: Yes, you have to do it, no matter what.", 30, 440);

        textSize(18);
        fill("blue");
        text("Step 11: Once you have completed the repective task you can spin the bottle again.", 30, 470);

        textSize(18);
        fill("blue");
        text("Step 12: Enjoy Amigos!", 30, 500);

        if(mousePressedOver(btn)){
            console.log("click");
            gameState = "play";

        }
    }

    

    if(gameState === "play"){
        background(floorImg);
        btn.visible = false;
        
        beerBottle.visible = true;
        
        
        spin.visible = true;
        

    }
    
    drawSprites();
    if(gameState === "play"){
        textSize(20);
        fill("black");
        text("Spin!", 440, 55);
    }
    
    if(mousePressedOver(spin)){
        console.log("blah");
        time = 0;
        
        gameState2 = "bottleSpin";
    }
    
    if(gameState2 === "bottleSpin"){
        beerBottle.rotation = beerBottle.rotation+20;
        time = time+random(0.1, 0.4);
    }
        var r = random(20, 40);

    if (time >= r){
        gameState2 = "bottleIdle2"
    }

    if(gameState2 === "bottleIdle2"){
        truth.visible = true;
        dare.visible = true;
    }

    if(mousePressedOver(truth)){
        gameState2 = "truth";
        
    }

    if(gameState2==="truth"){
        gameTruth();
    }

    

    if(mousePressedOver(dare)){
        gameState2 = "dare";
       
    }

    if(gameState2==="dare"){
        gameDare();
    }

}

function gameTruth(){
    var choose = random(1, 2)

    textSize(60);
        fill("red");
    if(choose ===1){
        
        text("1kjggjhhfytryljljlkh", 50, 50);
    }
    else if(choose === 2){
        text("2jgfhfdyst", 50, 50)
    }
}

function gameDare(){
    var choose = random(1, 2);
    textSize(60);
    fill("red");
    text("Supernatural", 50, 50);

    if(choose ===1){
        text("dare1", 50, 50);
    }
    else if(choose === 2){
        text("dare2", 50, 50);
    }
}