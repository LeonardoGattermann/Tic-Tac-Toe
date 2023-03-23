let display1 = document.querySelector(".display-1");
let display2 = document.querySelector(".display-2");
let btnSendNames = document.querySelector(".send-names-players");
let pointsX = 0
let pointsO = 0


//Area de teste e desenvolvimento,Comente e descomente ! aqui ele ignora a primeira tela e segue direto a 2 para testes

// let player1 = 'Player 1'
// let player2 = 'Player 2'

// showNameInScoreBoard(player1, player2); 

//Area de teste e desenvolvimento,Comente e descomente !

btnSendNames.addEventListener("click", saveNameInScoreBoard);

function saveNameInScoreBoard() {
  let player1 = document.querySelector("#player-1").value;
  let player2 = document.querySelector("#player-2").value;
  if (player1.length == 0 || player2.length == 0) {
    return alert("Digite Os Nomes Dos Jogadores");
  }
  showNameInScoreBoard(player1, player2);
}

function showNameInScoreBoard(a, b) {

  display1.style.display = "none";
  display2.style.display = "flex";

  let createLiPlay1 = document.createElement("li");
  let createLiPlay2 = document.createElement("li");
  let createLiPontos1 = document.createElement("li");
  let createLiPontos2 = document.createElement("li");
  let UlPontos = document.querySelector(".ul-pontos");
  let ulPlayers = document.querySelector(".Players");
  let createH3Pontos = document.createElement("h3");
  let createH3Names = document.createElement("h3");
  let createDivSeparateScoreNomes = document.createElement("div");
  let createDivSeparateScorePontos = document.createElement("div");

  createLiPlay1.innerHTML = `${a} X`;
  createLiPlay2.innerHTML = `${b} O`;

  createH3Names.innerHTML = "Nomes";
  createH3Pontos.innerHTML = "Pontos";

  createLiPontos1.id = "point-X"
  createLiPontos2.id = "point-O"
  createLiPontos1.innerHTML = pointsX;
  createLiPontos2.innerHTML = pointsO;

  createDivSeparateScorePontos.className = "separateScoreName";
  createDivSeparateScoreNomes.className = "separateScoreName";
  createLiPontos1.className = "li-pontos";
  createLiPontos2.className = "li-pontos";
  createLiPlay1.className = "li-score";
  createLiPlay2.className = "li-score";

  ulPlayers.appendChild(createH3Names);
  createDivSeparateScoreNomes.appendChild(createLiPlay1);
  createDivSeparateScoreNomes.appendChild(createLiPlay2);
  ulPlayers.appendChild(createDivSeparateScoreNomes);
  UlPontos.appendChild(createH3Pontos);
  createDivSeparateScorePontos.appendChild(createLiPontos1);
  createDivSeparateScorePontos.appendChild(createLiPontos2);
  UlPontos.appendChild(createDivSeparateScorePontos);
}

let quadros = document.querySelectorAll(".quadrado");

quadros.forEach(function (quadro) {//aqui ela bota o click em cada quadrado
  quadro.addEventListener("click", verifyclick);
});

function verifyclick(event){
    if(event.target.innerHTML.length == 0){
      showXY(event)
    }
}

let jogadaAtual = document.querySelector('.jogada-Atual')
let yourPlay = "X";
jogadaAtual.innerHTML = ` Jogada atual: ${yourPlay} `

function showXY(event) {
 
  let itenOnOrNot = event.target.innerHTML.length == 0//verifica se tem algum iten no quadro clicado
  if (yourPlay == "X" && itenOnOrNot) {
    event.target.innerHTML = "X";
    yourPlay = "O";
    
    jogadaAtual.innerHTML = ` Jogada atual: ${yourPlay} `
  } else if (yourPlay == "O" && itenOnOrNot) {
    event.target.innerHTML = "O";
    yourPlay = "X";

    jogadaAtual.innerHTML = ` Jogada atual: ${yourPlay} `
  }
    addPoints(verifyWinner())
}

