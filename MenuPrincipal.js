var telaAtual = "Menu";

var MenuImage = 'assets/imageMenu.png';
var Teclas_AWSD = 'assets/teclas_AWSD.png';
var Arrows = 'assets/Arrows.png';

var SomON = 'assets/Som on.png';
var SomOFF = 'assets/Som off.png';
let somImage;

var Integrante1 = 'assets/Bigbig.jpeg';
var Integrante2 = 'assets/Niltinhu.jpeg';
var Integrante3 = 'assets/Tarcísio.jpeg';
var Participante1 = 'assets/Thales.jpeg';
var NextPage = 'assets/Next.png'

var MinhaFonte = 'assets/Fatal Fighter.ttf';
var BeforeTheNigth = 'assets/Before the Night.mp3';
var SoundOn = false;
var SoundIsPlaying = true;

var StoppedColor;
var PlayingColor;
var ButtonColor;

let respostaAtual = ""
let respostaY = -50
let respostaX, Xatual= 300

let respostaAtual2 = ""
let respostaY2 = -30
let respostaX2, Xatual2= 100

let respostaAtual3 = ""
let respostaY3 = -40
let respostaX3, Xatual3= 200

let respostaAtual4 = ""
let respostaY4 = -60
let respostaX4, Xatual4= 400

let respostaAtual5 = ""
let respostaY5 = -70
let respostaX5, Xatual5= 500

let colisaoOcorreuElipse1 = false;
let colisaoOcorreuElipse2 = false;
let colisaoOcorreuElipse3 = false;
let colisaoOcorreuElipse4 = false;
let colisaoOcorreuElipse5 = false;
let jogoParado = false;

let tentativasSemColisao = 0;
let score = 0

function drawMenu(){  
  
  image(MenuIMG, 0, 0, width, height);
  
  //Desenha os Botões  
  strokeWeight(4);
  
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(300, 205, 130, 40);
  
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(300, 260, 130, 40);
  
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(300, 315, 130, 40);
  
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(300, 370, 130, 40);
  
  //Texto Dos Botões
  textAlign(CENTER,CENTER);
  
  textFont(FatalFighter);
  textSize(100);
  fill(0,0,0);
  text("MathWorld", 300, 110);
  
  textSize(20);
  fill(0,0,0);
  text("New Game", 300, 205);
  
  textSize(20);
  fill(0,0,0);
  text("Controls", 300, 260);
  
  textSize(20);
  fill(0,0,0);
  text("Options", 300, 315);
  
  textSize(20);
  fill(0,0,0);
  text("Credits", 300, 370);
  
}

