var MenuIMG;
var teclasAWSD;
var teclasArrow;
var FatalFighter;
var MusicMenu;
var SomOff;
var SomOn

var Integrante_1;
var Integrante_2;
var Integrante_3;
var Participante_1;
var Next;

var CHARIMG;
var Mountains;
var Ground;
var Background_Sound;
var Hit_Sound;

function preload() {
    //Menu
	MenuIMG = loadImage(MenuImage);
    teclasAWSD = loadImage(Teclas_AWSD);
    teclasArrow = loadImage(Arrows);
    FatalFighter = loadFont(MinhaFonte);
    MusicMenu = loadSound(BeforeTheNigth);
    SomOn = loadImage(SomON);
    SomOff = loadImage(SomOFF);
  
    somImage = SoundOn ? SomOn : SomOff;
  
    Integrante_1 = loadImage(Integrante1);
    Integrante_2 = loadImage(Integrante2);
    Integrante_3 = loadImage(Integrante3);
    Participante_1 = loadImage(Participante1);
    Next = loadImage(NextPage);

    //character
    CHARIMG = loadImage(CHAR_IDLE_IMG_PATH);
    spriteSheet = loadSpriteSheet(CHARSPRITEPATH, 32, 32, 4);
    charAnimation = loadAnimation(spriteSheet);

    //BackGroundElements
    Mountains = loadImage(BackgroundIMG);
    Ground = loadImage(GroundIMG);
    Background_Sound = loadSound(BackgroundSound);
    Hit_Sound = loadSound(HitSound);
}

function setup() {
  var canvasX = 600;
  var canvasY = 400;
  elipseX = random(width); // posição x inicial aleatória
  elipseY = 0; // posição y inicial no topo
  
  createCanvas(canvasX, canvasY);
  
  StoppedColor = color(255, 69, 0);
  PlayingColor = color(218, 165, 32);
  ButtonColor = SoundOn ? PlayingColor : StoppedColor;
  
  PlaySound();
}

function draw() {
  background(220);

  // Troca de telas
  if (telaAtual === "Menu") {
    clear();
    drawMenu();
  } else if (telaAtual === "Tela 1") {
    drawInGame();
  } else if (telaAtual === "Tela 2") {
    drawControls();
  } else if (telaAtual === "Tela 3") {
    drawOptions();
  } else if (telaAtual === "Tela 4") {
    drawCredits();
  } else if (telaAtual === "Tela 5"){
    drawCreditsPage2();
  }

  // Verificar se o jogo está parado e estamos na Tela 1
  if (jogoParado && telaAtual === "Tela 1") {
    drawEndGameOptions();
    textFont(FatalFighter);
    textSize(25);
    fill(0, 0, 0);
    text("score:" + score, 300, 105);
  }
}