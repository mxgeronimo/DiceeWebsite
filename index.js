var die1 = Math.floor(Math.random() * 6) + 1;
var die2 = Math.floor(Math.random() * 6) + 1;
var imgsrc1 = "images/dice" + die1 + ".png";
var imgsrc2 = "images/dice" + die2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imgsrc1);
document.querySelectorAll("img")[1].setAttribute("src", imgsrc2);

if(die1 > die2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (die1 < die2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