// Tela 1
function drawInGame() {
  // Desenha a imagem de fundo
  drawBackground();
  
  // Desenha o personagem e o botão
  moveCharacter();
  drawCharacter();
  drawButton();
  
  textAlign(CENTER, CENTER);
  textSize(15);
  fill(0, 0, 0);
  text("SCORE: " + score, 85, 70);
  
  // Expressão matemática aleatoria  
  const expressaoAleatoria = gerarExpressao();
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(0, 0, 0);
  text(expressaoGerada, 300, 50);

  stroke(1);
  
  // Para evitar que as elipses "colidam"
  while (dist(Xatual, respostaY, Xatual2, respostaY2) < 80 ||
         dist(Xatual, respostaY, Xatual3, respostaY3) < 80 ||
         dist(Xatual, respostaY, Xatual4, respostaY4) < 80 ||
         dist(Xatual, respostaY, Xatual5, respostaY5) < 80 ||
         dist(Xatual2, respostaY2, Xatual3, respostaY3) < 80 ||
         dist(Xatual2, respostaY2, Xatual4, respostaY4) < 80 ||
         dist(Xatual2, respostaY2, Xatual5, respostaY5) < 80 ||
         dist(Xatual3, respostaY3, Xatual4, respostaY4) < 80 ||                      dist(Xatual3, respostaY3, Xatual5, respostaY5) < 80 ||                      dist(Xatual4, respostaY4, Xatual5, respostaY5) < 80) {
              Xatual = random(25, 575);
              Xatual2 = random(25, 575);
              Xatual3 = random(25, 575);
              Xatual4 = random(25, 575);
              Xatual5 = random(25, 575);
  }

  //A resposta começa em branco. Gerar novos valores
  if (respostaAtual2 === "") {
    respostaAtual2 = gerarRespostaUnica();
  }
  if (respostaAtual3 === "") {
    respostaAtual3 = gerarRespostaUnica();
  }
  if (respostaAtual4 === "") {
    respostaAtual4 = gerarRespostaUnica();
  }
  if (respostaAtual5 === "") {
    respostaAtual5 = gerarRespostaUnica();
  }
  
  // Colisão com elipse 1
  if (!colisaoOcorreuElipse1 && dist(charX, charY, Xatual, respostaY) < charSize / 2 + 20) {
  // Colisão com a resposta certa (elipse 1)
      score += 50
  // Nova expressão aleatória
      expressaoGerada = gerarExpressao();
  // Nova expressão e sua resposta dentro da elipse
      colisaoOcorreuElipse1 = true;
      tentativasSemColisao = tentativasSemColisao; // Zera a contagem quando há colisão
  }
  
  // Elipse 1
  fill(255);
  ellipse(Xatual, respostaY, 40, 40);
  textAlign(CENTER, CENTER);
  textSize(23);
  fill(0);
  text(resultado, Xatual, respostaY);
  
  // Elipse 2
  fill(255);
  ellipse(Xatual2, respostaY2, 40, 40);
  textAlign(CENTER, CENTER);
  textSize(23);
  fill(0);
  text(respostaAtual2, Xatual2, respostaY2);

  // Elipse 3
  fill(255);
  ellipse(Xatual3, respostaY3, 40, 40);
  textAlign(CENTER, CENTER);
  textSize(23);
  fill(0);
  text(respostaAtual3, Xatual3, respostaY3);
  
  // Elipse 4
  fill(255);
  ellipse(Xatual4, respostaY4, 40, 40);
  textAlign(CENTER, CENTER);
  textSize(23);
  fill(0);
  text(respostaAtual4, Xatual4, respostaY4);
  
  // Desenhar a elipse 5
  fill(255);
  ellipse(Xatual5, respostaY5, 40, 40);
  textAlign(CENTER, CENTER);
  textSize(23);
  fill(0);
  text(respostaAtual5, Xatual5, respostaY5);


  // Colisão com elipse 2
  if (dist(charX, charY, Xatual2, respostaY2) < charSize / 2 + 20) {
      colisaoOcorreuElipse2 = true;
      jogoParado = true 
      drawEndGameOptions();
      strokeWeight(0);
      textFont(FatalFighter);
      textSize(25);
      fill(0, 0, 0);
      text("score:" + score, 300, 105);
  }

  // Colisão com elipse 3
  if (dist(charX, charY, Xatual3, respostaY3) < charSize / 2 + 20) {
      colisaoOcorreuElipse3 = true;
      jogoParado = true;
      drawEndGameOptions();
      strokeWeight(0);
      textFont(FatalFighter);
      textSize(25);
      fill(0, 0, 0);
      text("score:" + score, 300, 105);
  }
  
  // Colisão com elipse 4
  if (dist(charX, charY, Xatual4, respostaY4) < charSize / 2 + 20) {
      colisaoOcorreuElipse4 = true;
      jogoParado = true;
      drawEndGameOptions();
      strokeWeight(0);
      textFont(FatalFighter);
      textSize(25);
      fill(0, 0, 0);
      text("score:" + score, 300, 105);
  }
  
  // Colisão com elipse 5
  if (dist(charX, charY, Xatual5, respostaY5) < charSize / 2 + 20) {
      colisaoOcorreuElipse5 = true;
      jogoParado = true;
      drawEndGameOptions();
      strokeWeight(0);
      textFont(FatalFighter);
      textSize(25);
      fill(0, 0, 0);
      text("score:" + score, 300, 105);
  }

      respostaY += 2;
      respostaY2 += 2;
      respostaY3 += 2;
      respostaY4 += 2;
      respostaY5 += 2;
  
  // Elipses até o final da tela
  if (respostaY > height +0 && respostaY2 > height +0 && respostaY3 > height +0 && respostaY4 > height +0 && respostaY5 > height +0) {
    respostaY = -50;
    respostaY2 = -40;
    respostaY3 = -30;
    respostaY4 = -60;
    respostaY5 = -70;
    Xatual = random(20,580)
    Xatual2 = random(20,580)
    Xatual3 = random(20,580)
    Xatual4 = random(20,580)
    Xatual5 = random(20,580)
    
    respostaAtual2 = Math.floor(Math.random() * 201) - 100;
    respostaAtual3 = Math.floor(Math.random() * 201) - 100;
    respostaAtual4 = Math.floor(Math.random() * 201) - 100;
    respostaAtual5 = Math.floor(Math.random() * 201) - 100;
    
    // tentativas sem escolha de resposta
    if (!colisaoOcorreuElipse1 && dist(charX, charY, Xatual, respostaY) > charSize / 2 + 20) {
    tentativasSemColisao++;
    // Verificar se atingiu o limite de tentativas sem colisão
    if (tentativasSemColisao === 3) {
      jogoParado = true;
      drawEndGameOptions();
      strokeWeight(0);
      textFont(FatalFighter);
      textSize(25);
      fill(0, 0, 0);
      text("score:" + score, 300, 105);
      tentativasSemColisao = 0
    }
  }
    
    // Calcular a resposta da nova expressão
    const partesNovaExpressao = expressaoGerada.split(' ');
    const novoNumero1 = parseInt(partesNovaExpressao[0]);
    const novoSinal = partesNovaExpressao[1];
    const novoNumero2 = parseInt(partesNovaExpressao[2]);

    resultado = avaliarExpressao(novoNumero1, novoSinal, novoNumero2);
    // Reiniciar colisão das elipses
    colisaoOcorreuElipse1 = false;
    colisaoOcorreuElipse2 = false;
    colisaoOcorreuElipse3 = false;
    colisaoOcorreuElipse4 = false;
    colisaoOcorreuElipse5 = false;
    
  }
  // Parar o jogo
  if (jogoParado) {
    noLoop();  
  }  
  
  if (SoundOn) {
    image(SomOn, 565, 13, 15, 15);
  } else {
    image(SomOff, 565, 13, 15, 15);
  }
}

