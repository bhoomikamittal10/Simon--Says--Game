let gameSeq = [];
let userSeq = [];
let randomColor = ["yellow","red","green","purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started == false){
 console.log("game start");
 started = true;
 levelup();
}
   
});
function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}
function userColorflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
}

function levelup(){
    userSeq = [];
  level++;
    h2.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random()*3);
    let randomC = randomColor[randomIndex];
    let randomBtn = document.querySelector(`.${randomC}`);
       gameSeq.push(randomC);
       console.log(gameSeq);
       btnflash(randomBtn);
}

function checkAns(indx){
  if(userSeq[indx]===gameSeq[indx]){
   if(userSeq.length==gameSeq.length){
   setTimeout(levelup,1000);
   }
  }else{
       h2.innerHTML = `Game Over! Your score is <b> ${level}</b> <br> Press any key to start`;
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
          document.querySelector("body").style.backgroundColor = "white";
       },150);
       reset();
  }
}
function btnPress(){
   
    let btn = this;
   btnflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
  started = false;
  gameSeq= [];
  userSeq = [];
  level = 0;
}