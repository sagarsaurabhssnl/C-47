var spaceShip, spaceShipImg;
var alien;
var alienImg1, alienImg2, alienImg3;
var alienImg = [];
var score = 0;
var bulletImg, bullet;
var ag = [], alienCount = 0;
var bg1, bg2, bg3, bulletCount = 1;
var health = 200;
var reload = 0;

function preload() {
    spaceShipImg = loadImage("images/spaceship.png");
    alienImg1 = loadImage("images/1.png");
    alienImg2 = loadImage("images/2.png");
    alienImg3 = loadImage("images/3.png");
    alienImg = [alienImg1, alienImg2, alienImg3];
    bulletImg = loadImage("images/bullet.png");
}
function setup() {
    createCanvas(400, 600);
    spaceShip = createSprite(200, 550, 50, 50);
    spaceShip.addImage(spaceShipImg);
    spaceShip.scale = 0.1;
    bg1 = new Group();
    bg1 = new Group();
    bg1 = new Group();
}

function draw() {
    background(200);
    fill("red");
    if (frameCount % (100 - score) === 0) {
        alien = createSprite(Math.round(random(50, 350)), 20, 20, 40);
        alien.shapeColour = 0;
        alien.velocityY = 2;
        alien.scale = 0.1;
        alien.addImage(random(alienImg));
        ag[alienCount] = new Group();
        ag[alienCount].add(alien);
        alienCount += 1;
    }
    drawSprites();
    text("Score: " + score, 330, 20);
    fill(150);
    rect(0, 200, 20, 200);
    fill("#ff0000");
    rect(0, 200, 20, health);
}

function keyPressed() {
    if (keyCode === 37 && spaceShip.x > 25) {
        spaceShip.x -= 20;
    }
    if (keyCode === 39 && spaceShip.x < 375) {
        spaceShip.x += 20;
    }
    if (keyCode === 32) {
        if (reload === 0) {
            reload = 1;
            bullet = createSprite(spaceShip.x, spaceShip.y);
            bullet.addImage(bulletImg);
            bullet.velocityY = -15;
            bullet.scale = 0.1;
            switch (bulletCount) {
                case 1: bg1.add(bullet);
                    break;
                case 2: bg2.add(bullet);
                    break;
                case 3: bg3.add(bullet);
                    break;
                default: break;
                    bulletCount += 1;
                    if (bulletCount === 4) {
                        bulletCount = 1;
                    }
            }
            setTimeout(() => {
                reload = 0
            }, 800);
        }
    }
}

function alienKill(){
    // if(bg1.isTouching()){

    // }
}