// Tela 2
function drawControls() {
  
    image(MenuIMG, 0, 0, width, height);
    image(teclasAWSD, 55, 50, 130, 100);
    image(teclasArrow, 55, 160, 130, 100);
  
    textFont(FatalFighter);
    // Botão voltar
    strokeWeight(4);
    fill(232, 41, 2);
    rectMode(CENTER);
    rect(535, 365, 100, 40);

    textAlign(CENTER,CENTER);
    textSize(20);
    fill(0, 0, 0);
    text("Back", 535, 365);
  
    // Instruções do Jogo
    textAlign(CENTER, CENTER);
    textSize(25);
    stroke("white");
    strokeWeight(3);
    fill(0);
    text("Instrucoes do Jogo", 300, 25);
    textSize(18);
    textAlign(LEFT, TOP);
    text("1. Utilize as teclas de direcao AWSD ou\n Setas para mover o personagem. Exceto as\n teclas W e Seta para baixo.", 205, 70);
    text("2. Resolva os problemas matematicos e mova\n o personagem ate as respostas certas para\n acumular pontos.", 205, 150);
    text("3. O jogo nao tem um fim ate que voce erre a\n resposta certa.", 205, 230);
    text("4. Se passar por quatro rodadas sem escolher uma resposta,\n voce perde.", 50, 290);
    text("5. Divirta-se e boa sorte!", 50, 340);
}

// Tela 3
function drawOptions() {

  image(MenuIMG, 0, 0, width, height);
  
  ButtonColor = lerpColor(StoppedColor, PlayingColor, SoundIsPlaying ? 1 : 0);
  
  textFont(FatalFighter);
    // Voltar
  strokeWeight(4);
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(535, 365, 100, 40);

  textAlign(CENTER,CENTER);
  textSize(20);
  fill(0, 0, 0);
  
  text("Back", 535, 365);
  
    // Botões de Som(On/Off)
  fill(ButtonColor);
  rectMode(CENTER);
  rect(195, 100, 100, 40);
  
  textSize(20);
  fill(0);
  text("On / Off", 195, 100);
  
  stroke("white");
  strokeWeight(3);
  textSize(25);
  fill(0);
  text("Music:", 100, 100);
  
}

