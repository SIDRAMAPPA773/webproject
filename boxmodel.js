let music = new Audio("tictools/music.mp3");
let ting = new Audio("tictools/ting.mp3");
let gameover = new Audio("tictools/gameover.mp3");

let turn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Function to check for a win
let boxtexts = document.getElementsByClassName('boxtext');
const checkWin = () => {
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
            boxtexts[e[0]].innerText !== ""
        ) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isGameOver = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='256px';
            document.querySelector().style.transform="translate(23vw,39vw) rotate(90deg)"
        }
    });
}

// Main game logic
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isGameOver) {
            boxtext.innerText = turn;
            ting.play();
            checkWin();
            if (!isGameOver) {
                turn = changeTurn();
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});
reset.addEventListener('click',(e)=>{
  let boxtexts =document.querySelectorAll('.boxtext');  
  Array.from(boxtexts).forEach(element=>{
    element.innerText="";
  });
  turn="X";
  isGameOver=false
document.getElementsByClassName("info")[0].innerText="Turn for" + turn;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})
