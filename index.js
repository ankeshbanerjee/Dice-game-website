// var randomNumber1 = Math.floor(Math.random()*6) + 1;
// if (randomNumber1 === 1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber1 === 2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if (randomNumber1 === 3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if (randomNumber1 === 4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if (randomNumber1 === 5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else if (randomNumber1 === 6){
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }


// var randomNumber2 = Math.floor(Math.random()*6) + 1;
// if (randomNumber2 === 1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber2 === 2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if (randomNumber2 === 3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if (randomNumber2 === 4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if (randomNumber2 === 5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else if (randomNumber2 === 6){
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png" ;
var randomImage1Src = "images/" + randomImage1;
 
document.querySelector(".img1").setAttribute("src", randomImage1Src);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png" ;
var randomImage2Src = "images/" + randomImage2;
 
document.querySelector(".img2").setAttribute("src", randomImage2Src);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw !";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}