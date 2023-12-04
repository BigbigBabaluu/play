var charX = 300;
var charY = 345;
var charSize = 30;

let charBaseSpeed = 5; 
var charSpeed = 0;
var charYSpeed = 0;

var jumpStrength = -15; 
var isJumping = false;
var gravity = 1;

var CHAR_IDLE_IMG_PATH = 'assets/lil penguin idle.png';
var CHARSPRITEPATH = 'assets/lil penguin walk.png';
var spriteSheet;
let charAnimation;

function moveCharacter() {
  
  if ((keyIsDown(68) || keyIsDown(39)) && charX + charSize/2 < 600) {
    charSpeed = charBaseSpeed;
    charX += charSpeed;
  }else{
    charSpeed = 0;
  }
  
  if ((keyIsDown(65) || keyIsDown(37)) && charX - charSize/2 > 0) {
    charSpeed = -charBaseSpeed;
    charX += charSpeed;
  }
  
  if ((keyIsDown(87) || keyIsDown(38)) && !isJumping) {
    isJumping = true;
    charYSpeed = jumpStrength;
  }

  if (charY + charYSpeed < 335) {
    charY += charYSpeed;
    charYSpeed += gravity;
  } else {
    charY = 335;
    charYSpeed = 0;
    isJumping = false;
  }
}

function drawCharacter(){

  push();
   if (charSpeed !== 0) {
    if (charSpeed < 0) {
      scale(-1, 1);
      animation(charAnimation, -charX, charY);
    } else if (charSpeed > 0) {
      animation(charAnimation, charX, charY);
    }
  } else {
    image(CHARIMG, charX - charSize / 2, charY - charSize / 2);
  }

  if (charX + charSize / 2 >= width) {
    if (!hasHitEdge && !isSoundDisabled) {
      PlayHitSound();
      hasHitEdge = true;
    }
  }

  if (charX - charSize / 2 <= 0) {
    if (!hasHitEdge && !isSoundDisabled) {
      PlayHitSound();
      hasHitEdge = true;
    }
  }
  
  if (charX + charSize / 2 < width && charX - charSize / 2 > 0) {
    hasHitEdge = false;
  }
  pop();
  
}