function verifyWinner(){

  console.log('a')
  let quadro1 = document.querySelector(".quadroNumber-1");
  let quadro2 = document.querySelector(".quadroNumber-2");
  let quadro3 = document.querySelector(".quadroNumber-3");
  let quadro4 = document.querySelector(".quadroNumber-4");
  let quadro5 = document.querySelector(".quadroNumber-5");
  let quadro6 = document.querySelector(".quadroNumber-6");
  let quadro7 = document.querySelector(".quadroNumber-7");
  let quadro8 = document.querySelector(".quadroNumber-8");
  let quadro9 = document.querySelector(".quadroNumber-9");
  let sayWinner = document.querySelector('.winner-win')
  let player1 = document.querySelector("#player-1").value;
  let player2 = document.querySelector("#player-2").value;

    if(quadro1.innerHTML == "X" && quadro2.innerHTML == "X" && quadro3.innerHTML == "X" ||
    quadro1.innerHTML == "X" && quadro5.innerHTML == "X" && quadro9.innerHTML == "X"||
    quadro1.innerHTML == "X" && quadro4.innerHTML == "X" && quadro7.innerHTML == "X"||
    quadro2.innerHTML == "X" && quadro5.innerHTML == "X" && quadro8.innerHTML == "X"||
    quadro3.innerHTML == "X" && quadro6.innerHTML == "X" && quadro9.innerHTML == "X"||
    quadro4.innerHTML == "X" && quadro5.innerHTML == "X" && quadro6.innerHTML == "X"||
    quadro7.innerHTML == "X" && quadro8.innerHTML == "X" && quadro9.innerHTML == "X"||
    quadro3.innerHTML == "X" && quadro5.innerHTML == "X" && quadro7.innerHTML == "X"){
    sayWinner.innerHTML = `Parabéns por ganhar ${player1}`
      return 'X'
  }
  if(quadro1.innerHTML == "O" && quadro2.innerHTML == "O" && quadro3.innerHTML == "O" ||
    quadro1.innerHTML == "O" && quadro5.innerHTML == "O" && quadro9.innerHTML == "O"||
    quadro1.innerHTML == "O" && quadro4.innerHTML == "O" && quadro7.innerHTML == "O"||
    quadro2.innerHTML == "O" && quadro5.innerHTML == "O" && quadro8.innerHTML == "O"||
    quadro3.innerHTML == "O" && quadro6.innerHTML == "O" && quadro9.innerHTML == "O"||
    quadro4.innerHTML == "O" && quadro5.innerHTML == "O" && quadro6.innerHTML == "O"||
    quadro7.innerHTML == "O" && quadro8.innerHTML == "O" && quadro9.innerHTML == "O"||
    quadro3.innerHTML == "O" && quadro5.innerHTML == "O" && quadro7.innerHTML == "O"){
      sayWinner.innerHTML = `Parabéns por ganhar ${player2}`
      return 'O'
}
}

function addPoints(winner){
    let pointsListX = document.querySelector("#point-X")
    let pointsListO = document.querySelector("#point-O")
  if(winner == "X"){
    pointsX += 1
    pointsListX.innerHTML = pointsX
    jogadaAtual.innerHTML = ''
    
    setTimeout(function() {
      clearDisplay()
    }, 3000);
  }else if(winner == "O"){
    pointsO += 1  
    pointsListO.innerHTML = pointsO
    jogadaAtual.innerHTML = ''


    setTimeout(function() {
      clearDisplay()
    }, 3000);
  }

}

function clearDisplay(){
  quadros.forEach(function (quadro) {//aqui ela bota o click em cada quadrado
    let sayWinner = document.querySelector('.winner-win')
    quadro.innerHTML = ""
    sayWinner.innerHTML = ''
    jogadaAtual.innerHTML = ` Jogada atual: ${yourPlay} `
  });
}