// Tela 4
function drawCredits() {

  image(MenuIMG, 0, 0, width, height);

  textFont(FatalFighter);
  // Voltar
  strokeWeight(4);
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(535, 365, 100, 40);
  
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(535, 30, 100, 30);
  
  image(Next, 500, -3, 70, 70);

  textAlign(CENTER,CENTER);
  textSize(20);
  fill(0, 0, 0);
  text("Back", 535, 365);
  
  textAlign(CENTER,CENTER);
  textSize(25);
  fill(0, 0, 0);
  text("Integrantes", 300, 30);

  image(Integrante_1, 50, 60, 100, 100);
  image(Integrante_2, 50, 170, 100, 100);
  image(Integrante_3, 50, 280, 100, 100);
  
  stroke("white");
  strokeWeight(3);
  textAlign(LEFT,TOP);
  textSize(15);
  fill(0, 0, 0);
  text("Felipe Edson de Oliveira", 160, 60);
  text("19 Anos", 160, 80);
  text("Estudante do curso de CeT pela UFRN", 160, 100);
  text("felipe.lancerr@gmail.com", 160, 120);

  textAlign(LEFT,TOP);
  textSize(15);
  fill(0, 0, 0);
  text("Weverton Lucas da Silva", 160, 170);
  text("26 Anos", 160, 190);
  text("Estudante do curso de CeT pela UFRN", 160, 210);
  text("wlsweverton@gmail.com", 160, 230);

  textAlign(LEFT,TOP);
  textSize(15);
  fill(0, 0, 0);
  text("Tarcisio Cruz da Silva dos Santos", 160, 280);
  text("19 Anos", 160, 300);
  text("Estudante do curso de CeT pela UFRN", 160, 320);
  text("tarcisiocss@gmail.com", 160, 340);
}

function drawEndGameOptions() {
  // Opções "Reiniciar" e "Menu" quando o usuário perder
  strokeWeight(4);
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(300, 165, 130, 40);
  strokeWeight(0);
  textFont(FatalFighter);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0, 0, 0);
  text("Reiniciar", 300, 165);
  strokeWeight(4);
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(300, 225, 130, 40);
  strokeWeight(0);
  textFont(FatalFighter);
  textSize(20);
  fill(0, 0, 0);
  text("Menu", 300, 225);
}

function mouseClicked() {
  // Troca de telas
  if (telaAtual === "Menu") {
    if (mouseX > 235 && mouseX < 365) {
      if (mouseY > 185 && mouseY < 225) {
        telaAtual = "Tela 1";
      } else if (mouseY > 240 && mouseY < 280) {
        telaAtual = "Tela 2";
      } else if (mouseY > 295 && mouseY < 335) {
        telaAtual = "Tela 3";
      } else if (mouseY > 250 && mouseY < 390) {
        telaAtual = "Tela 4";
      }
    }
  } else if (telaAtual === "Tela 2" || telaAtual === "Tela 3" || telaAtual === "Tela 4") {
    if (mouseX > 485 && mouseX < 585 && mouseY > 350 && mouseY < 385) {
      telaAtual = "Menu";
    }
  } else if (telaAtual === "Tela 5"){
    telaAtual = "Tela 4";
  }

  if (telaAtual === "Tela 4" && mouseX > 485 && mouseX < 555 && mouseY > 5 && mouseY < 65) {
    // Muda para a segunda página
    telaAtual = "Tela 5";
  }

  // Som 0n/Off
  if (mouseX > 145 && mouseX < 245 && mouseY > 80 && mouseY < 120) {
    toggleSound(); // Liga ou desliga o áudio
  }

  if (mouseX > 550 && mouseX < 590 && mouseY > 10 && mouseY < 30 && telaAtual === "Tela 1") {
    if (SoundOn) {
      StopSound();
      SoundOn = false;
      isSoundDisabled = true;
    } else {
      PlaySound();
      SoundOn = true;
      isSoundDisabled = false;
    }
  }

  // Botão de voltar ao menu
  if (telaAtual === "Tela 1" && jogoParado) {
    if (mouseX > 235 && mouseX < 365) {
      if (mouseY > 205 && mouseY < 245) {
        jogoParado = false;
        telaAtual = "Menu";
        charX = 300;
        charY = 345;
        score = 0;
        respostaY = -50;
        respostaY2 = -30;
        respostaY3 = -40;
        respostaY4 = -60;
        respostaY5 = -70;
        expressaoGerada = gerarExpressao();
        const partesNovaExpressao = expressaoGerada.split(' ');
        const novoNumero1 = parseInt(partesNovaExpressao[0]);
        const novoSinal = partesNovaExpressao[1];
        const novoNumero2 = parseInt(partesNovaExpressao[2]);
        resultado = avaliarExpressao(novoNumero1, novoSinal, novoNumero2);
        loop();
      }
    }
  }

  // Reiniciar o jogo após o usuário errar a resposta ou deixar passar 3 vezes
  if (jogoParado) {
    if (mouseX > 235 && mouseX < 365 && mouseY > 145 && mouseY < 185) {
      jogoParado = false;
      charX = 300;
      charY = 345;
      score = 0;
      respostaY = -50;
      respostaY2 = -30;
      respostaY3 = -40;
      respostaY4 = -60;
      respostaY5 = -70;
      expressaoGerada = gerarExpressao();
      const partesNovaExpressao = expressaoGerada.split(' ');
      const novoNumero1 = parseInt(partesNovaExpressao[0]);
      const novoSinal = partesNovaExpressao[1];
      const novoNumero2 = parseInt(partesNovaExpressao[2]);
      resultado = avaliarExpressao(novoNumero1, novoSinal, novoNumero2);
      loop();
    }
  }

  // Evite que o clique propague para elementos abaixo
  return false;
}
function toggleSound() {
  if (SoundIsPlaying) {
    StopSound();
    image(SomOff, 565,13, 15, 15);
  } else {
    PlaySound();
    image(SomOn, 565,13, 15, 15);
  }
  somImage = SoundIsPlaying ? SomOn : SomOff;
  SoundIsPlaying = !SoundIsPlaying;
}

