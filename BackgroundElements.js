var BackgroundIMG = 'assets/background_glacial_mountains.png';
var GroundIMG = 'assets/GroundIMG.png';
var BackgroundSound = 'assets/Before the Night.mp3';
var HitSound = 'assets/HitSound.wav';

var SoundOn = false;
var hasHitEdge = false;
var isSoundDisabled = false;

let expressaoAtual = "";

let expressaoGerada = gerarExpressao();
const partesExpressao = expressaoGerada.split(' ');
const numero1 = parseInt(partesExpressao[0]);
const sinal = partesExpressao[1];
const numero2 = parseInt(partesExpressao[2]);

let resultado = avaliarExpressao(numero1, sinal, numero2);

function drawBackground(){
  image(Mountains, 0, 0, width, height);
  image(Ground, 0, 200, 600, 200);
}

function drawButton(){
  stroke(4)
  rectMode(CENTER);
  fill(145, 144, 144);
  rect(570,20,40,20);
  
  // textAlign(CENTER,CENTER);
  // fill(0,0,0);
  // textSize(12);
  // text("On/Off", 570,20);
}

function PlaySound(){
  if(!SoundOn){
    Background_Sound.play();
    Background_Sound.setVolume(0.2);
    Background_Sound.setLoop(true);
    SoundOn = true;
  }
}

function StopSound() {
  if (SoundOn) {
    Background_Sound.stop(); // Parar o som de fundo
    if (hasHitEdge) {
      Hit_Sound.stop(); // Parar o som da borda
    }
    SoundOn = false;
  }
}

function PlayHitSound(){
  Hit_Sound.play();
  Hit_Sound.setVolume(2);
}

function avaliarExpressao(numero1, sinal, numero2) {
    switch (sinal) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
    }
}

function gerarExpressao() {
    // Gerar dois números entre 0 e 1000
    const numero1 = Math.floor(Math.random() * 101);
    const numero2 = Math.floor(Math.random() * 101);

    // Array de sinais
    const sinais = ['+', '-'];

    // Escolher sinal
    const sinalAleatorio = sinais[Math.floor(Math.random() * sinais.length)];

    // Expressão
    const expressao = `${numero1} ${sinalAleatorio} ${numero2}`;

    return expressao;
}