function PlaySound(){
  if(!SoundOn){
    MusicMenu.play();
    MusicMenu.setVolume(0.3);
    MusicMenu.setLoop(true);
    SoundOn = true;
  }
}

function StopSound(){
  if (SoundOn) {
    MusicMenu.stop();
    SoundOn = false;
  }
} 
  // Para que as elipses não tenham o mesmo resultado
function gerarRespostaUnica() {
  let novaResposta;
  do {
    novaResposta = Math.floor(Math.random() * 201) - 100;
  } while (
    novaResposta === respostaAtual2 ||
    novaResposta === respostaAtual3 ||
    novaResposta === respostaAtual4 ||
    novaResposta === respostaAtual5 ||
    novaResposta === resultado
  );
  return novaResposta;
}

function drawCreditsPage2(){
  image(MenuIMG, 0, 0, width, height);
  
  strokeWeight(4);
  fill(232, 41, 2);
  rectMode(CENTER);
  rect(535, 365, 100, 40);

  textFont(FatalFighter);
  textAlign(CENTER,CENTER);
  textSize(20);
  fill(0, 0, 0);
  text("Back", 535, 365);
  
  textAlign(CENTER,CENTER);
  textSize(25);
  fill(0, 0, 0);
  text("Professor Orientador", 300, 30);
  
  image(Participante_1, 50, 60, 100, 100);
  
  stroke("white");
  strokeWeight(3);
  textAlign(LEFT,TOP);
  textSize(15);
  fill(0, 0, 0);
  text(" Thales Aguiar de Lima", 160, 60);
  text("Formacao: Mestrado", 160, 80);
  text("Professor de Logica de Programacao na UFRN", 160, 100);
  text("thales.aguiar.016@ufrn.edu.br", 160, 120);
  
  textAlign(CENTER,CENTER);
  textSize(25);
  fill(0, 0, 0);
  text("Referencias", 300, 180);
  
  textSize(15);
  textAlign(LEFT,TOP);
  text("https://caz-creates-games.itch.io/lil-penguin-character-sprite", 50, 200);
  text("https://vnitti.itch.io/glacial-mountains-parallax-background", 50, 220);
  text("https://slip.stream/br/vibes/night", 50, 240);
  text("https://www.dafont.com/fatal-fighter.font", 50, 260);
  text("https://wallpapers.com/wallpapers/math-symbols-in-orange-urukb380uea\njtbvp.html", 50, 280);
  text("https://wallpapers.com/wallpapers/math-symbols-in-orange-urukb380uea\njtbvp.html", 50, 320);
}